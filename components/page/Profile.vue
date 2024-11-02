<template>
  <div class="mt-4 flex flex-col gap-6">
    <p class="text-base text-secondary-body-500">Enter details about your organization for verification.</p>
    <div>
      <div class="flex gap-14 items-start ">
        <div>
          <Avatar size="xl">
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback class="flex items-center justify-center flex-col">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_26405)">
                <path d="M56.888 7.10938H7.11024C6.16725 7.10938 5.26288 7.48398 4.59609 8.15077C3.92929 8.81757 3.55469 9.72194 3.55469 10.6649V53.3316C3.55469 54.2746 3.92929 55.179 4.59609 55.8458C5.26288 56.5126 6.16725 56.8872 7.11024 56.8872H56.888C57.831 56.8872 58.7354 56.5126 59.4022 55.8458C60.069 55.179 60.4436 54.2746 60.4436 53.3316V10.6649C60.4436 9.72194 60.069 8.81757 59.4022 8.15077C58.7354 7.48398 57.831 7.10938 56.888 7.10938ZM15.8569 14.2205C16.9117 14.2205 17.9429 14.5333 18.82 15.1193C19.697 15.7053 20.3806 16.5383 20.7843 17.5128C21.1879 18.4874 21.2936 19.5597 21.0878 20.5943C20.882 21.6289 20.374 22.5792 19.6281 23.3251C18.8823 24.0709 17.932 24.5789 16.8974 24.7847C15.8628 24.9905 14.7905 24.8848 13.8159 24.4812C12.8414 24.0775 12.0084 23.3939 11.4224 22.5169C10.8364 21.6398 10.5236 20.6087 10.5236 19.5538C10.5236 18.1393 11.0855 16.7828 12.0857 15.7826C13.0859 14.7824 14.4424 14.2205 15.8569 14.2205ZM10.6658 47.9983V40.7094L21.3325 29.9005C21.6656 29.5694 22.1161 29.3835 22.5858 29.3835C23.0555 29.3835 23.506 29.5694 23.8391 29.9005L28.4436 34.3983L14.7902 47.9983H10.6658ZM53.3325 47.9983H19.8214L30.8969 36.9227L40.4969 27.3227C40.83 26.9916 41.2806 26.8057 41.7502 26.8057C42.2199 26.8057 42.6705 26.9916 43.0036 27.3227L53.3325 37.6516V47.9983Z" fill="#98A2B3"/>
                </g>
                <defs>
                <clipPath id="clip0_17_26405">
                <rect width="64" height="64" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <span class="text-sm text-secondary-body-regular ">Upload Logo</span>
              </AvatarFallback>
          </Avatar>
        </div>
        <div class="flex-1">
          <form class="flex gap-4 flex-col ">
            
            <FormField v-slot="{ componentField }" name="organization_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">Organization Name</FormLabel>
                <FormControl>
                  <Input type="text"
                  disabled
                    class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Organization Name" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="organization_type">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">Organization Type</FormLabel>
                <FormControl class=" relative w-full  items-center">
                  <div class="relative w-full  items-center">
                    <Input type="text"
                    disabled
                      class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                      placeholder="Organization Type" v-bind="componentField" />
                  </div>
                  <p class="text-sm text-secondary-body-regular-contrast">Providing financial analysis, bookkeeping, budgeting, financial reporting, tax, accounting, and ensuring compliance with relevant accounting standards.</p>
                </FormControl>
              </FormItem>
            </FormField>
            <FormField
            v-slot="{ componentField }"
            name="description">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-sm font-medium"
                >Brief Description (not more than 300 words)</FormLabel
              >
              <FormControl>
                <Textarea
                placeholder="Enter brief description about your organization"
                class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                v-bind="componentField"
              />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField
          v-slot="{ componentField }"
          name="description">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-sm font-medium"
              >Services Offer</FormLabel
            >
            <FormControl>
              <Textarea
              placeholder="Enter Services"
              class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
              v-bind="componentField"
            />
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
                <Input type="email" disabled
                  class="pl-10 h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter email address" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <Mail class="size-5 text-muted-foreground" />
                </span>
              </div>

            </FormControl>
          </FormItem>
        </FormField>
        <div class="grid grid-cols-2 gap-4">
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
          <FormField v-slot="{ componentField }" name="phone_number">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Phone Number</FormLabel>
              <FormControl>
                <div class="relative w-full  items-center">
                  <Input type="tel"
                    class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter Whatsapp Number" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <PhoneCall class="size-5 text-muted-foreground" />
                  </span>
                </div>
  
              </FormControl>
            </FormItem>
          </FormField>
        </div>
        <FormField v-slot="{ componentField }" name="organization_address">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Organization Address</FormLabel>
            <FormControl class=" relative w-full  items-center">
              <div class="relative w-full  items-center">
                <Input type="text"
               
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Organization Address" v-bind="componentField" />
              </div>
            </FormControl>
            
          </FormItem>
        </FormField>
        <div class="grid grid-cols-3 gap-4">
          <FormField v-slot="{ componentField }" name="country">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Country</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary care">
                      Nigeria
                    </SelectItem>
                  
                    
                  </SelectContent>
                </Select>
  
              </FormControl>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="state">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">State</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary care">
                      Lagos
                    </SelectItem>
                  
                    
                  </SelectContent>
                </Select>
  
              </FormControl>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="city">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">City</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary care">
                      Lagos
                    </SelectItem>
                  
                    
                  </SelectContent>
                </Select>
  
              </FormControl>
            </FormItem>
          </FormField>
        </div>
          </form>
          <div class="mt-8 flex justify-end gap-6" >
            <Button size="lg" variant="outline" class="py-3 px-5 h-11 w-[145px]">Cancel</Button>
            <AlertDialog>
              <AlertDialogTrigger class="">
                <Button size="lg" class="py-3 px-5 h-11 w-[145px]">Save</Button>
              </AlertDialogTrigger>
              <AlertDialogContent class="max-w-[426px] pt-12">
                <AlertDialogHeader>
                  <AlertDialogTitle
                    class=" pt-4 pb-2 text-3xl text-center text-gray-950"
                    >Confirm Changes</AlertDialogTitle
                  >
                  <AlertDialogDescription
                    class="px-4 text-center font-normal text-base text-[#3F434A]">
                    Are you sure you want to submit?             </AlertDialogDescription>
                </AlertDialogHeader>
                <Alert class="mb-2 bg-[#EDF2F780] px-4 py-3 inline-flex">
                  <img
                    class="mr-2"
                    src="~/assets/images/icons/info.svg"
                    alt="" />
                  <AlertDescription class="text-sm text-[#5C6F7F]">
                    When you click “Yes, Submit”, a User will be added. Please review the information provided to ensure accuracy. Once confirmed, this information will be submitted for verification.
                  </AlertDescription>
                </Alert>
                <AlertDialogFooter class="flex gap-2.5">
                  <AlertDialogCancel type="button" class="w-full h-11 py-3 px-6">Edit Details</AlertDialogCancel>
                  <AlertDialogAction type="button"  class="w-full h-11 py-3 px-6 bg-primary-600">Yes, Submit</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
       
        
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneCall } from 'lucide-vue-next';
import Avatar from '../ui/avatar/Avatar.vue';
import AvatarFallback from '../ui/avatar/AvatarFallback.vue';
import AvatarImage from '../ui/avatar/AvatarImage.vue';


</script>

<style lang="scss" scoped>

</style>