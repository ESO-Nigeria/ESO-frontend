<template>
  <div>
    <NuxtLayout name="general">
      <section class="relative py-12 overflow-hidden  sm:pb-16 lg:pb-20 xl:pb-24">
        <div class="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                <div>
                    <h1 class="text-4xl font-bold  sm:text-5xl ">Enterprise Support Organisations (ESO) Collaborative</h1>
                    <p class="mt-4 text-xl font-normal text-[#475467]  sm:mt-8">We are a collaborative that bring values to your company with global scales experiences.</p>
                    <form action="#" method="POST" class="relative mt-8 rounded-md">
                        <div class="relative">
                            <div class="relative border flex rounded-md">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-6">
                                    <svg class="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input type="email" name="" id="" placeholder="Looking for a programme?" class="rounded-r-none block w-full py-4 pr-6  placeholder-gray-500 border border-transparent  rounded-md pl-14 focus:border-transparent focus:ring-0" />
                                <div class="inline-flex">
                                  <button type="submit" class="border rounded-r-md border-r inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest uppercase transition-all duration-200 bg-primary text-white  sm:w-auto sm:py-3 hover:opacity-90">Search</button>
                              </div>
                              </div>
                        </div>
                       
                    </form>
                    <div class="mt-4 ">
                        <NuxtLink to="/auth/register" class="text-base text-primary font-normal ">Create account to add programme</NuxtLink>
                    </div>
                </div>
                <div class="relative">
                  <!-- <img class=" w-full  rounded-tl-[142px] " src="~/assets/images/home_banner.png" alt="" /> -->
              </div>
              
            </div>
        </div>
    </section>
    </NuxtLayout>
    
    
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>