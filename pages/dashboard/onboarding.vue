<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex flex-col w-full gap-3">
        <LayoutsBreadcrumb
          :breadcrumbs="[{ text: 'Dashboard' }]"></LayoutsBreadcrumb>
        <div class="mt-3">
          <LayoutsTitleHeader
            :title="'Hi, Impact Hub'"
             />
        </div>
        <div class="bg-white p-8 rounded-md flex flex-col gap-4 ">
            <div class="grid grid-cols-2 items-center">
              <LayoutsSubTitleHeader
              :title="'Welcome aboard🚀, Samuel!'"
               />
               <Progress :model-value="15 " class="bg-[#B1EDCA]" :indicator_class="'bg-[#257F4A]'"/>
            </div>
            <div>
              <p class="text-secondary-body-regular-contrast text-base">
                Let's get started on making your experience extraordinary. Please complete the following sections to create a detailed profile for your organization. This information helps us provide the most relevant information to verify your organization
              </p>
            </div>
            <div>
              <Tabs
              default-value="orders"
              class="">
              <TabsList class="grid grid-cols-3 justify-start gap-1">
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
                <TabsTrigger inner_class="flex items-center justify-center" value="dispensed2" class="py-6 data-[state=active]:bg-primary-200 data-[state=active]:text-primary-700"> 
                  <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                    <span class="text-white">3</span>
                   </span>
                  Web & Socials  </TabsTrigger>
              </TabsList>
              <TabsContent value="orders">
                
                <PageProfile />
               
              </TabsContent>
              <TabsContent value="dispensed">
               <PageProfileUploads />
              </TabsContent>
              <TabsContent value="dispensed2">
                <PageProfileLinks />
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


</script>

<style lang="scss" scoped>

</style>