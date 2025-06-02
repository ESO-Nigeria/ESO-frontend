<template>
    <div>
  
      <NuxtLayout name="dashboard">
        <div v-if="loading" class="flex h-screen justify-center items-center">
          <LayoutsLoader />
        </div>
        <div v-else class="flex flex-col w-full gap-3">
          <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Settings' }]"></LayoutsBreadcrumb>
          <div class="mt-3">
            <LayoutsTitleHeader
             :title="`${user?.organization_name ? user?.organization_name : ''}`"
               />
          </div>
          <div class="bg-white px-3 py-4 lg:p-8 rounded-md flex flex-col gap-4 ">
              <div class="grid lg:grid-cols-2 items-center">
                <LayoutsSubTitleHeader
                 :title="`Settings`"
                 />
                 <!-- <Progress :model-value="15 " class="bg-[#B1EDCA]" :indicator_class="'bg-[#257F4A]'"/> -->
              </div>
             
              <div>
                <Accordion type="single" class="lg:hidden space-y-4" collapsible default-value="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger class="p-6 whitespace-nowrap bg-[#F2F4F7] text-[#667085] rounded-t-xl data-state=open  data-[state=open]:bg-primary-200  data-[state=open]:text-primary-700">
                      
                      <div class="">
  
                        <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                          <span class="text-white">1</span>
                         </span>
                         
                         Organization Profile
                      </div>
                      
                    </AccordionTrigger>
                    <AccordionContent>
                      <PageUpdateProfile :user="user" />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem  value="item-2">
                    <AccordionTrigger class="p-6 whitespace-nowrap bg-[#F2F4F7] text-[#667085] rounded-t-xl data-state=open  data-[state=open]:bg-primary-200  data-[state=open]:text-primary-700">
                      
                      <div class="">
  
                        <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                          <span class="text-white">2</span>
                         </span>
                         
                         Certificates & Licences
                      </div>
                      
                    </AccordionTrigger>
                    <AccordionContent>
                      <PageProfileUpdateUploads :user="user" />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem  value="item-3">
                    <AccordionTrigger class="p-6 whitespace-nowrap bg-[#F2F4F7] text-[#667085] rounded-t-xl data-state=open  data-[state=open]:bg-primary-200  data-[state=open]:text-primary-700">
                      
                      <div class="">
  
                        <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                          <span class="text-white">3</span>
                         </span>
                         
                         Web & Socials
                      </div>
                      
                    </AccordionTrigger>
                    <AccordionContent>
                      <PageProfileUpdateLinks :user="user" />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Tabs
                default-value="orders"
                class="hidden lg:block">
                <TabsList class="grid lg:grid-cols-4 justify-start gap-1">
                  <TabsTrigger inner_class="flex items-center justify-center" value="orders" class="py-6 data-[state=active]:bg-primary-200  data-[state=active]:text-primary-700">
                   <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                    <span class="text-white">1</span>
                   </span>
                   
                   Organization Profile 
                  </TabsTrigger>
                  <TabsTrigger inner_class="flex items-center justify-center" value="dispensed" class="py-6 data-[state=active]:bg-primary-200 flex data-[state=active]:text-primary-700">
                    <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                      <span class="text-white">2</span>
                     </span>                  Certificates & Licences  </TabsTrigger>
                  <TabsTrigger  inner_class="flex items-center justify-center" value="dispensed2" class="py-6 data-[state=active]:bg-primary-200 data-[state=active]:text-primary-700"> 
                    <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                      <span class="text-white">3</span>
                     </span>
                    Web & Socials  </TabsTrigger>
                    <TabsTrigger  inner_class="flex items-center justify-center" value="change_password" class="py-6 data-[state=active]:bg-primary-200 data-[state=active]:text-primary-700"> 
                    <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                      <span class="text-white">4</span>
                     </span>
                    Change Password  </TabsTrigger>
                </TabsList>
                <TabsContent value="orders">
                  
                  <PageUpdateProfile :user="user" />
                 
                </TabsContent>
                <TabsContent value="dispensed">
                 <PageProfileUpdateUploads :user="user" />
                </TabsContent>
                <TabsContent value="dispensed2">
                  <PageProfileUpdateLinks :user="user" />
                </TabsContent>
                <TabsContent value="change_password">
                    <form @submit="onSubmit" class="w-full lg:w-1/2 mx-auto flex gap-4 flex-col mt-8">
        <div class="flex flex-col gap-2">
          <h6 class="text-secondary-header3 text-xl font-bold">Set a new password</h6>
        </div>
        <FormField v-slot="{ componentField }" name="current_password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Current Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input :type="isPasswordVisible ? 'text' : 'password'"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <button type="button" @click="togglePasswordVisibility"  class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="new_password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">New Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input :type="isPasswordVisible ? 'text' : 'password'"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <button @click="togglePasswordVisibility" type="button" class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- </div> -->

        <Button @click="onSubmit" type="button" :disabled="loadingSubmit"  class="text-base py-3 h-11 mt-2">Change Password

          <LoaderCircle v-show="loadingSubmit" class="animate-spin h-4 w-4 ml-2" />
        </Button>

      </form>
                </TabsContent>
              </Tabs>
              </div>
          </div>
  
        
          
        </div>
      </NuxtLayout>
    </div>
  </template>
  
  <script setup>
import AccordionItem from '~/components/ui/accordion/AccordionItem.vue';
import Tabs from '~/components/ui/tabs/Tabs.vue';
import TabsContent from '~/components/ui/tabs/TabsContent.vue';
import TabsList from '~/components/ui/tabs/TabsList.vue';
import TabsTrigger from '~/components/ui/tabs/TabsTrigger.vue';
import { useAuthStore } from '~/store/auth';
import { useProfileStore } from '~/store/profile';
import { useForm } from 'vee-validate';
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { toast } from 'vue-sonner';
import { Eye, EyeOff, LoaderCircle } from 'lucide-vue-next';


const formSchema = toTypedSchema(
  z.object({
    current_password: z.string({ message: "Current password is required" }),
      // This can stay to ensure there's some input
    new_password: z.string({message: 'New password is required'})
  })
);
const form = useForm({
  validationSchema: formSchema,
})
const authStore = useAuthStore();
const profileStore = useProfileStore()
const user = computed(() => {
  return authStore.user;
})
const profile = computed(()=> {
  return profileStore.profile
})
const loadingSubmit  = ref(false);

  const loading = computed(() => {
    return authStore.loadingUser
  })
  
const isPasswordVisible = ref(false);

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

const onSubmit  = form.handleSubmit(async( values) => {
  try {
    loadingSubmit.value = true;
  const response =  await authStore.change_current_password( values );
  if (response.data && response?.data?.data?.status == 204) {
    loadingSubmit.value = false;
    form.handleReset()
    toast.success( 'Password changed successfully')
    } else {
      loadingSubmit.value = false;
      }
      if (response.error && response?.error?.current_password) {
        const joined = response?.error?.current_password.join(' ');
        toast.error(joined || 'Error , please check details and try again.');
        }
        else if(response?.error && response?.error?.new_password ){
          const joined = response?.error?.new_password.join(' ');
          toast.error(`${joined}`|| 'Error , please check details and try again.')
        }else if (response.error && response?.error?.error) {
          const joined = response?.error?.error?.join(' ');
          toast.error(joined|| 'Error registering, please check details and try again.')
        }
        loadingSubmit.value = false
  }catch(error) {
    loadingSubmit.value = false
    console.log('error', error)
  }
})
  onMounted(() => {
    authStore.getUser()
  
  })
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>