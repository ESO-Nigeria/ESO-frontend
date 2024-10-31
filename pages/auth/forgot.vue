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
        <h6 class="text-secondary-header3 text-3xl font-bold">Forgot your password</h6>
        <p class=" text-secondary-body-300 font-medium text-lg ">Enter your registered email address to receive reset password link</p>
      </div>
   
          <FormField v-slot="{ componentField }" name="email">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Email Address</FormLabel>
              <FormControl>
                <Input type="email" class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm" 
                placeholder="Enter email address" v-bind="componentField" />
              </FormControl>
            </FormItem>
          </FormField>
         
        <!-- </div> -->

      <Button class="text-base py-3 h-11 mt-2">Send Password Reset Link</Button>
        <NuxtLink to="/auth/login" class="mt-2 text-base text-center font-medium text-secondary-body-regular-contrast"> <ArrowLeft class="inline-flex size-5"/> Back to Login </NuxtLink>

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