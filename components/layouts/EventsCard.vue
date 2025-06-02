<template>
  <div class="grid sm:grid-cols-1">
   
    <Card class="grid grid-cols-1 md:grid-cols-[160px_minmax(0,1fr)] border border-primary rounded-lg p-4 overflow-hidden">
      <CardHeader class="p-0 relative">
        <NuxtLink :to="`/general/event/${transformHref(event?.title)}`" class="capitalize text-base font-semibold text-primary">

        <img
          :src="event?.event_image_url || placeholderImg"
          alt="Program Image"
          class="w-full h-full object-cover "
        />  
        </NuxtLink>
      </CardHeader>
      <CardContent class="p-4 space-y-2">
        <NuxtLink :to="`/general/event/${transformHref(event?.title)}`" class="capitalize text-base font-semibold text-primary">
          {{ event?.title || 'N/A' }}
        </NuxtLink>
        <div class="text-sm text-[#475467] flex items-center space-x-2">
          <!-- <span class="inline-block w-4 h-4 bg-blue-500 rounded-full"></span> -->
          <Building2 class="size-4"/>
          <span> {{ event?.organization_name|| 'N/A' }}</span>
        </div>
        <p class="text-secondary-body-contrast text-sm px-1 py-1 line-clamp-3" v-html="event?.description" />
        <div class=" text-xs text-[#FE7102] capitalize font-normal px-1 py-1">
          {{ event?.payment_mode || 'N/A' }}
        </div>
        <div class="flex flex-col flex-wrap">
          <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
            <CalendarDays class="size-4" />
            <span class="font-normal text-nowrap">{{ dayjs(event?.start_date).format('LL')  || 'N/A'}} -  {{ dayjs(event?.end_date).format('LL')  || 'N/A'}}</span>
          </div>
          <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
            <Clock11 class="size-4" />
            <span class="font-normal text-nowrap">{{convertToAMPM(event?.start_time) }} </span>
          </div>
        </div>
        <!-- <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
          <CalendarDays class="size-4" />
          <span class="font-normal text-nowrap">{{ dayjs(event?.start_date).format('LL')  || 'N/A'}} -  {{ dayjs(event?.end_date).format('LL')  || 'N/A'}}</span>
        </div> -->
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Building2, CalendarDays, Clock11 } from 'lucide-vue-next';
import { useDayjs } from '#dayjs' // not need if you are using auto import
import placeholderImg from '~/assets/images/placeholderImg.png'; // Import the placeholder image
import { convertToAMPM, transformHref } from '~/lib/utils';

const dayjs = useDayjs()

const props = defineProps({
  event:{
    type: Object
  }
})
</script>

<style lang="scss" scoped>

</style>