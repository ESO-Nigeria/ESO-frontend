<template>
  <div>
    <NuxtLayout name="general" title="THE ENTERPRISE SUPPORT ORGANISATION FIRST ANNUAL FORUM" >

      <div class="container py-4">
        <LayoutsBreadcrumb :breadcrumbs="[{ text: 'THE ENTERPRISE SUPPORT ORGANISATION FIRST ANNUAL FORUM' }]"></LayoutsBreadcrumb>
        <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 md:flex md:gap-6">
          <!-- Left Section with Image -->
          <div class="md:w-1/2 mb-4 md:mb-0">
            <img src="~/assets/images/eso-annual-report.png" alt="Group Image" class="w-full h-auto rounded-lg object-contain">
          </div>
          
          <!-- Right Section with Content -->
          <div class="md:w-1/2 flex flex-col justify-between">
            <!-- Header Section -->
            <div class="mb-4 text-justify">
              <h2 class="text-4xl font-bold text-left text-primary uppercase leading-snug">THE ENTERPRISE SUPPORT ORGANISATION FIRST ANNUAL FORUM</h2>
              <p class="text-base text-[#4F5865] mt-2">
               ESOs serve as catalysts for entrepreneurship and business sustainability, providing critical resources, 
               mentorship, networking opportunities, investment-readiness and invariably, access to funding to empower enterprises at all stages of their growth journey. <br><br>
               Impact Investors Foundation understands the strength of ESOs in driving SME Growth and in February 2025 convened their First Annual Forum with the theme "Scalable Pathways for ESOs in Nigeria to Build MSME Investment Readiness Capacity" 
               This is a report of the Days event that captures the deliberations and solutions shared that MSMEs can adopt to improve their ability to be investment ready!
              </p>
            </div>

        <div class="bg-customGreen  rounded-[25px] px-4  sm:px-6 lg:px-8 ">
          <div class="container pt-4 pb-4 mx-auto px-4">
            <!-- First Section: Heading -->
            <div class="grid grid-cols-1 lg:grid-cols-1 gap-4 items-center">
              <div>
                <h3 class="text-3xl leading-snug my-3 text-[#fff]">
                Download the Report Now
              </h3>
               <a href="https://drive.google.com/file/d/14hexC78MZjR6PBPpkQ00aQvTznWAhk7t/view?usp=sharing" target="_blank">
                  <Button variant="variant" size="lg" class="bg-customLightGreen mb-2 text-[#fff] text-base font-normal">
                    Download Now
                  </Button>
                </a>
               <!-- <p class="text-base text-[#fff]">
                Fill in your details to access the full report and join the movement led 
                by the Impact Investors Foundation to strengthen Nigeria’s enterprise ecosystem.

                </p> -->
              </div>
             
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

</script>

<style lang="scss" scoped>

</style>