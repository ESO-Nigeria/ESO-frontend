<template>
  <div>
    <NuxtLayout name="general" title="About Us">

      <div class="container py-4">
        <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'About us' }]"></LayoutsBreadcrumb>
        
<!-- About Section -->
<div class="w-full max-w-screen-lg items-center mx-auto p-4 sm:p-8">
  <!-- Mobile: Image first, then text -->
  <div class="md:flex md:gap-6 items-center">
    <!-- Image Section - First on mobile -->
    <div class="md:w-1/2 mb-6 md:mb-0 relative order-1 md:order-1">
      <!-- Container for both images -->
      <div class="relative w-full">
        <!-- Background element - Smaller on mobile -->
        <div class="overflow-hidden w-full md:w-[550px]">
          <img src="~/assets/images/element.png" alt="Background Element"  
              class="w-full h-auto object-contain md:object-cover md:ml-[-50px] scale-90 md:scale-100">
        </div>
        
        <!-- Main image -->
        <img src="~/assets/images/about-banner-lg.png" alt="Group Image" 
            class="relative w-full max-w-[400px] md:w-[450px] h-auto object-contain z-10 mt-[-300px] md:mt-[-420px] mx-auto">
      </div>
    </div>

    <!-- Text Section - Second on mobile -->
    <div class="md:w-1/2 flex flex-col justify-between order-2 md:order-2">
      <!-- Header Section -->
      <div class="mb-4 text-justify">
        <h2 class="text-3xl md:text-4xl font-bold text-left text-primary leading-snug">About the Nigerian ESO Collaborative</h2>
        <p class="text-base text-[#4F5865] mt-2">
          The Nigeria ESOs Collaborative is a network of dedicated enterprise support organizations committed to fostering the growth and development of Nigeria's entrepreneurial ecosystem with a drive to empower entrepreneurs across Nigeria and beyond by providing comprehensive support, resources, and a unified platform for collaboration, capacity building and innovation.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Why It Matters Section -->
