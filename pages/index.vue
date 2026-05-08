<template>
  <div>
    <NuxtLayout name="general">
      <section class="relative pt-12 overflow-hidden sm:pb-8 lg:pb-12">
        <div class="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                <div>
                    <h1 class="text-4xl font-bold  sm:text-5xl ">Enterprise Support Organisations (ESO) Collaborative</h1>
                    <p class="mt-4 text-xl font-normal text-[#475467]  sm:mt-8">We are a group of Professionals providing support to MSMEs in Nigeria and building a stronger ecosystem 
                    </p>
                    <div class="relative mt-8 rounded-md">
                        <div class="relative">
                            <div class="relative border flex rounded-md">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-6">
                                    <svg class="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input v-model="search" type="text" name="" id="" placeholder="Looking for a programme?" class="rounded-r-none block w-full py-4 pr-6  placeholder-gray-500 border border-transparent  rounded-md pl-14 focus:border-transparent focus:ring-0" />
                                
                                <div class="inline-flex">
                                  <NuxtLink :to="search ? `/general/searchResult?q=${search}` : ''"  type="button" class="border rounded-r-md border-r inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest uppercase transition-all duration-200 bg-primary text-white  sm:w-auto sm:py-3 hover:opacity-90">Search</NuxtLink>
                              </div>
                              </div>
                        </div>
                       
                    </div>
                    <div class="mt-4 ">
                        <NuxtLink to="/general/programmes" class="text-base text-[#257F4A] font-normal ">View all programmes</NuxtLink>
                    </div>
                </div>
                <div class="relative">
                  <img class=" w-full  rounded-tl-[142px] " src="~/assets/images/eso-hero-image-banner-new.png" alt="" />
              </div>
              
            </div>
        </div>
    </section>
    <section class="mb-12">
      <div class="px-4 mx-auto space-y-4 relative sm:px-6 lg:px-8 max-w-7xl">
        <div class="">
          <div class="pt-0">
            <p class="text-2xl text-[#257F4A] mb-3">
              About Us
            </p>
            <h3 class="text-3xl leading-snug my-3 pt-5">
              Opportunities that grow  <br /> with your journey
            </h3>
            <p class="text-base text-[#475467]">
              This platform is a community resource developed by the ESO Collaborative which brings together government, the Nigeria Hubs Network, and other enterprise support organisations. It provides entrepreneurs, startups, businesses, freelancers etc. with extensive details of programmes provided by Enterprise Support Organisations (ESOs) in Nigeria.
            </p>
          </div>
          <div class="flex flex-wrap w-full bg-gray-50 p-4 mt-4 rounded">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full p-3">
              <div class="p-6 bg-white rounded-[10px] shadow-sm border-b-2 border-[#257F4A] flex flex-col relative transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl group">
                <div class="flex items-start mb-4">
                  <div class="relative flex-shrink-0 mr-6">
                    <div class="absolute -top-2 -left-2 w-16 h-16 bg-green-50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-110"></div>
                    <div class="relative w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#257F4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <circle cx="12" cy="11" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-col pt-1">
                    <h2 class="text-lg text-[#0E7834] mb-1">Reliable programmes</h2>
                    <p class="leading-relaxed text-xs text-[#475467]">
                      All Enterprise support organizations (ESOs) and their programmes on this platform have been carefully verified.
                    </p>
                  </div>
                </div>
                <NuxtLink to="/general/programmes" class="w-9 h-9 mt-2 rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer bg-white transition-all group-hover:bg-[#257F4A] group-hover:border-[#257F4A]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#257F4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <div class="xl:w-1/3 lg:w-1/2 md:w-full p-3">
              <div class="p-6 bg-white rounded-[10px] shadow-sm border-b-2 border-[#FE7102] flex flex-col relative transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl group">
                <div class="flex items-start mb-4">
                  <div class="relative flex-shrink-0 mr-6">
                    <div class="absolute -top-2 -left-2 w-16 h-16 bg-orange-50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-110"></div>
                    <div class="relative w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FE7102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-col pt-1">
                    <h2 class="text-lg text-[#FE7102] mb-1">Detailed information</h2>
                    <p class="leading-relaxed text-xs text-[#475467]">
                      We provide extensive information about each (ESOs) and its programmes for informed decisions.
                    </p>
                  </div>
                </div>
                <NuxtLink to="/general/reports" class="w-9 h-9 mt-2 rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer bg-white transition-all group-hover:bg-[#FE7102] group-hover:border-[#FE7102]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FE7102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </NuxtLink>
              </div>
            </div>

            <div class="xl:w-1/3 lg:w-1/2 md:w-full p-3">
              <div class="p-6 bg-white rounded-[10px] shadow-sm border-b-2 border-[#3284C1] flex flex-col relative transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl group">
                <div class="flex items-start mb-4">
                  <div class="relative flex-shrink-0 mr-6">
                    <div class="absolute -top-2 -left-2 w-16 h-16 bg-blue-50 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-110"></div>
                    <div class="relative w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
                     <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3284C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
  <line x1="16" y1="2" x2="16" y2="6"></line>
  <line x1="8" y1="2" x2="8" y2="6"></line>
  <line x1="3" y1="10" x2="21" y2="10"></line>
