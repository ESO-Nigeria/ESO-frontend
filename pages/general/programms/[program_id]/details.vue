<template>
  <div>
    <NuxtLayout name="general" :title="program?.title">
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
                     :src="  item?.program_image?.url || item?.program_image_url || placeholderImg"
                    
                    class="h-full w-full rounded-md"/>
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
                      <p class="text-sm text-[#3F434A] font-normal">
                        {{ program.application_deadline }}
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
                        {{ program.program_mode }}
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-5 justify-between w-1/2">
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">No of participant accepted per cohort(Optional)</p>
                      <p class="text-sm text-[#3F434A] font-normal">

                      </p>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Participation Fee</p>
                      <p class="text-sm text-[#3F434A] font-normal">

                      </p>
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Location</p>
                    <p class="text-sm text-[#3F434A] font-normal">

                    </p>
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
                  <Button size="lg" class="py-3 px-5 h-11 w-full"  type="button" >
                    Apply Now
                  </Button>
                  <Button class="py-3 px-5 h-11 w-full bg-[#257F4A]" size="lg" type="button">
                    Visit Website
                  </Button>
                
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
  profileStore.getSingleProgramme(program_id)
})
</script>

<style lang="scss" scoped>

</style>