<div class="w-full max-w-screen-lg items-center mx-auto p-4 sm:p-8 mt-8 md:mt-12">
  <!-- Mobile: Image first, then text -->
  <div class="md:flex md:gap-6 items-center">
    <!-- Image Section - First on mobile -->
    <div class="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
      <img src="~/assets/images/about-banner-lg.png" alt="Group Image" 
          class="w-full max-w-[400px] md:w-full h-auto rounded-lg object-contain mx-auto">
    </div>
    
    <!-- Text Section - Second on mobile -->
    <div class="md:w-1/2 flex flex-col justify-between order-2 md:order-1">
      <!-- Header Section -->
      <div class="mb-4 text-justify">
        <h2 class="text-3xl md:text-4xl font-bold text-left text-primary leading-snug">Why the ESO Collaborative Matters</h2>
        <p class="text-base text-[#4F5865] mt-2">
          The Collaborative brings together a diverse range of Enterprise Support Organizations (ESOs) that share a common goal to drive sustainable economic growth through entrepreneurship. By pooling collective expertise and resources, the collaborative aims to enhance the capacity of Nigerian ESOs, helping them overcome challenges and seize opportunities in a dynamic business environment to fill the following gaps as identified in the recent ESO Mapping report:
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Identified Gaps Section -->
<div class="w-full max-w-screen-lg items-center mx-auto p-4 sm:p-8 mt-8 md:mt-12">
  <!-- Mobile: Image first, then text -->
  <div class="md:flex md:gap-6 items-center">
    <!-- Image Section - First on mobile -->
    <div class="md:w-1/2 mb-6 md:mb-0 order-1 md:order-1">
      <img src="~/assets/images/about-banner-lg.png" alt="Gap Analysis" 
          class="w-full max-w-[400px] md:w-full h-auto rounded-lg object-contain mx-auto">
    </div>

    <!-- Text Section - Second on mobile -->
    <div class="md:w-1/2 flex flex-col justify-between order-2 md:order-2">
      <!-- Header Section -->
      <div class="mb-4 text-justify">
        <h2 class="text-3xl md:text-4xl font-bold text-left text-primary leading-snug">Identified Gaps in the ESO Ecosystem</h2>
        <div class="space-y-4 mt-4">
          <div class="flex items-start gap-3">
            <div class="min-w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
              1
            </div>
            <div>
              <p class="font-semibold text-primary">Low Levels of Enterprise Readiness</p>
              <!-- <p class="text-[#4F5865] text-sm mt-1">
                Many Nigerian enterprises lack the foundational capabilities, documentation, and market readiness to attract investment and scale effectively.
              </p> -->
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="min-w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
              2
            </div>
            <div>
              <p class="font-semibold text-primary">Low Capacity of ESOs to Deliver Effective Programs</p>
              <!-- <p class="text-[#4F5865] text-sm mt-1">
                Many Enterprise Support Organizations face challenges in designing and implementing impactful programs due to limited resources, expertise, and operational capabilities.
              </p> -->
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="min-w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
              3
            </div>
            <div>
              <p class="font-semibold text-primary">Limited Sectors of Focus</p>
              <!-- <p class="text-[#4F5865] text-sm mt-1">
                Support services are often concentrated in few sectors, leaving emerging and high-potential industries underserved and limiting diversification opportunities.
              </p> -->
            </div>
          </div>
          
          <div class="flex items-start gap-3">
            <div class="min-w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
              4
            </div>
            <div>
              <p class="font-semibold text-primary">Disconnect Between MSME Investment & Access to Finance</p>
              <!-- <p class="text-[#4F5865] text-sm mt-1">
                While financing exists in the market, Micro, Small and Medium Enterprises struggle to access these funds due to information asymmetry, stringent requirements, and inadequate financial literacy.
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <!-- Vision & Mission Section -->
        <div class="w-full max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-3">
          <div class="grid md:grid-cols-2 text-[#1B4137] gap-6">
            <!-- Vision -->
            <div class="border border-[8px] text-[#1B4137] border-[#F5F5F5] h-[390px] rounded-md px-6 py-8 space-y-6 flex flex-col justify-center">
              <p class="text-2xl">
                Our Vision
              </p>
              <p class="text-">
                To foster a vibrant and inclusive ecosystem of empowered enterprise support organizations (ESOs) driving sustainable economic growth and innovation across Nigeria through collaborative support initiatives.
              </p>
            </div>
            
            <!-- Mission -->
            <div class="border border-[8px] text-[#1B4137] border-[#F5F5F5] h-[390px] text-white rounded-md px-6 py-8 space-y-6 flex flex-col justify-center">
              <p class="text-2xl  text-[#1B4137]">
                Our Mission
              </p>
              <ul class="list-disc pl-3 text- space-y-2  text-[#1B4137]">
                <li>To collaborate to build an ecosystem where ESOs thrive,</li>
                <li>
                  To engage with stakeholders to increase investments (with a focus on impact investments) into enterprises by providing comprehensive, accessible, and impactful support services
                </li>
                <li>
                  To develop globally competitive ESOs which are sustainable, innovative, well governed, cooperating and profitable.
                </li>
                <li>To contribute to  a sustainable enabling impact investing ecosystem  in Nigeria</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Core Values Section -->
        <div class="w-full max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-5">
          <p class="text-primary text-2xl font-bold">Core Values</p>
          <p class="text-[#4F5865] text-base">By adhering to these core values, ESOs Collaborative endeavors to create a supportive ecosystem where Nigerian enterprises can thrive, grow, and contribute meaningfully to the nation's economic prosperity and societal well-being.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Collaboration -->
            <div class="group shadow-sm border rounded-md p-6 space-y-4 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5.5A3.5 3.5 0 0 1 15.5 9c0 1.355-1.172 2.5-2.5 2.5-1.328 0-2.5-1.145-2.5-2.5A3.5 3.5 0 0 1 12 5.5zm0-2A5.5 5.5 0 0 0 6.5 9c0 2.973 2.16 5.5 5.5 5.5s5.5-2.527 5.5-5.5A5.5 5.5 0 0 0 12 3.5zm-1 15v-4H8l4-7v4h3l-4 7z"/>
                  </svg>
                </div>
                <p class="text-xl font-semibold text-primary">
                  Collaboration
                </p>
              </div>
              <p class="text-base text-[#4F5865] text-justify flex-grow">
                The collaborative believes in the power of collaboration to drive collective impact and create synergy among ESOs, government agencies, financial institutions, academia, and other stakeholders.
              </p>
            </div>
            
            <!-- Inclusivity -->
            <div class="group shadow-sm border rounded-md p-6 space-y-4 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p class="text-xl font-semibold text-primary">
                  Inclusivity
                </p>
              </div>
              <p class="text-base text-[#4F5865] text-justify flex-grow">
                We are committed to promoting inclusivity and equity by ensuring that support services are accessible to enterprises of all sizes, sectors, and regions across Nigeria.
              </p>
            </div>
            
            <!-- Innovation -->
            <div class="group shadow-sm border rounded-md p-6 space-y-4 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
                  </svg>
                </div>
                <p class="text-xl font-semibold text-primary">
                  Innovation
                </p>
              </div>
              <p class="text-base text-[#4F5865] text-justify flex-grow">
                We embrace innovation as a catalyst for economic growth and competitiveness, fostering a culture of creativity, experimentation, and continuous improvement in our support initiatives.
              </p>
            </div>
            
            <!-- Integrity -->
            <div class="group shadow-sm border rounded-md p-6 space-y-4 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                </div>
                <p class="text-xl font-semibold text-primary">
                  Integrity
                </p>
              </div>
              <p class="text-base text-[#4F5865] text-justify flex-grow">
                We uphold the highest standards of integrity, transparency, and ethical conduct in all our interactions and operations, earning the trust and confidence of stakeholders.
              </p>
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
// Your scoped styles here
</style>