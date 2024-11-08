<template>
  <div>
   
    <Card   class="grid md:grid-cols-[160px_minmax(0,1fr)] border border-primary rounded-lg p-4 overflow-hidden">
      <CardHeader class="p-0 relative">
        <img
          :src="event?.event_image ||''"
          alt="Program Image"
          class="w-full h-full object-cover "
        />  
      </CardHeader>
      <CardContent class="p-4 space-y-2">
        <NuxtLink :to="``" class="text-base font-semibold text-primary">
        
          {{ event?.title || 'N/A' }}
        </NuxtLink>
        <div class="text-sm text-[#475467] flex items-center space-x-2">
          <!-- <span class="inline-block w-4 h-4 bg-blue-500 rounded-full"></span> -->
          <Building2 class="size-4"/>
          <span>Access Bank</span>
        </div>
        <p class="text-secondary-body-contrast text-sm px-1 py-1">
         {{ event?.description|| 'N/A' }}
        </p>
        <div class=" text-xs text-[#FE7102] capitalize font-normal px-1 py-1">
          {{ event?.payment_mode || 'N/A' }}
        </div>
        
        <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
          <CalendarDays class="size-4" />
          <span class="font-normal text-nowrap">{{ dayjs(event?.start_date).format('LL')  || 'N/A'}} -  {{ dayjs(event?.end_date).format('LL')  || 'N/A'}}</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Building2, CalendarDays } from 'lucide-vue-next';
import { useDayjs } from '#dayjs' // not need if you are using auto import

const dayjs = useDayjs()

const props = defineProps({
  event:{
    type: Object
  }
})
</script>

<style lang="scss" scoped>

</style>