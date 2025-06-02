<template>
  <div>
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center mx-auto">
          <NuxtLink to="/">
            <img class="w-auto " src="~/assets/images/Main-Logo.png" alt="logo">
          </NuxtLink>
        </div>
    </div>
    <form class="flex pr-4 pl-4 sm:pr-6 sm:pl-6 gap-4 flex-col mt-8">
      <div class="flex flex-col gap-2">
        <h6 class="text-secondary-header3 text-3xl font-bold">Account Created Successfully</h6>
        <p class="text-primary-success font-medium text-lg">Success!</p>
        <p class=" text-secondary-body-300 font-medium text-lg ">Please check your email for next steps.</p>
      </div>
   
         
        <NuxtLink to="/auth/login" class="mt-2 border py-3 px-5 bg-primary  rounded-md text-white h-11 text-base  text-center font-medium "> Continue to Login </NuxtLink>

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