<template>
  <div>
    <NuxtLayout name="general" :title="program?.title || 'Loading....'">
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
      
      <div v-else class="container py-6">
        <LayoutsBreadcrumb
          :breadcrumbs="[
            { text: 'Programmes', href: '/general/programmes' },
            {text: `${program.title}`}
            ]"></LayoutsBreadcrumb>
           
        <div class="py-3 h-full">
          <div class="grid h-full items-stretch gap-8 md:grid-cols-[260px_minmax(0,1fr)]">
            <div class=" bg-white rounded-md ">
              <div>
                <div>
                  <div class="h-[290px] bg-[#EAECF0] mt-4"> 
                    <img 
                     :src=" program?.program_image_url || placeholderImg"
                    
                    class="h-full w-full rounded-md"/>
                  </div>
                  <div class="mt-3">
                    <!-- <div class=" flex divide-x-2">
          <p class=" text-sm text-[#FE7102] font-normal px-1 ">
            Free
          </p>
          <p class="text-secondary-body-contrast text-nowrap text-sm px-1 ">
            Startup (Post-revenue)
          </p>
        </div> -->
        <div>
          <span class="text-secondary-body-contrast  text-sm px-1 ">
            Status: <span class="text-[#257F4A] capitalize">{{  program?.program_details?.application_status }}</span>
          </span>
        </div>
                 
        <a :href="program?.program_details?.registration_link" target="_blank" class="w-full mt-3">
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
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Business Stage</p>
                    <p class="text-sm flex space-x-2 text-[#3F434A] font-normal
                    ">
                    <span
                    v-for="tag in program.target_audience"
                    :key="tag"
                    class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
                  >
                  {{targetAudience?.find(type => type.id == tag).label }}
                  </span>                  </p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Sector</p>
                    <p class="flex space-x-2 text-sm text-[#3F434A] font-normal">
                      <span
                      v-for="tag in program.sectors"
                      :key="tag"
                      class="bg-[#F2F4F7] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
                    >
                    {{sectors?.find(type => type.id == tag).label }}
                    </span>                      
                  </p>
                  </div>
                  <div class="flex gap-5 justify-between w-1/2">
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Application Deadline</p>
                      <p class="text-sm text-[#3F434A] font-normal capitalize">
                        {{ program?.program_details?.application_deadline }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Timeline/Duration</p>
                      <p class="text-sm text-[#3F434A] font-normal">

                      </p>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Program Mode</p>
                      <p class="text-sm text-[#3F434A] font-normal capitalize">
                        {{ program?.program_details?.program_mode }}
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-5 justify-between w-1/2">
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">No of participant accepted per cohort(Optional)</p>
                      <p class="text-sm text-[#3F434A] font-normal">
                        {{ program?.program_details?.number_of_participants }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Participation Fee</p>
                      <p class="text-sm text-[#3F434A] font-normal">
                        {{program?.program_details?.amount &&  formatToNaira(program?.program_details?.amount) }}
                      </p>
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Location</p>
                    <div class="text-sm flex flex-wrap  text-[#3F434A] font-normal">
                      <p class=" px-2 py-1 text-nowrap" v-for="location, index in program?.program_details?.location" :key="index" >
                        {{ location }}
                      </p>
                    </div>
                  </div>
                 <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Program Description</p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      {{ program.description }}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">  Program Details</p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      {{ program.brief_details}}
                    </p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">  Non Financial Support Provided</p>
                    <p class="text-sm flex space-x-2 text-[#3F434A] font-normal
                    ">
                    <span
                    v-for="tag in program.non_financial_supports"
                    :key="tag"
                    class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
                  >
                  {{nonFinancialSupport?.find(type => type.id == tag).label }}
                  </span>                  </p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold"> Financial Support Provided</p>
                    <p class="text-sm flex space-x-2 text-[#3F434A] font-normal
                    ">
                    <span
                    v-for="tag in program.financial_supports"
                    :key="tag"
                    class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
                  >
                  {{financialSupport?.find(type => type.id == tag).label }}
                  </span>                  </p>
                  </div>
                </div>
                <div class="flex justify-end mt-6 gap-4">
                  <a :href="program?.program_details?.registration_link" class="w-full"  target="_blank">
                    <Button size="lg" class="py-3 px-5 h-11 w-full"  type="button" >
                      Apply Now
                    </Button>
                  </a>
                 
                  <a :href="program?.program_details?.website_link" target="_blank" class="w-full" rel="noopener noreferrer">
                    <Button class="py-3 px-5 h-11 w-full bg-[#257F4A]" size="lg" type="button">
                      Visit Website
                    </Button>
                  </a>
                  
                
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
import { useProfileStore } from '~/store/profile';
import { useDayjs } from '#dayjs' // not need if you are using auto import
import placeholderImg from '~/assets/images/placeholderImg.png'; // Import the placeholder image
import { targetAudience, sectors, nonFinancialSupport, financialSupport, programMode, organization_types } from '~/lib/data';
import { formatToNaira, reverseTransform } from '~/lib/utils';
const dayjs = useDayjs()

const { program_id } = useRoute().params
const profileStore = useProfileStore()

const program = computed(() => {
  return profileStore.program
})
const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getSingleProgramme(reverseTransform(program_id))
})
</script>

<style lang="scss" scoped>

</style>