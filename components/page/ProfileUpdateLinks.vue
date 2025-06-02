<template>
  <div class="mt-4 flex flex-col gap-6">
    
    <p class="text-base text-secondary-body-500">Provide your website and social media links to complete verification.</p>
    <div>
      <div class="flex-1 flex flex-col">
        <form class="flex gap-4 flex-col px-2 lg:px-0 w-full lg:w-2/6 ">
          
          <FormField :modelValue="links?.results?.find(type => type.platform == 'WEBSITE')?.url" v-slot="{ componentField }" name="website_url">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Website Url</FormLabel>
              <FormControl>
                <Input type="url"
                  disabled
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="www.example.com" v-bind="componentField" />
              </FormControl>
            </FormItem>
          </FormField>
        
          <FormField :modelValue="links?.results?.find(type => type.platform == 'LINKEDIN')?.url" v-slot="{ componentField }" name="linkedIn">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">LinkedIn</FormLabel>
              
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                Linkedin
              </span>
              <Input type="url"
                  disabled
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <svg class="size-5 text-muted-foreground"  width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.78353 4.66652C5.78331 5.10855 5.6075 5.53239 5.29478 5.84479C4.98207 6.1572 4.55806 6.33258 4.11603 6.33236C3.674 6.33214 3.25017 6.15633 2.93776 5.84361C2.62536 5.5309 2.44997 5.10688 2.4502 4.66486C2.45042 4.22283 2.62622 3.79899 2.93894 3.48659C3.25166 3.17419 3.67567 2.9988 4.1177 2.99902C4.55972 2.99924 4.98356 3.17505 5.29596 3.48777C5.60837 3.80049 5.78375 4.2245 5.78353 4.66652ZM5.83353 7.56652H2.5002V17.9999H5.83353V7.56652ZM11.1002 7.56652H7.78353V17.9999H11.0669V12.5249C11.0669 9.47486 15.0419 9.19152 15.0419 12.5249V17.9999H18.3335V11.3915C18.3335 6.24986 12.4502 6.44152 11.0669 8.96652L11.1002 7.56652Z" fill="black"/>
</svg>

                    
                  </span>
            </div>
            </FormItem>
            
          </FormField>
      
          <FormField :modelValue="links?.results?.find(type => type.platform == 'INSTAGRAM')?.url" v-slot="{ componentField }" name="instagram">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">Instagram</FormLabel>
              
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                instagram
              </span>
              <Input type="url"
                  disabled
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <svg class="size-5 text-muted-foreground" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.49984 2.1665H13.4998C16.1665 2.1665 18.3332 4.33317 18.3332 6.99984V13.9998C18.3332 15.2817 17.8239 16.5111 16.9175 17.4175C16.0111 18.3239 14.7817 18.8332 13.4998 18.8332H6.49984C3.83317 18.8332 1.6665 16.6665 1.6665 13.9998V6.99984C1.6665 5.71796 2.17573 4.48858 3.08215 3.58215C3.98858 2.67573 5.21796 2.1665 6.49984 2.1665ZM6.33317 3.83317C5.53752 3.83317 4.77446 4.14924 4.21185 4.71185C3.64924 5.27446 3.33317 6.03752 3.33317 6.83317V14.1665C3.33317 15.8248 4.67484 17.1665 6.33317 17.1665H13.6665C14.4622 17.1665 15.2252 16.8504 15.7878 16.2878C16.3504 15.7252 16.6665 14.9622 16.6665 14.1665V6.83317C16.6665 5.17484 15.3248 3.83317 13.6665 3.83317H6.33317ZM14.3748 5.08317C14.6511 5.08317 14.9161 5.19292 15.1114 5.38827C15.3068 5.58362 15.4165 5.84857 15.4165 6.12484C15.4165 6.4011 15.3068 6.66606 15.1114 6.86141C14.9161 7.05676 14.6511 7.1665 14.3748 7.1665C14.0986 7.1665 13.8336 7.05676 13.6383 6.86141C13.4429 6.66606 13.3332 6.4011 13.3332 6.12484C13.3332 5.84857 13.4429 5.58362 13.6383 5.38827C13.8336 5.19292 14.0986 5.08317 14.3748 5.08317ZM9.99984 6.33317C11.1049 6.33317 12.1647 6.77216 12.9461 7.55356C13.7275 8.33496 14.1665 9.39477 14.1665 10.4998C14.1665 11.6049 13.7275 12.6647 12.9461 13.4461C12.1647 14.2275 11.1049 14.6665 9.99984 14.6665C8.89477 14.6665 7.83496 14.2275 7.05356 13.4461C6.27216 12.6647 5.83317 11.6049 5.83317 10.4998C5.83317 9.39477 6.27216 8.33496 7.05356 7.55356C7.83496 6.77216 8.89477 6.33317 9.99984 6.33317ZM9.99984 7.99984C9.3368 7.99984 8.70091 8.26323 8.23207 8.73207C7.76323 9.20091 7.49984 9.8368 7.49984 10.4998C7.49984 11.1629 7.76323 11.7988 8.23207 12.2676C8.70091 12.7364 9.3368 12.9998 9.99984 12.9998C10.6629 12.9998 11.2988 12.7364 11.7676 12.2676C12.2364 11.7988 12.4998 11.1629 12.4998 10.4998C12.4998 9.8368 12.2364 9.20091 11.7676 8.73207C11.2988 8.26323 10.6629 7.99984 9.99984 7.99984Z" fill="black"/>
</svg>
                  </span>
            </div>
            </FormItem>
            
          </FormField>
          <FormField :modelValue="links?.results?.find(type => type.platform == 'FACEBOOK')?.url" v-slot="{ componentField }" name="facebook">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">Facebook</FormLabel>
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                facebook.com
              </span>
              <Input type="url"
                  disabled
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <svg class="size-5 text-muted-foreground" width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.83317 0.895996C5.81098 0.895996 4.83066 1.30206 4.10786 2.02486C3.38507 2.74765 2.979 3.72797 2.979 4.75016V6.896H0.916504C0.813171 6.896 0.729004 6.97933 0.729004 7.0835V9.91683C0.729004 10.0202 0.812337 10.1043 0.916504 10.1043H2.979V15.9168C2.979 16.0202 3.06234 16.1043 3.1665 16.1043H5.99984C6.10317 16.1043 6.18734 16.021 6.18734 15.9168V10.1043H8.26817C8.354 10.1043 8.429 10.046 8.44984 9.96266L9.15817 7.12933C9.16514 7.10168 9.16571 7.07281 9.15985 7.04491C9.15398 7.017 9.14182 6.99081 9.12431 6.96831C9.10679 6.94581 9.08437 6.9276 9.05876 6.91507C9.03315 6.90254 9.00502 6.89602 8.9765 6.896H6.18734V4.75016C6.18734 4.66535 6.20404 4.58137 6.2365 4.50301C6.26896 4.42466 6.31653 4.35346 6.3765 4.29349C6.43647 4.23352 6.50767 4.18595 6.58602 4.15349C6.66438 4.12103 6.74836 4.10433 6.83317 4.10433H8.99984C9.10317 4.10433 9.18734 4.021 9.18734 3.91683V1.0835C9.18734 0.980163 9.104 0.895996 8.99984 0.895996H6.83317Z" fill="black"/>
</svg>

                  
                  </span>
            </div>
            </FormItem>
            
          </FormField>
          <FormField :modelValue="links?.results?.find(type => type.platform == 'TWITTER')?.url" v-slot="{ componentField }" name="twitter">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">Twitter</FormLabel>
              
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                twitter.com
              </span>
              <Input type="url"
                  disabled
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <svg class="size-5 text-muted-foreground" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.833496 0.166504H2.91683L15.4168 16.8332H13.3335L0.833496 0.166504ZM4.5835 0.166504H6.66683L19.1668 16.8332H17.0835L4.5835 0.166504Z" fill="black"/>
                          <path d="M2.5 0.166504H6.66667V1.83317H2.5V0.166504ZM13.3333 16.8332H17.5V15.1665H13.3333V16.8332Z" fill="black"/>
                          <path d="M15.4167 0.166504H18.3333L4.16667 16.8332H1.25L15.4167 0.166504Z" fill="black"/>
                          </svg>

                    
                  </span>
            </div>
            </FormItem>
            
          </FormField>
        </form>
        <div class="mt-8 flex justify-end gap-6" >
          <Button size="lg" variant="outline" class="py-3 px-5 h-11 w-[145px]">Cancel</Button>
          <AlertDialog>
            <AlertDialogTrigger :disabled="loading || links?.results?.length > 0" class="">
              <Button type="button" :disabled="loading || links?.results?.length > 0" size="lg" class="py-3 px-5 h-11 w-[145px]">
                Save
                <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent class="w-10/12 lg:max-w-[426px] pt-12">
              <AlertDialogHeader>
                <AlertDialogTitle
                  class=" pt-4 pb-2 text-3xl text-center text-gray-950"
                  >Confirm Your Links</AlertDialogTitle
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
                  Please review the website and social media links you’ve added. Once confirmed, these links will be submitted for verification.
                                </AlertDescription>
              </Alert>
              <AlertDialogFooter class="flex gap-2.5">
                <AlertDialogCancel type="button" class="w-full h-11 py-3 px-6">Edit Details</AlertDialogCancel>
                <AlertDialogAction type="button" @click="onSubmit"  class="w-full h-11 py-3 px-6 bg-primary-600">Yes, Submit</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon, LoaderCircle, Mail } from 'lucide-vue-next';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useAuthStore } from '~/store/auth';
