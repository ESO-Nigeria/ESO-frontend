<template>
    <div>
      <NuxtLayout name="general" :title="event?.title" :loading="loading">
        <div v-if="loading" class="flex h-screen justify-center items-center">
          <LayoutsLoader />
        </div>
        
        <div v-else class="container py-6">
          <LayoutsBreadcrumb
            :breadcrumbs="[
              { text: 'Events', href: '/general/events' },
              {text: `${event?.title}`}
              ]"></LayoutsBreadcrumb>
          <div class="py-3 h-full">
            <div class="grid h-full items-stretch gap-8 md:grid-cols-[260px_minmax(0,1fr)]">
              <div class=" bg-white rounded-md ">
                <div>
                  <div >
                    <div class="h-[290px] bg-[#EAECF0] mt-4 rounded-lg"> 
                      <img :src="event?.event_image_url || '~/assets/images/placeholderImg.png'" class="h-full w-full rounded-md"/>
                    </div>
                    <div class="mt-3">
                      <div class=" flex divide-x-2">
            <p class=" text-sm text-[#FE7102] font-normal px-1 ">
              Free
            </p>
            <p class="text-secondary-body-contrast text-nowrap text-sm px-1 ">
              <!-- Startup (Post-revenue) -->
            </p>
          </div>
          <div>
            <span class="text-secondary-body-contrast  text-sm px-1 ">
              Status: <span class="text-[#257F4A] capitalize">{{  event?.application_status }}</span>
            </span>
          </div>
                   
          <a :href="event?.registration_link" target="_blank" class="w-full mt-3">
                      <Button size="lg" class="py-3 px-5 h-11 w-full"  type="button" >
                      Apply Now
                    </Button>
                  </a>
        </div>
                  </div>
                </div>
              </div>
              <div class=" bg-white rounded-md mt-4">
                <div class="flex gap-4 flex-col">
                  <div class="space-y-6">
                    <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
            <CalendarDays class="size-4" />
            <span class="font-normal text-nowrap">{{ dayjs(event?.start_date).format('LL')  || 'N/A'}} -  {{ dayjs(event?.end_date).format('LL')  || 'N/A'}}</span>
          </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Event Description</p>
                      <p class="text-sm text-[#3F434A] font-normal" v-html="event?.description" />
                       
                    </div>
                   </div>
                  <div class="flex justify-end mt-6 gap-4">
                    <a :href="event?.registration_link" target="_blank" class="w-full">
                      <Button size="lg" class="py-3 px-5 h-11 w-full"  type="button" >
                      Apply Now
                    </Button>
                  </a>
                   
                    <a :href="event?.website_link" target="_blank" class="w-full">
                      <Button class="py-3 px-5 h-11 w-full bg-[#257F4A]" size="lg" type="button">
                        Visit Website
                      </Button>
                    </a>
                   
                    <!-- <Button size="lg" v-if="currentStep === steps.length - 1" type="submit" >
                      Submit
                    </Button> -->
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLayout>
  
    </div>
  </template>
  
  <script setup>
  import { CalendarDays } from 'lucide-vue-next';
  import { useProfileStore } from '~/store/profile';
  import { useDayjs } from '#dayjs' // not need if you are using auto import
  import { reverseTransform } from '~/lib/utils';
  
  const dayjs = useDayjs()
  
  const { event_id } = useRoute().params
  const profileStore = useProfileStore()
  
  const event = computed(() => {
    return profileStore.event
  })
  const loading = computed(() => {
    return profileStore.loading
  })
  onMounted(() => {
    profileStore.getSingleEvents(reverseTransform(event_id) )
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>