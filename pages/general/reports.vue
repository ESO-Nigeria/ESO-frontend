<template>
  <div>
    <NuxtLayout name="general" title="Reports">

      <div class="container py-4">
        <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Reports' }]"></LayoutsBreadcrumb>
        
        <div class="py-6 h-full">
          <div class="grid h-full items-stretch gap-6">
            <div class="space-y-5">
                 <div class="flex flex-col lg:flex-row justify-between gap-x-6 gap-y-4 lg:gap-y-0 w-full lg:w-1/2">
                 <div class="flex-1">
                   <div class="relative flex border items-center border-primary rounded-md ">
                     <Input v-model="searchValue" id="search" type="text" placeholder="Search for Reports" 
                     class="pl-10 h-11 border-0  ring-0 disabled:bg-[#EAECF0] focus:bg-[#F5F5F5]   rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-[#333] text-sm"
                     />
                     <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                       <Search class="size-5 text-muted-foreground" />
                     </span>
                     <Button @click="searchReports" type="button" size="lg" class="h-11 rounded-none px-6">Search</Button>
                   </div>
                 </div>
                 <DropdownMenu>
                   <DropdownMenuTrigger as-child>
                     <Button variant="outline" class="h-11 font-normal text-base shrink-0">
                       Sort by: {{ sortLabel }}
                     </Button>
                   </DropdownMenuTrigger>
                   <DropdownMenuContent class="w-56">
                     <DropdownMenuLabel>Select Order</DropdownMenuLabel>
                     <DropdownMenuRadioGroup v-model="filterOption">
                       <DropdownMenuRadioItem class="text-sm font-normal" value="newest">
                         Newest First
                       </DropdownMenuRadioItem>
                       <DropdownMenuRadioItem class="text-sm font-normal" value="oldest">
                         Oldest First
                       </DropdownMenuRadioItem>
                     </DropdownMenuRadioGroup>
                   </DropdownMenuContent>
                 </DropdownMenu>
               </div>

              <!-- Loading State -->
              <div v-if="loading" class="flex h-screen justify-center items-center col-span-full">
               <LayoutsLoader />
             </div>

              <!-- Reports Grid -->
              <div v-else class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7">
               <!-- Dynamic Report Cards -->
               <NuxtLink 
                 v-for="report in reportsList" 
                 :key="report.id"
                 :to="`/general/report/${report.id}`" 
                 class="block"
               >
                 <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-1 cursor-pointer h-[350px] flex flex-col">
                   <!-- Image Section -->
                   <div class="relative overflow-hidden h-40 flex-shrink-0 bg-yellow-400">
                      <img 
                        :src="report.thumbnail_url || placeholderImg" 
                        :alt="report.title" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      >
                     <div class="absolute top-3 left-3">
                      
                     </div>
                   </div>
                   
                   <!-- Content Section -->
                   <div class="p-5 flex flex-col flex-grow">
                     <div class="flex items-center justify-between mb-2">
                       <span 
                         :class="[
                           'text-xs font-medium px-2 py-1 rounded',
                           report.category === 'study' ? 'text-primary bg-primary/10' : 'text-customGreen bg-customGreen/10'
                         ]"
                       >
                         {{ report.category === 'study' ? 'STUDY' : 'REPORT' }}
                       </span>
                       <span class="text-xs text-gray-500">{{ new Date(report.created_at).getFullYear() }}</span>
                     </div>
                     
                     <h3 class="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 uppercase">
                       {{ report.title }}
                     </h3>
                     
                     <div class="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow overflow-hidden" v-html="report.content">
                     </div>
                   </div>
                 </div>
               </NuxtLink>
             </div>
    
              </div>
            </div>
          </div>
        </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import { Search } from 'lucide-vue-next';
import Input from '~/components/ui/input/Input.vue';
import Button from '~/components/ui/button/Button.vue';
import { useProfileStore } from '~/store/profile';
import placeholderImg from '~/assets/images/placeholderImg.png';

const profileStore = useProfileStore()

const filterOption = ref("newest");
const sortLabel = computed(() => filterOption.value === "newest" ? "Newest First" : "Oldest First");

const reportsList = computed(() => {
  let list = [...(profileStore.reports?.results || [])];
  if (filterOption.value === 'newest') {
    list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else {
    list.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }
  return list;
});
const loading = computed(() => profileStore.loadingReports)

const searchValue = ref("")
const searchReports = () => {
  profileStore.getReports(searchValue.value)
}

watch(
  () => searchValue.value,
  (newValue) => {
    if(newValue === ''){
      profileStore.getReports()
    }
  }
);

onMounted(() => {
  profileStore.getReports()
})
</script>

<style lang="scss" scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-4px);
}
</style>
