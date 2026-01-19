<template>
  <div>
    <NuxtLayout name="general" title="Reports">

      <div class="container py-8">
        <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Reports' }]"></LayoutsBreadcrumb>
        
        <!-- Main Content -->
         <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 md:flex md:gap-6">
           <div class="max-w-7xl mx-auto">
             <!-- Page Header -->
             <div class="text-center mb-12">
               <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Insights & Research</h1>
               <p class="text-xl text-[#4F5865] max-w-3xl mx-auto">
                 Discover comprehensive reports and analysis on Nigeria's enterprise support ecosystem
               </p>
             </div>
   
             <!-- Reports Grid -->
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <!-- Report Card 1 - Main Report -->
              <NuxtLink to="/general/mapping-report" class="block">
                <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-1 cursor-pointer h-[350px] flex flex-col">
                  <!-- Image Section -->
                  <div class="relative overflow-hidden h-40 flex-shrink-0">
                    <img 
                      src="~/assets/images/eso-mapping-report-1.png" 
                      alt="ESO Mapping Report Cover" 
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                    <div class="absolute top-3 left-3">
                      <span class="bg-primary text-white text-xs font-semibold px-2 py-1 rounded">FEATURED</span>
                    </div>
                  </div>
                  
                  <!-- Content Section -->
                  <div class="p-5 flex flex-col flex-grow">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">STUDY</span>
                      <span class="text-xs text-gray-500">2024</span>
                    </div>
                    
                    <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      Mapping and Analysis of ESOs in Nigeria
                    </h3>
                    
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                      Comprehensive study on Nigeria's enterprise support organizations, their impact and opportunities.
                    </p>
            
                    
                    <!-- View Button -->
                    <!-- <div class="mt-auto">
                      <div class="border border-primary text-primary text-sm font-medium py-2 rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-1.5 group/btn">
                        <span>View Report</span>
                        <svg class="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </div>
                    </div> -->
                  </div>
                </div>
              </NuxtLink>
            
              <!-- Report Card 2 - ESO Annual Forum -->
              <NuxtLink to="/general/annual-forum" class="block">
                <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-customGreen/30 hover:-translate-y-1 cursor-pointer h-[350px] flex flex-col">
                  <!-- Image Section -->
                  <div class="relative overflow-hidden h-40 flex-shrink-0">
                    <img 
                      src="~/assets/images/eso-annual-report.png" 
                      alt="ESO Annual Forum" 
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                    <div class="absolute top-3 left-3">
                      <span class="bg-customGreen text-white text-xs font-semibold px-2 py-1 rounded">FORUM</span>
                    </div>
                  </div>
                  
                  <!-- Content Section -->
                  <div class="p-5 flex flex-col flex-grow">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs font-medium text-customGreen bg-customGreen/10 px-2 py-1 rounded">REPORT</span>
                      <span class="text-xs text-gray-500">2025</span>
                    </div>
                    
                    <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-customGreen transition-colors line-clamp-2">
                      ESO First Annual Forum
                    </h3>
                    
                    <p class="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                      Report on building MSME investment readiness capacity and creating scalable pathways.
                    </p>
            
                    
                    <!-- View Button -->
                    <!-- <div class="mt-auto">
                      <div class="border border-customGreen text-customGreen text-sm font-medium py-2 rounded-lg hover:bg-customGreen hover:text-white transition-colors flex items-center justify-center gap-1.5 group/btn">
                        <span>View Report</span>
                        <svg class="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </div>
                    </div> -->
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
// Your script logic here
</script>

<style lang="scss" scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:-translate-y-2 {
  transform: translateY(-8px);
}
</style>