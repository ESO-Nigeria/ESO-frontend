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
          <h6 class="text-secondary-header3 text-3xl font-bold">Join the Community</h6>
          <p class=" text-secondary-body-300 font-medium text-lg ">Join to discover and apply for impactful programs
            designed to support your business growth.</p>
        </div>

        <FormField v-slot="{ componentField }" name="organization_name">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Organization Name</FormLabel>
            <FormControl>
              <Input type="text"
                class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                placeholder="Enter Organization Name" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="organization_type">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-sm font-medium">Organization Type</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                  <SelectValue placeholder="Select an organization type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary care">
                    Financial Management Service
                  </SelectItem>
                  <SelectItem value="legal_services">
                    Legal Services
                  </SelectItem>
                  <SelectItem value="market_development">
                    Market Development
                  </SelectItem>
                  <SelectItem value="management_consulting">
                    Management Consulting
                  </SelectItem>
                  <SelectItem value="others">
                    Other Relevant Services
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        </FormField>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="first_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">First Name</FormLabel>
                <FormControl>
                  <Input type="text"
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter First Name" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="last_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">Last Name</FormLabel>
                <FormControl>
                  <Input type="text"
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter Last Name" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
          </div>
          <p class="text-sm text-secondary-body-regular-contrast">(First Name & Last Name of Most senior executive
            member)</p>
        </div>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Email Address (Work Email Address)</FormLabel>
            <FormControl>
              <div class="relative w-full  items-center">
                <Input type="email"
                  class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter email address" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <Mail class="size-5 text-muted-foreground" />
                </span>
              </div>

            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="whatsapp_number">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Whatsapp Number</FormLabel>
            <FormControl>
              <div class="relative w-full  items-center">
                <Input type="tel"
                  class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Whatsapp Number" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <img src="~/assets/images/icons/chat.svg" class="size-5 text-muted-foreground" />
                </span>
              </div>

            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input type="password"
                  class="h-11 pl-10 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye class="size-5 text-muted-foreground" />
                </span>
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <img src="~/assets/images/icons/lock.svg" class="size-5 text-muted-foreground" />
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
                  class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <img src="~/assets/images/icons/lock.svg" class="size-5 text-muted-foreground" />
                </span>
                <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye class="size-5 text-muted-foreground" />
                </span>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
        <!-- </div> -->

        <Button class="text-base py-3 h-11 mt-2">Create Account</Button>
        <p class="mt-2 text-base font-medium text-secondary-body-600">Already have an account?  <NuxtLink
            to="/auth/login" class="inline-flex items-center gap-2 "><span class="underline ">Login to continue</span>
            <img src="~/assets/images/icons/arrow.svg" /> </NuxtLink>.</p>
      </form>

    </NuxtLayout>
  </div>
</template>

<script setup>
import { Eye } from 'lucide-vue-next'
import { Mail } from 'lucide-vue-next';

</script>

<style lang="scss" scoped></style>