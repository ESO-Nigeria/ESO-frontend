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
                <Tabs
                default-value="orders"
                class="">
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
                  
                  <PageProfile :user="user" />
                 
                </TabsContent>
                <TabsContent value="dispensed">
                 <PageProfileUploads :user="user" />
                </TabsContent>
                <TabsContent value="dispensed2">
                  <PageProfileLinks :user="user" />
                </TabsContent>
                <TabsContent value="change_password">
                    <form @submit="onSubmit" class="w-full lg:w-1/2 mx-auto flex gap-4 flex-col mt-8">
        <div class="flex flex-col gap-2">
          <h6 class="text-secondary-header3 text-xl font-bold">Set a new password</h6>
        </div>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">New Password</FormLabel>
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
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirm_password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Confirm Password</FormLabel>
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
          </FormItem>
        </FormField>
        <!-- </div> -->

        <Button  class="text-base py-3 h-11 mt-2">Change Password

          <!-- <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" /> -->
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
  import Tabs from '~/components/ui/tabs/Tabs.vue';
  import TabsContent from '~/components/ui/tabs/TabsContent.vue';
  import TabsList from '~/components/ui/tabs/TabsList.vue';
  import TabsTrigger from '~/components/ui/tabs/TabsTrigger.vue';
  import { useAuthStore } from '~/store/auth';
  import { useProfileStore } from '~/store/profile';
  
  const authStore = useAuthStore();
  const profileStore = useProfileStore()
  const user = computed(() => {
    return authStore.user;
  })
  const profile = computed(()=> {
    return profileStore.profile
  })
  
  const loading = computed(() => {
    return authStore.loadingUser
  })
  
const isPasswordVisible = ref(false);

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}
  onMounted(() => {
    authStore.getUser()
  
  })
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>