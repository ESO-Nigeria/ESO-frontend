<template>
  <div>

    <NuxtLayout name="dashboard">
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
      <div v-else class="flex flex-col w-full gap-3">
        <LayoutsBreadcrumb
          :breadcrumbs="[{ text: 'Dashboard' }]"></LayoutsBreadcrumb>
        <div class="mt-3">
          <LayoutsTitleHeader
           :title="`${user?.organization_name ? user?.organization_name : ''}`"
             />
        </div>
        <div class="bg-white p-4 lg:p-8 rounded-md flex flex-col gap-4 ">
            <div class="grid lg:grid-cols-2 items-center">
              <LayoutsSubTitleHeader
               :title="`Welcome aboard🚀, ${user?.first_name ? user?.first_name : ''}`"
               />
               <!-- <Progress :model-value="15 " class="bg-[#B1EDCA]" :indicator_class="'bg-[#257F4A]'"/> -->
            </div>
            <div>
              <p class="text-secondary-body-regular-contrast text-base">
                Let's get started on making your experience extraordinary. Please complete the following sections to create a detailed profile for your organization. This information helps us provide the most relevant information to verify your organization
              </p>
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
                    <PageProfile :user="user" />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem  value="item-2">
                  <AccordionTrigger :disabled="!profile"  class="p-6 whitespace-nowrap bg-[#F2F4F7] text-[#667085] rounded-t-xl data-state=open  data-[state=open]:bg-primary-200  data-[state=open]:text-primary-700">
                    
                    <div class="">

                      <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                        <span class="text-white">2</span>
                       </span>
                       
                       Certificates & Licences
                    </div>
                    
                  </AccordionTrigger>
                  <AccordionContent>
                    <PageProfileUploads :user="user" />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem  value="item-3">
                  <AccordionTrigger :disabled="!profile" class="p-6 whitespace-nowrap bg-[#F2F4F7] text-[#667085] rounded-t-xl data-state=open  data-[state=open]:bg-primary-200  data-[state=open]:text-primary-700">
                    
                    <div class="">

                      <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                        <span class="text-white">3</span>
                       </span>
                       
                       Web & Socials
                    </div>
                    
                  </AccordionTrigger>
                  <AccordionContent>
                    <PageProfileLinks :user="user" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Tabs
              default-value="orders"
              class="hidden lg:block">
              <TabsList class="grid lg:grid-cols-3 justify-start gap-1">
                <TabsTrigger inner_class="flex items-center justify-center" value="orders" class="py-6 data-[state=active]:bg-primary-200  data-[state=active]:text-primary-700">
                 <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                  <span class="text-white">1</span>
                 </span>
                 
                 Organization Profile 
                </TabsTrigger>
                <!-- :disabled="!profile" -->
                <TabsTrigger :disabled="!profile"  inner_class="flex items-center justify-center" value="dispensed" class="py-6 data-[state=active]:bg-primary-200 flex data-[state=active]:text-primary-700">
                  <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                    <span class="text-white">2</span>
                   </span>                  Certificates & Licences  </TabsTrigger>
                   <!-- :disabled="!profile" -->
                   <TabsTrigger :disabled="!profile" inner_class="flex items-center justify-center" value="dispensed2" class="py-6 data-[state=active]:bg-primary-200 data-[state=active]:text-primary-700"> 
                  <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                    <span class="text-white">3</span>
                   </span>
                  Web & Socials  </TabsTrigger>
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
            </Tabs>

           
            </div>
        </div>

      
        
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import Accordion from '~/components/ui/accordion/Accordion.vue';
import AccordionContent from '~/components/ui/accordion/AccordionContent.vue';
import AccordionItem from '~/components/ui/accordion/AccordionItem.vue';
import AccordionTrigger from '~/components/ui/accordion/AccordionTrigger.vue';
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

onMounted(() => {
  authStore.getUser()

})

</script>

<style lang="scss" scoped>

</style>