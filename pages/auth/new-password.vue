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
          <h6 class="text-secondary-header3 text-3xl font-bold">Set a new password</h6>
          <p class=" text-secondary-body-300 font-medium text-lg ">Enter your registered email address to get a link to
            reset your password</p>
        </div>


        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input type="password"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye class="size-5 text-muted-foreground" />
                </span>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirm_password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Confirm Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input type="password"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye class="size-5 text-muted-foreground" />
                </span>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
        <!-- </div> -->

        <Button class="text-base py-3 h-11 mt-2">Reset Password</Button>

      </form>

    </NuxtLayout>
  </div>
</template>

<script setup>
import { Eye } from 'lucide-vue-next'
</script>

<style lang="scss" scoped></style>