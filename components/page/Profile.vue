<template>
  <div class="mt-4 flex flex-col gap-6">

    <!-- <Alert v-show="success" class="bg-[#E2FEF0] border-0 flex items-center">
      <CheckIcon class="text-[#05944F] size-5" />
      <div class="">
        <AlertTitle class="text-[#232E3F]">Details Submitted Successfully!</AlertTitle>
        <AlertDescription class="text-[#5C6F7F]">
          Your organization details have been submitted for verification. Please continue to complete the remaining sections to finalize your application.
        </AlertDescription>
      </div>
     
    </Alert> -->

    <Alert v-show="profile && profile.approval_status != 'APPROVED'" class="bg-blue-100 border-0 flex items-center">
      <CheckIcon class="text-[#05944F] size-5" />
      <div class="">
        <AlertTitle class="text-[#232E3F]">Details Awaiting Verification!</AlertTitle>
        <AlertDescription class="text-[#5C6F7F]">
          Your organization details have been submitted for verification.
        </AlertDescription>
      </div>
     
    </Alert>

    <p class="text-base text-secondary-body-500">Enter details about your organization for verification.</p>
    <div>
      <div class="flex flex-col lg:flex-row gap-5 lg:gap-14 items-start ">
        <div v-bind="getRootProps1()" class="cursor-pointer">
          <Avatar size="xl">
            <AvatarImage :src="image_preview_link || profile?.logo_url" alt="@radix-vue" />
            <input v-bind="getInputProps1()" :disabled="profile?.logo_url" />
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
                <span class="text-sm text-secondary-body-regular ">Click to Upload Logo</span>
              </AvatarFallback>
          </Avatar>
        </div>
        <div class="lg:flex-1">
          <form  class="flex gap-4 flex-col px-2 lg:px-0">
            <FormField :modelValue="user?.organization_name" v-slot="{ componentField }" name="organization_name">
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
            <FormField :modelValue="user?.organization_type" v-slot="{ componentField }" name="organization_type">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">Organization Type</FormLabel>
                <FormControl>
                  <Select disabled v-bind="componentField">
                    <SelectTrigger
                      class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                      <SelectValue placeholder="Select an organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FMS">
                        Financial Management Service
                      </SelectItem>
                      <SelectItem value="LS">
                        Legal Services
                      </SelectItem>
                      <!-- IRS: Investment-Readiness Services -->
    
                      <SelectItem value="IRS">
                        Investment-Readiness Services
                      </SelectItem>
                      <SelectItem value="MC">
                        Management Consulting
                      </SelectItem>
                      <SelectItem value="ORS">
                        Other Relevant Services
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            </FormField>
            <MultiSelect
                      v-model="formSectors"
                      :options="sectors"
                      title="Sector"
                      placeholder="Select sectors..."
                    />
            <FormField
            :modelValue="profile?.description"
            v-slot="{ componentField }"
            name="description">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-sm font-medium"
                >Brief Description (not more than 300 words)</FormLabel
              >
              <FormControl>
                <Textarea
                :disabled="profile && profile?.description"
                placeholder="Enter brief description about your organization"
                class="border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                v-bind="componentField"
              />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField
           :modelValue="profile?.services"
          v-slot="{ componentField }"
          name="services">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-sm font-medium"
              >Services Offer</FormLabel
            >
            <FormControl>
              <Textarea
              :disabled="profile && profile?.services"
              placeholder="Enter Services"
              class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5]  disabled:bg-[#EAECF0] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
              v-bind="componentField"
            />
            </FormControl>
          </FormItem>
        </FormField>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <FormField :modelValue="user?.first_name" v-slot="{ componentField }" name="first_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">First Name</FormLabel>
                <FormControl>
                  <Input disabled type="text"
                    class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter First Name" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField :modelValue="user?.last_name" v-slot="{ componentField }" name="last_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">Last Name</FormLabel>
                <FormControl>
                  <Input disabled type="text"
                    class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter Last Name" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
          </div>
          <p class="text-sm text-secondary-body-regular-contrast">(First Name & Last Name of Most senior executive
            member)</p>
        </div>
        <FormField :modelValue="user?.email" v-slot="{ componentField }" name="email">
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
          <FormField :modelValue="user?.whatsapp_number" v-slot="{ componentField }" name="whatsapp_number">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">WhatsApp Number</FormLabel>
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
          <FormField  :modelValue="profile?.company_phone" v-slot="{ componentField }" name="phone_number">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Phone Number</FormLabel>
              <FormControl>
                <div class="relative w-full  items-center">
                  <Input type="tel"
                  :disabled="profile && profile?.company_phone"
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
        <FormField :modelValue="profile?.address" v-slot="{ componentField }" name="organization_address">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Organization Address</FormLabel>
            <FormControl class=" relative w-full  items-center">
              <div class="relative w-full  items-center">
                <Input type="text"
                  :disabled="profile && profile?.address"
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Organization Address" v-bind="componentField" />
              </div>
            </FormControl>
            
          </FormItem>
        </FormField>
      
        <!-- <div class="grid grid-cols-3 gap-4">
          <FormField  v-slot="{ componentField }" name="country">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Country</FormLabel>
              <FormControl>
                <Select :disabled="profile?.country" v-model="selectedCountry"  @update:modelValue="onCountryChange" v-bind="componentField">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="country in all_countries" :key="country.id" :value="country.name">
                      {{ country.name }}
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
                <Select  v-bind="componentField" :disabled="!selectedCountry || profile?.state" @update:modelValue="onStateChange" v-model="selectedState" >
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="state in states" :key="state.id" :value="state.name">
                      {{state?.name}}
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
                <Select v-bind="componentField" :disabled="!selectedState || profile?.city" v-model="selectedCity">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="city in cities" :key="city.id" :value="city.name">
                      {{city?.name}}
                    </SelectItem>
                  </SelectContent>
                </Select>
  
              </FormControl>
            </FormItem>
          </FormField>
        </div>    -->
        <div class="grid grid-cols-3 gap-4">
          <FormField :modelValue="profile?.country"  v-slot="{ componentField }" name="country">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Country</FormLabel>
              <FormControl>
               
                <Input 
                    v-if="profile?.country"
                    type="text"
                    :disabled="profile?.country"
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Country" v-bind="componentField" />

                <Select v-else :disabled="profile?.country" v-model="selectedCountry"  @update:modelValue="onCountryChange" v-bind="componentField">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="country in all_countries" :key="country.id" :value="country.name">
                      {{ country.name }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          </FormField>
          <FormField :modelValue="profile?.state" v-slot="{ componentField }" name="state">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">State</FormLabel>
              <FormControl>
                <Input 
                v-if="profile?.state"
                type="text"
                :disabled="profile?.state"
                class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                placeholder="State" v-bind="componentField" />

                <Select v-else  v-bind="componentField" :disabled="!selectedCountry || profile?.state" @update:modelValue="onStateChange" v-model="selectedState" >
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="state in states" :key="state.id" :value="state.name">
                      {{state?.name}}
                    </SelectItem>
                  </SelectContent>
                </Select>
  
              </FormControl>
            </FormItem>
          </FormField>

          <FormField :modelValue="profile?.city" v-slot="{ componentField }" name="city">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">City</FormLabel>
              <FormControl>
                <Input 
                v-if="profile?.city"
                type="text"
                :disabled="profile?.city"
                class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                placeholder="Country" v-bind="componentField" />

                <Select v-else v-bind="componentField" :disabled="!selectedState || profile?.city" v-model="selectedCity">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="city in cities" :key="city.id" :value="city.name">
                      {{city?.name}}
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
              <AlertDialogTrigger :disabled="loading || profile" class="">
                <Button :disabled="loading || profile" size="lg" class="py-3 px-5 h-11 w-[145px]">
                  Save
                  <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent class=" w-10/12 lg:max-w-[426px] pt-12">
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
                  <AlertDialogAction @click="onSubmit" type="button"  class="w-full h-11 py-3 px-6 bg-primary-600">Yes, Submit</AlertDialogAction>
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
import { CheckIcon, LoaderCircle, Mail, PhoneCall } from 'lucide-vue-next';
import Avatar from '../ui/avatar/Avatar.vue';
import AvatarFallback from '../ui/avatar/AvatarFallback.vue';
import AvatarImage from '../ui/avatar/AvatarImage.vue';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useAuthStore } from '~/store/auth';
import { useProfileStore } from '~/store/profile';
import nigeria from '~/composables/nigeria.json';
import { isProxy, toRaw } from 'vue';
import { useDropzone } from "vue3-dropzone"; // Ensure to use the dropzone library compatible with Vue
import { sectors, targetAudience, nonFinancialSupport, financialSupport, programMode, countries, locations } from '~/lib/data';

const all_countries = computed(()=>{
  return nigeria
});
const loading  = ref(false);
const formSectors = ref([])
const selectedCountry = ref(null);
const selectedState = ref(null);
const selectedCity = ref(null);
const profileStore = useProfileStore()
const success = ref(false)
const logo = ref()
const logo_errors = ref({})
const image_preview_link = ref()

const { isFieldDirty, handleSubmit, values } = useForm({
});
const states = ref([])
const cities = ref([])

const profile = computed(() => {
  return profileStore.profile
})
// Dropzone 1
function onDrop1(acceptedFiles, rejectReasons) {
  logo.value = acceptedFiles[0]
  if (rejectReasons[0]) {
    logo_errors.value = rejectReasons[0].errors[0];
  } else {
    // Create a FileReader to read the image file
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      image_preview_link.value = event.target.result; // Save the data URL to the ref
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
}
const deleteLogo = () => {
  logo.value = {}
  logo_errors.value = {}
}

const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({ onDrop: onDrop1, maxSize: 560000, accept: ".pdf, .jpeg, .png", maxFiles: 1});

// Methods to handle changes
const onCountryChange = (newValue) => {
  states.value = all_countries?.value?.find((c) => c.name == newValue)?.states;
  selectedState.value = null; // Reset state selection
  selectedCity.value = null; // Reset city selection
};

const onStateChange = (newValue) => {
  cities.value = states.value.find((s) => s.name == newValue)?.cities;
  selectedCity.value = null; // Reset city selection
};

const props = defineProps({
  user: {
    type: Object
  }
})

const fetchProfile  = async (id) => {
  await  profileStore.getProfile()
}

watch(
  () => profileStore.profile,
  (newPatient) => {
    profile.value = newPatient;
  }
);

const onSubmit = handleSubmit(async(values) => {
//       const body =    {
//     "country": values.country,
//     "state": values.state,
//     "city": values.city,
//     "address": values?.organization_address,
//     "company_email": values?.email,
//     "company_phone": values?.phone_number,
//     "company_website": "",
//     "description": values?.description,
//     "services": values?.services,
//     "logo": logo.value
// }
const formData = new FormData();

// Append each key-value pair to FormData
formData.append("country", values.country);
formData.append("state", values.state);
formData.append("city", values.city);
formData.append("address", values?.organization_address);
formData.append("company_email", values?.email);
formData.append("company_phone", values?.phone_number);
formData.append("company_website", ""); // Empty string as specified
formData.append("description", values?.description);
formData.append("logo", logo.value);
formData.append("services", values.services);
for(let sector of formSectors.value){
    formData.append('sectors', sector)
  }
  // formSectors.value
// formData.append("sectors", )
      try {
        loading.value = true;
      const response =  await profileStore.createProfile(formData);
      if (response.data && response?.data?.data) {
        loading.value = false;
        success.value = true;
        fetchProfile()
       
        } else {
          loading.value = false;
          // alert(response.data.message);
          }
        loading.value = false
      }catch(error) {
        loading.value = false
        console.log('error', error)
      }
});

onMounted(() => {
      fetchProfile()
})
</script>

<style lang="scss" scoped>

</style>