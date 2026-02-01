<template>
  <div>
    <NuxtLayout name="general" title="Reports">

      <div class="container py-8">
        <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Reports' }]"></LayoutsBreadcrumb>
        
        <!-- Main Content -->
         <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 md:flex md:gap-6">
           <div class="max-w-7xl mx-auto w-full">
             <!-- Page Header -->
             <div class="text-center mb-12">
               <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Insights & Research</h1>
               <p class="text-xl text-[#4F5865] max-w-3xl mx-auto">
                 Discover comprehensive reports and analysis on Nigeria's enterprise support ecosystem
               </p>
             </div>
    
             <!-- Loading State -->
             <div v-if="loading" class="flex justify-center items-center py-20">
               <LayoutsLoader />
             </div>

             <!-- Reports Grid -->
             <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
               <!-- Dynamic Report Cards -->
               <NuxtLink 
                 v-for="report in reportsList" 
                 :key="report.id"
                 :to="`/general/report/${report.id}`" 
                 class="block"
               >
                 <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-1 cursor-pointer h-[350px] flex flex-col">
                   <!-- Image Section -->
                   <div class="relative overflow-hidden h-40 flex-shrink-0">
                     <img 
                       :src="report.thumbnail || placeholderImg" 
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
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
import placeholderImg from '~/assets/images/placeholderImg.png';

const profileStore = useProfileStore()

const reportsList = computed(() => profileStore.reports?.results || [])
const loading = computed(() => profileStore.loadingReports)

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
