<template>
  <header class="py-4 md:py-6" x-data="{expanded: false}">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                    <img class="w-auto h-14" src="~/assets/images/icons/logo.svg" alt="logo" />
                </a>
            </div>

            <div class="flex lg:hidden">
                <button type="button" class="text-gray-900" @click="expanded = !expanded" :aria-expanded="expanded">
                    <span x-show="!expanded" aria-hidden="true">
                        <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>

                    <span x-show="expanded" aria-hidden="true">
                        <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>
            </div>

            <div class="hidden lg:flex lg:ml-14 lg:items-center lg:justify-center lg:space-x-6 ">
                <NuxtLink to="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> ESOs </NuxtLink>

                <NuxtLink to="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Programme </NuxtLink>

                <NuxtLink to="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Events </NuxtLink>

                <NuxtLink to="#" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </NuxtLink>

            </div>

            <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-5">
              <NuxtLink to="/auth/login">
                <Button variant="outline" size="lg" title="" class="text-base font-medium ">  
                 
               
                  Login 
                
                </Button>
              </NuxtLink>

              <NuxtLink to="/auth/register">
                <Button
                    class=""
                    size="lg"
                >
                
                
                  Create Account
               
                    
                </Button>
              </NuxtLink>
            </div>
        </div>

        <nav class="hidden" x-show="expanded" x-collapse>
            <div class="px-1 py-8">
                <div class="grid gap-y-7">
                    <a href="#" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                    <a href="#" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                    <a href="#" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Automation </a>

                    <a href="#" title="" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Customer Login </a>

                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
    </div>
</header>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>