import { useProfileStore } from '~/store/profile';
const authStore = useAuthStore()
const profileStore = useProfileStore()
const router = useRouter()
const success = ref(false)
const loading  = ref(false);

const form = useForm({});

const links = computed(() => {
  return profileStore.links
})


const props = defineProps({
  user: {
    type: Object
  }
})

function convertToSocialLinks(obj) {
  return Object.entries(obj).map(([platform, url]) => ({
    platform,
    url,
  }));
}

const onSubmit = form.handleSubmit(async(values) => {
  const socialLinksArray = convertToSocialLinks(values);
  const body = [  {
        "platform": "WEBSITE",
        "url": values.website_url
    },
    {
        "platform": "LINKEDIN",
        "url": values.linkedIn
    },
    {
        "platform": "INSTAGRAM",
        "url": values?.instagram
    },
    {
        "platform": "FACEBOOK",
        "url": values?.facebook
    },
    {
        "platform": "TWITTER",
        "url": values?.twitter
    }
]

try {
    loading.value = true;
  const response =  await profileStore.socialLinks(body);
  if (response.data && response?.data?.data) {
    loading.value = false;
    success.value = true;
    profileStore.getLinks()
   
    } else {
      loading.value = false;
      // alert(response.data.message);
      }
    loading.value = false
  }catch(error) {
    loading.value = false
    console.log('error', error)
  }
})

onMounted(() => {
  profileStore.getLinks()
})
</script>

<style lang="scss" scoped>

</style>