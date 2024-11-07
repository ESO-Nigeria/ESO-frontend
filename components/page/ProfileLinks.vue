<template>
  <div class="mt-4 flex flex-col gap-6">
    <Alert v-show="success" class="bg-[#E2FEF0] border-0 flex items-center">
      <CheckIcon class="text-[#05944F] size-5" />
      <div class="">
        <AlertTitle class="text-[#232E3F]">Details Submitted Successfully!</AlertTitle>
        <AlertDescription class="text-[#5C6F7F]">
          Your organization details have been submitted for verification. Please continue to complete the remaining sections to finalize your application.
        </AlertDescription>
      </div>
     
    </Alert>
    {{links}}
    <p class="text-base text-secondary-body-500">Provide your website and social media links to complete verification.</p>
    <div>
      <div class="flex-1 flex flex-col">
        <form class="flex gap-4 flex-col w-2/6 ">
          
          <FormField v-slot="{ componentField }" name="website_url">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-base font-medium">Website Url</FormLabel>
              <FormControl>
                <Input type="url"
                
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="www.example.com" v-bind="componentField" />
              </FormControl>
            </FormItem>
          </FormField>
         

          <FormField v-slot="{ componentField }" name="linkedIn">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">LinkedIn</FormLabel>
              
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                linkedin.com
              </span>
              <Input type="url"
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                    <Mail class="size-5 text-muted-foreground" />
                  </span>
            </div>
            </FormItem>
            
          </FormField>
      
          <FormField v-slot="{ componentField }" name="instagram">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">Instagram</FormLabel>
              
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                instagram.com
              </span>
              <Input type="url"
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                    <Mail class="size-5 text-muted-foreground" />
                  </span>
            </div>
            </FormItem>
            
          </FormField>
          <FormField v-slot="{ componentField }" name="facebook">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">Facebook</FormLabel>
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                facebook.com
              </span>
              <Input type="url"
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                    <Mail class="size-5 text-muted-foreground" />
                  </span>
            </div>
            </FormItem>
            
          </FormField>
          <FormField v-slot="{ componentField }" name="twitter">
            <FormItem class="space-y-1">
              <FormLabel for="vanity-url" class="text-[#3F434A] text-base font-medium">Twitter</FormLabel>
              
            <div class="flex items-center border border-secondary-body-500 rounded-md relative">
              <span class="bg-[#F2F4F7] pl-8 text-[#98A2B3] rounded-l-md px-3 h-11 py-2 text-sm border border-gray-300 border-r-0 flex items-center">
                twitter.com
              </span>
              <Input type="url"
                  class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0]  ring-0  rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="" v-bind="componentField" />
                  <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                    <Mail class="size-5 text-muted-foreground" />
                  </span>
            </div>
            </FormItem>
            
          </FormField>
        </form>
        <div class="mt-8 flex justify-end gap-6" >
          <Button size="lg" variant="outline" class="py-3 px-5 h-11 w-[145px]">Cancel</Button>
          <AlertDialog>
            <AlertDialogTrigger :disabled="loading " class="">
              <Button type="button" :disabled="loading " size="lg" class="py-3 px-5 h-11 w-[145px]">
                Save
                <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent class="max-w-[426px] pt-12">
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
import { LoaderCircle, Mail } from 'lucide-vue-next';
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

const form = useForm({
  // validationSchema: formSchema,
});

const links = computed(() => {
  return  profileStore.links
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
  console.log('values', values)
  const socialLinksArray = convertToSocialLinks(values);
console.log(socialLinksArray);
 const body = [{
  
 }]
try {
    loading.value = true;
  const response =  await profileStore.socialLinks(socialLinksArray);
  console.log('response', response?.data?.data)
  if (response.data && response?.data?.data) {
    loading.value = false;
    // redirect to dashboard
    // console.log('here', response?.data?.data?.auth_token)
    // router.push('/auth/otp-sent');

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