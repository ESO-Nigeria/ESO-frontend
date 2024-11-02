<template>
  <div>
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center ">
        <div class="flex items-center w-full h-full max-w-md  m-auto  py-14">
          <div class="flex-1">
            <slot />
          </div>
      </div>
          <div class="hidden lg:block lg:w-[35%] bg-primary" >
              <div class=" py-24 h-full bg-gray-900 bg-opacity-40">
                  <div >
                      <h2 class="pl-20 text-2xl font-normal !leading-[48px] text-white sm:text-3xl">Explore and access support <br /> programs effortlessly, anytime,  anywhere.</h2>
                        <div class="relative py-3 mt-16 pl-20">
                          <img src="~/assets/images/b_banner.png" alt="" class="relative h-[500px] w-full"/>
                          <img src="~/assets/images/t_banner.png" alt="" class="h-[500px] absolute -top-10 right-0"/>
                        </div>
                  </div>
              </div>
          </div>
  
          
      </div>
  </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>