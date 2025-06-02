<template>
  <div class="">
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center ">
          <NuxtLink to="/">
            <img class="w-auto " src="~/assets/images/Main-Logo.png" alt="logo">
          </NuxtLink>
        </div>
    </div>
    <form class="flex gap-4 pr-4 pl-4 sm:pr-6 sm:pl-6  flex-col mt-8">
      <div class="flex flex-col gap-2">
        <h6 class="text-secondary-header3 text-3xl font-bold leading-[48px]">Multiple Login Attempts Detected</h6>
        <p class="text-secondary-body-300 font-medium text-lg">Hi,</p>
        <p class=" text-secondary-body-300 font-medium text-lg ">
          Unfortunately, you have been unsuccessful in your login attempts. Click the button below to reset your password.
          </p>
      </div>
   
         
        <NuxtLink to="/auth/forgot" class="mt-2 border py-3 px-5 bg-primary  rounded-md text-white h-11 text-base  text-center font-medium "> Reset Password </NuxtLink>

    </form>
     
    </NuxtLayout>
  </div>
</template>

<script setup>
import {Eye} from 'lucide-vue-next'
import { ArrowLeft } from 'lucide-vue-next';

</script>

<style lang="scss" scoped>

</style>