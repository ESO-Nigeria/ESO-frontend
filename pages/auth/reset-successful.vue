<template>
  <div>
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center mx-auto">
            <img class="w-auto " src="~/assets/images/icons/logo.svg" alt="logo">
        </div>
    </div>
    <form class="flex gap-4 flex-col mt-8">
      <div class="flex flex-col gap-2">
        <h6 class="text-secondary-header3 text-3xl font-bold">Password Reset Successful</h6>
        <p class="text-primary-success font-medium text-lg">Success!</p>
        <p class=" text-secondary-body-300 font-medium text-lg ">Your password has been successfully changed.</p>
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