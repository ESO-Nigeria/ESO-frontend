<template>
  <div>
    <NuxtLayout name="general" title="About Us" >

      <div class="container py-4">
        <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'About us' }]"></LayoutsBreadcrumb>
        <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 md:flex md:gap-6">
          <!-- Left Section with Image -->
          <div class="md:w-1/2 mb-4 md:mb-0">
            <img src="~/assets/images/about-banner-lg.png" alt="Group Image" class="w-full h-auto rounded-lg object-contain">
          </div>
          
          <!-- Right Section with Content -->
          <div class="md:w-1/2 flex flex-col justify-between">
            <!-- Header Section -->
            <div class="mb-4 text-justify">
              <h2 class="text-4xl font-bold text-left text-primary uppercase leading-snug">About the Nigerian ESO Collaborative</h2>
              <p class="text-base text-[#4F5865] mt-2">
                The Nigeria Enterprise Support Organizations (ESOs) Collaborative is a programme of the Impact Investors Foundation with support from the RISA Fund and UKAID. This programme is building a strong network of diverse ESOs that share a common goal to drive sustainable economic growth through entrepreneurship. This is by pooling collective expertise and resources to enhance the capacity of Nigerian ESOs to foster collaboration, innovation, and capacity building. Through a comprehensive range of services, strategic initiatives, and collaborative frameworks; the Collaborative is empowering enterprise support organizations to drive economic growth through a supportive ecosystem where Nigerian enterprises can thrive, grow, and contribute meaningfully to the nation's economic prosperity and societal well-being.
              </p>
            </div>
          
          </div>
        </div>
        <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 text-justify">
          <p class="text-base text-[#4F5865] mb-4">
            The Collaborative recognizes the critical importance of collaboration in achieving organizational objectives, delivering exceptional support services and developing SME sector. By leveraging the strengths and resources of each enterprise support organization within our network, the Nigerian ESO Collaborative is creating a more effective and holistic support ecosystem for businesses through knowledge sharing, networking and collaboration, innovation, research and development (R&D), advocacy, access to funding, mentorship, and continuous evaluation. The ESOs Collaborative has built a platform for a supportive ecosystem where Nigerian enterprises can thrive, grow, and contribute meaningfully to the nation's economic prosperity and societal well-being. We are leveraging our collective strengths, resources, and networks to overcome challenges, seize opportunities, and create lasting positive change for the benefit of the SME sector in Nigeria. Do join us in shaping the future of entrepreneurship and enterprise development in the Nation!          </p>
        </div>
      </div>
  </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>