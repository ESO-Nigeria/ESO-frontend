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
        <!-- <div class="mb-8">
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
        </div> -->

        <!-- Gallery Content -->
        <div class="py-6">
          <!-- Gallery Grid -->
          <div v-if="loadingGalleries" class="flex justify-center items-center py-20">
            <LayoutsLoader />
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            <div 
              v-for="event in galleries?.results || []" 
              :key="event.id"
              class="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl shadow-black/10 hover:shadow-black/20 transition-all duration-300"
              @click="openLightbox(event)"
            >
              <!-- Image Container -->
              <div class="aspect-[4/5] overflow-hidden relative bg-[#D97706]">
                <img 
                  :src="event.image_cover_url || event.image_cover || eventPhotos(event)[0]?.image_url || '/placeholder-image.jpg'" 
                  :alt="event.title || 'Gallery image'"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  @error="(e) => { e.target.style.display = 'none' }"
                />

                <!-- Photo count badge for multi-photo events -->
                <div 
                  v-if="eventPhotos(event).length > 1"
                  class="absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1"
                >
                  <ImageIcon class="size-3" />
                  {{ eventPhotos(event).length }}
                </div>
              </div>
              
              <!-- Hover Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#257F4A] via-[#257F4A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-4 w-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 class="text-white font-semibold text-lg mb-1 leading-snug">{{ event.title || 'Untitled' }}</h3>
                  <p v-if="event.description" class="text-white/90 text-sm line-clamp-2">{{ event.description }}</p>
                  <div class="flex items-center gap-2 mt-2">
                    <Calendar class="size-4 text-white/80" />
                    <span class="text-white/80 text-sm">{{ formatDate(event.created_at) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Events Message -->
          <div v-if="!loadingGalleries && (!galleries?.results || galleries.results.length === 0)" class="text-center py-12">
            <div class="mx-auto size-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <ImageIcon class="size-8 text-gray-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">
              No events found
            </h3>
            <p class="text-gray-500">
              Check back later for new gallery events
            </p>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div 
        v-if="selectedEvent"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <!-- Blurred Background -->
        <div class="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
        
        <!-- Close Button -->
        <button 
          @click.stop="closeLightbox"
          class="absolute top-6 right-6 size-12 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300 flex items-center justify-center z-20"
        >
          <X class="size-6" />
        </button>

        <!-- Lightbox Content -->
        <div class="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-xl" @click.stop>
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Main Image -->
            <div class="lg:w-2/3">
              <div class="relative aspect-video overflow-hidden rounded-xl bg-[#D97706]/20">
                <!-- Loading state (fixes the blank flash on open/navigate) -->
                <div v-if="imageLoading" class="absolute inset-0 flex items-center justify-center">
                  <LayoutsLoader />
                </div>

                <img 
                  :key="currentPhotoUrl"
                  :src="currentPhotoUrl" 
                  :alt="selectedEvent.title"
                  class="w-full h-full object-contain transition-opacity duration-300"
                  :class="imageLoading ? 'opacity-0' : 'opacity-100'"
                  @load="imageLoading = false"
                />

                <!-- Prev / Next, only shown when the event has more than one photo -->
                <template v-if="currentPhotos.length > 1">
                  <button
                    @click.stop="prevPhoto"
                    :disabled="currentPhotoIndex === 0"
                    class="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/50 hover:bg-white/70 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                  >
                    <ChevronLeft class="size-5" />
                  </button>
                  <button
                    @click.stop="nextPhoto"
                    :disabled="currentPhotoIndex === currentPhotos.length - 1"
                    class="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/50 hover:bg-white/70 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                  >
                    <ChevronRight class="size-5" />
                  </button>

                  <!-- Photo counter, e.g. 2 / 5 -->
                  <span class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {{ currentPhotoIndex + 1 }} / {{ currentPhotos.length }}
                  </span>
                </template>
              </div>
            </div>

            <!-- Event Info -->
            <div class="lg:w-1/3 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-h-[60vh] lg:max-h-[70vh] overflow-y-auto">
              <h2 class="text-2xl font-bold text-white mb-4">{{ selectedEvent.title || 'Untitled' }}</h2>
              <p v-if="selectedEvent.description" class="text-white/80 mb-6 whitespace-pre-line">{{ selectedEvent.description }}</p>
              
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <Calendar class="size-5 text-white/60" />
                  <span class="text-white">{{ formatDate(selectedEvent.created_at) }}</span>
                </div>
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
import { useSeoMeta } from '#imports';

useSeoMeta({
  title: 'Gallery | Enterprise Support Organisations (ESO) Collaborative',
  ogTitle: 'Gallery | Enterprise Support Organisations (ESO) Collaborative',
  description: 'Explore the ESO Collaborative gallery: Moments Turned Into Masterpieces.',
  ogDescription: 'Explore the ESO Collaborative gallery: Moments Turned Into Masterpieces.',
  twitterTitle: 'Gallery | Enterprise Support Organisations (ESO) Collaborative',
  twitterDescription: 'Explore the ESO Collaborative gallery: Moments Turned Into Masterpieces.'
})
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

// Lightbox state — scoped to a single EVENT, not the whole gallery
const selectedEvent = ref(null)
const currentPhotoIndex = ref(0)
const imageLoading = ref(true)

// Computed properties from store
const galleries = computed(() => {
  return profileStore.galleries
})

const loadingGalleries = computed(() => {
  return profileStore.loadingGalleries
})

// Normalizes an event's photos into a flat array of { image_url }.
// Always includes the main cover image as the first image of the slideshow,
// and appends any additional child photos.
const eventPhotos = (event) => {
  if (!event) return []
  const photos = []
  const cover = event.image_cover_url || event.image_cover
  if (cover) {
    photos.push({ image_url: cover })
  }
  if (Array.isArray(event.images)) {
    event.images.forEach(img => {
      const imgUrl = img?.image_url || img?.image_cover_url || img
      if (imgUrl && imgUrl !== cover) {
        photos.push({ image_url: imgUrl })
      }
    })
  }
  return photos
}

const currentPhotos = computed(() => eventPhotos(selectedEvent.value))

const currentPhotoUrl = computed(() => {
  const photo = currentPhotos.value[currentPhotoIndex.value]
  return photo?.image_url || photo?.gallery_image_url || photo || '/placeholder-image.jpg'
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

// Open lightbox for a given event, always starting at its first photo
const openLightbox = (event) => {
  selectedEvent.value = event
  currentPhotoIndex.value = 0
  imageLoading.value = true
  document.body.style.overflow = 'hidden'
}

// Close lightbox
const closeLightbox = () => {
  selectedEvent.value = null
  currentPhotoIndex.value = 0
  document.body.style.overflow = 'auto'
}

// Navigate to next photo within the current event
const nextPhoto = () => {
  if (currentPhotoIndex.value < currentPhotos.value.length - 1) {
    currentPhotoIndex.value++
    imageLoading.value = true
  }
}

// Navigate to previous photo within the current event
const prevPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--
    imageLoading.value = true
  }
}

// Preload the neighbouring photos so next/prev feels instant
// instead of showing another blank flash.
watch([selectedEvent, currentPhotoIndex], () => {
  const photos = currentPhotos.value
  ;[currentPhotoIndex.value - 1, currentPhotoIndex.value + 1].forEach((i) => {
    const photo = photos[i]
    const url = photo?.image_url || photo?.gallery_image_url || photo
    if (url) {
      const img = new Image()
      img.src = url
    }
  })
})

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
    if (!selectedEvent.value) return
    
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      nextPhoto()
    } else if (e.key === 'ArrowLeft') {
      prevPhoto()
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