</svg>
                    </div>
                  </div>
                  <div class="flex flex-col pt-1">
                    <h2 class="text-lg text-[#3284C1] mb-1">Upcoming Programmes</h2>
                    <p class="leading-relaxed text-xs text-[#475467]">
                      Use our advanced search feature to find upcoming entrepreneurship events and programmes.
                    </p>
                  </div>
                </div>
                <NuxtLink to="/general/events" class="w-9 h-9 mt-2 rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer bg-white transition-all group-hover:bg-[#3284C1] group-hover:border-[#3284C1]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3284C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>

    <section class="my-8">
      <div class="px-4 mx-auto space-y-4 relative  sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex justify-between items-center">
          <p class="text-primary text-xl font-medium">Top Trending Programmes </p>
          <NuxtLink to="/general/programmes" class="text-primary text-xl font-medium">See all</NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
          <div v-if="loading" class="flex  justify-center items-center col-span-full md:col-span-3 lg:col-span-4">
            <LayoutsLoader />
          </div>
          <LayoutsProgrammeCard v-else :program="item" v-for="(item, index) in programs?.results?.slice(0,4)" :key="index"  />
        </div>
      </div>
    </section>

    <section class="my-8">
      <div class="px-4 mx-auto space-y-4 relative sm:px-6 lg:px-8 max-w-7xl">
          

          <div class="flex justify-between items-center">
            <p class="text-primary text-xl font-medium">Upcoming Events</p>
            <NuxtLink to="/general/events" class="text-primary text-xl font-medium">See all</NuxtLink>
          </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">
          <div v-if="loading" class="flex  justify-center items-center col-span-full md:col-span-3 lg:col-span-4">
            <LayoutsLoader />
          </div>
          <LayoutsEventsCard v-else :event="item" v-for="(item, index) in events?.results" :key="index"  />
        </div>
      </div>
    </section>
    
    <section class="my-16">
      <div class="container mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-4 mb-8 text-center sm:text-left">
          <h2 class="text-3xl text-[#257F4A] ">
            Step-by-Step Guide: Organization Onboarding & Program Management
          </h2>
          <p class="text-base text-[#475467] max-w-3xl">
            A comprehensive walkthrough to help you seamlessly set up your organization profile and successfully launch your support programs on the platform.
          </p>
        </div>
        <div class="aspect-video w-full rounded-[25px] overflow-hidden shadow-xl bg-gray-100">
          <!-- https://youtu.be/eBVag_swk9Q -->
           <iframe 
              class="w-full h-full"
              src="https://www.youtube.com/embed/eBVag_swk9Q" 
              title="Organization Onboarding and Program Management Guide"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
        </div>
      </div>
    </section>

    <section class="my-8">
      <div class="container  mx-auto  relative max-w-7xl">
        <div class="bg-customGreen  rounded-[25px]  px-4  sm:px-6 lg:px-8 ">
          <div class="container pt-10 pb-10 mx-auto px-4">
            <!-- First Section: Heading -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <h3 class="text-3xl leading-snug my-3 text-[#fff]">
                Ready to level up your<br /> programmes 
              </h3>
               <p class="text-base text-[#fff]">
                    Support small business  with tailored < br>programme to increase productivity
                </p>
              </div>
              <!-- Second Section: Buttons -->
              <div class="lg:flex  lg:items-start lg:justify-start lg:space-x-5">
                <NuxtLink to="/auth/login">
                  <Button variant="variant" size="lg" class="bg-customLightGreen mb-2 text-[#fff] text-base font-normal">
                    Get Started Now
                  </Button>
                </NuxtLink>

                <NuxtLink to="/auth/register">
                  <Button class="border border-blue-50 " size="lg">
                    Learn More
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
         
        
        </div>
       
      </div>
      
    </section>

    <section class="my-8 ">
      <div class="container  mx-auto  relative max-w-7xl">
        <div class="flex justify-between items-center mb-4">
          <h6 class="text-3xl text-[#257F4A]">
            Featured Articles
          </h6>
          <NuxtLink to="/general/articles" class="text-primary text-xl font-medium">See all</NuxtLink>
        </div>
        <p class="text-base text-[#475467]">
          Our featured articles showcase the expertise and perspectives of our team, providing timely and informative content to help you stay ahead of the curve. Explore our curated collection of stories, analysis, and commentary to gain a deeper understanding of the topics that matter most.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div v-if="loading" class="flex  justify-center items-center col-span-full ">
            <LayoutsLoader />
          </div>
          <LayoutsArticleCard class="" :article="item" v-for="item, index in articles?.results?.slice(0,2)" :key="index" />
        </div>
      </div>
    </section>
    <section class="my-8 mt-16">
      <div class="container  mx-auto  relative max-w-7xl">
        <div class="space-y-4">
          <h6 class="text-xl lg:text-3xl text-center text-[#257F4A]">
           Funded by
          </h6>
        </div>

        <div class="flex flex-wrap items-center  gap-4 justify-center">
          <div class="w-2/12 ">
            <img src="~/assets/images/risa.png" alt="Sponsor 1" class="w-full" />
          </div>
          <div class="w-2/12">
            <img src="~/assets/images/ukaid.png" alt="Sponsor 1" />

          </div>
        </div>
      </div>
    </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
import { articlesDetails } from '~/lib/data';

const profileStore = useProfileStore()
const search = ref("")
const events = computed(() => {
  return profileStore.events
})
const programs = computed(() => {
  return profileStore.programs
})
const articles = computed(()=> {
  return profileStore.articles
})

const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getEvents()
  profileStore.getProgrammes()
  profileStore.getArticles()
})
</script>

<style lang="scss" scoped>

</style>