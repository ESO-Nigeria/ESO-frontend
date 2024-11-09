<template>
  <div class="mb-4">
    <Card class="shadow-lg rounded-lg px-4 py-0 overflow-hidden">
      <CardHeader class="p-0 relative">
        <img
          :src="  program?.program_image?.url || program?.program_image_url || placeholderImg"
          alt="Program Image"
          class="w-full h-[300px] object-cover rounded-lg"
        />  
      </CardHeader>
      <CardContent class="p-4 space-y-2">
        <div class=" flex divide-x-2">
          <!-- <div class=" text-xs text-[#FE7102] font-normal px-1 py-1">
            {{program?.payment_mode}}
          </div> -->
          <div class="text-secondary-body-contrast text-nowrap text-xs py-1">
            <!-- Startup (Post-revenue) -->
            {{targetAudience?.find(type => type.id == program?.target_audience)?.label }}
          </div>
          <!-- <span class="text-secondary-body-contrast  text-xs px-1 py-1">
            3 months
          </span> -->
        </div>
        <NuxtLink :to="`/general/programms/${program.id}/details`" class="text-base font-semibold text-primary capitalize">{{program?.title}}</NuxtLink>
        <div class="text-sm text-[#475467] flex programs-center space-x-2">
          <!-- <span class="inline-block w-4 h-4 bg-blue-500 rounded-full"></span> -->
          <Building2 class="size-4"/>
          <span>{{ program?.organization_name}}</span>
        </div>
        <div class="flex space-x-2 mt-2">
          <span
            v-for="tag in program.sectors?.slice(0,3)"
            :key="tag"
            class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
          >
          {{sectors?.find(type => type.id == tag).label }}
          </span>
        </div>
        <div class="text-sm flex gap-x-2 programs-center text-secondary-body-500 mt-2">
          <CalendarDays class="size-4" />
          <span class="font-normal text-nowrap">Application Deadline: {{program?.application_deadline}}</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Building2, CalendarDays } from 'lucide-vue-next';
import placeholderImg from '~/assets/images/placeholderImg.png'; // Import the placeholder image
// import placeholderImg from '~/assets/images/placeholderImg.png'; // Import the placeholder image
import { targetAudience, sectors } from '~/lib/data';
const props = defineProps({
  program:{
    type: Object
  }
})
</script>

<style lang="scss" scoped>

</style>