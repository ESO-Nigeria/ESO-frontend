<template>
  <div>
    <NuxtLayout name="general">
      <!-- Hero Banner -->
      <div class="relative h-[400px] rounded-none overflow-hidden mb-10">
        <img 
          src="~/assets/images/about-banner.png" 
          alt="Gallery Banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 class="text-5xl md:text-[32px] font-bold mb-4">ESO Gallery</h1>
          <p class="text-xl md:text-[20px] max-w-2xl">
            Moments Turned Into Masterpieces
          </p>
        </div>
      </div>
      
      <div class="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl py-4">
        <!-- Search Section -->
        <div class="mb-8">
          <div class="flex flex-col lg:flex-row justify-between gap-x-6 gap-y-4 lg:gap-y-0 w-full">
            <div class="flex-1">
              <FormField v-slot="{ componentField }" name="search">
                <FormItem class="space-y-1">
                  <FormControl>
                    <div class="relative flex border items-center border-primary rounded-md">
                      <Input 
                        v-model="searchQuery" 
                        v-bind="componentField" 
                        id="search" 
                        type="text" 
                        placeholder="Search for images..." 
                        class="pl-10 h-11 border-0 ring-0 disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-[#333] text-sm"
                        @keyup.enter="searchGalleries"
                      />
                      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                        <Search class="size-5 text-muted-foreground" />
                      </span>
                      <Button @click="searchGalleries" type="button" size="lg" class="h-11 rounded-none">
                        Search
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              </FormField>
            </div>
          </div>
        </div>

        <!-- Gallery Content -->
        <div class="py-6">
          <!-- Gallery Grid -->
          <div v-if="loadingGalleries" class="flex justify-center items-center py-20">
            <LayoutsLoader />
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div 
              v-for="image in galleries?.results || []" 
              :key="image.id"
              class="group relative overflow-hidden rounded-none cursor-pointer"
              @click="openLightbox(image)"
            >
              <!-- Image Container -->
              <div class="aspect-square overflow-hidden">
                <img 
                  :src="image.gallery_image_url || image.gallery_image || '/placeholder-image.jpg'" 
                  :alt="image.title || 'Gallery image'"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div class="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 class="text-white font-semibold text-lg mb-2">{{ image.title || 'Untitled' }}</h3>
                  <p v-if="image.description" class="text-white/80 text-sm line-clamp-2">{{ image.description }}</p>
                  <div class="flex items-center gap-2 mt-2">
                    <Calendar class="size-4 text-white/60" />
                    <span class="text-white/60 text-sm">{{ formatDate(image.created_at) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Images Message -->
          <div v-if="!loadingGalleries && (!galleries?.results || galleries.results.length === 0)" class="text-center py-12">
            <div class="mx-auto size-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <ImageIcon class="size-8 text-gray-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">
              No images found
            </h3>
            <p class="text-gray-500">
              Check back later for new images
            </p>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div 
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <!-- Blurred Background -->
        <div class="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
        
        <!-- Close Button -->
        <button 
          @click.stop="closeLightbox"
          class="absolute top-6 right-6 size-12 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300 flex items-center justify-center z-10"
        >
          <X class="size-6" />
        </button>

        <!-- Lightbox Content -->
        <div class="relative max-w-6xl w-full max-h-[90vh]" @click.stop>
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Main Image -->
            <div class="lg:w-2/3">
              <div class="relative aspect-video overflow-hidden rounded-xl">
                <img 
                  :src="selectedImage.gallery_image_url || selectedImage.gallery_image" 
                  :alt="selectedImage.title"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>

            <!-- Image Info -->
            <div class="lg:w-1/3 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 class="text-2xl font-bold text-white mb-4">{{ selectedImage.title || 'Untitled' }}</h2>
              <p v-if="selectedImage.description" class="text-white/80 mb-6">{{ selectedImage.description }}</p>
              
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <Calendar class="size-5 text-white/60" />
                  <span class="text-white">{{ formatDate(selectedImage.created_at) }}</span>
                </div>
              </div>

              <!-- Navigation -->
              <div v-if="galleries?.results?.length > 1" class="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
                <Button 
                  @click.stop="prevImage"
                  :disabled="currentImageIndex === 0"
                  variant="outline"
                  class="text-white border-white/30 hover:bg-white/10 bg-white/10 hover:text-black"
                >
                  <ChevronLeft class="size-4 mr-2" />
                  Previous
                </Button>
                
                <span class="text-white/60">
                  {{ currentImageIndex + 1 }} / {{ galleries?.results?.length || 0 }}
                </span>
                
                <Button 
                  @click.stop="nextImage"
                  :disabled="currentImageIndex === (galleries?.results?.length || 0) - 1"
                  variant="outline"
                  class="text-white border-white/30 hover:bg-white/10 bg-white/10 hover:text-black"
                >
                  Next
                  <ChevronRight class="size-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { 
  Calendar, 
  X, 
  ImageIcon, 
  ChevronLeft, 
  ChevronRight,
  Search
} from 'lucide-vue-next'
import {
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useProfileStore } from '~/store/profile'

const profileStore = useProfileStore()
const searchQuery = ref('')
const selectedImage = ref(null)
const currentImageIndex = ref(0)

// Computed properties from store
const galleries = computed(() => {
  return profileStore.galleries
})

const loadingGalleries = computed(() => {
  return profileStore.loadingGalleries
})

// Fetch galleries
const fetchGalleries = () => {
  profileStore.getGalleries(searchQuery.value, '1')
}

// Search handler
const searchGalleries = () => {
  fetchGalleries()
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return 'No date'
  
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Open lightbox
const openLightbox = (image) => {
  selectedImage.value = image
  // Find the index of the selected image in the current results
  if (galleries.value?.results) {
    currentImageIndex.value = galleries.value.results.findIndex(img => img.id === image.id)
  }
  document.body.style.overflow = 'hidden'
}

// Close lightbox
const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}

// Navigate to next image
const nextImage = () => {
  if (!galleries.value?.results) return
  
  if (currentImageIndex.value < galleries.value.results.length - 1) {
    currentImageIndex.value++
    selectedImage.value = galleries.value.results[currentImageIndex.value]
  }
}

// Navigate to previous image
const prevImage = () => {
  if (!galleries.value?.results) return
  
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
    selectedImage.value = galleries.value.results[currentImageIndex.value]
  }
}

// Watch for empty search to reset
watch(
  () => searchQuery.value,
  (newValue) => {
    if (newValue === '') {
      fetchGalleries()
    }
  }
)

// Handle keyboard navigation for lightbox
onMounted(() => {
  const handleKeydown = (e) => {
    if (!selectedImage.value) return
    
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    }
  }
  
  window.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
})

// Fetch initial data
onMounted(() => {
  fetchGalleries()
})
</script>

<style lang="scss" scoped>
// Custom styles
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Smooth transitions
.gallery-item {
  transition: all 0.3s ease;
}

// Lightbox animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>