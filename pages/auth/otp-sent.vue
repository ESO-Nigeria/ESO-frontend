<template>
  <div>
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center mx-auto">
          <img class="w-auto " src="~/assets/images/Main-Logo.png" alt="logo">
        </div>
    </div>
    <form class="flex gap-4 flex-col mt-8">
      <div class="flex flex-col gap-2">
        <h6 class="text-secondary-header3 text-3xl font-bold">OTP Sent</h6>
        <p class="text-primary-success font-medium text-lg">Success!</p>
        <p class=" text-secondary-body-300 font-medium text-lg ">We have sent a reset Link  to your email address </p>
      </div>
   
         
        <NuxtLink to="/auth/login" class="mt-2 border py-3 px-5 rounded-md border-[#98A2B3] h-11 text-base  text-center font-medium text-secondary-body-regular-contrast"> <ArrowLeft class="inline-flex size-5"/> Back to Login </NuxtLink>

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