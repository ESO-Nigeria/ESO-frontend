<template>
  <div class="mb-4">
    <Card   class=" rounded-lg px-0 py-0 overflow-hidden">
      <CardHeader class="p-0 relative">
        <img
          src="~/assets/images/programmes.jpg"
          alt="Program Image"
          class="w-full h-[300px] object-cover rounded-lg"
        />  
      </CardHeader>
      <CardContent class="p-4 space-y-2">
        <div class=" flex divide-x-2">
          <div class=" text-xs text-[#FE7102] font-normal px-1 py-1">
            Free
          </div>
          <div class="text-secondary-body-contrast text-nowrap text-xs px-1 py-1">
            Startup (Post-revenue)
          </div>
          <span class="text-secondary-body-contrast  text-xs px-1 py-1">
            3 months
          </span>
        </div>
        <NuxtLink to="/general/programms/1/details" class="text-base font-semibold text-primary">Access Bank Corners Business Accelerator</NuxtLink>
        <div class="text-sm text-[#475467] flex items-center space-x-2">
          <!-- <span class="inline-block w-4 h-4 bg-blue-500 rounded-full"></span> -->
          <Building2 class="size-4"/>
          <span>Access Bank</span>
        </div>
        <div class="flex space-x-2 mt-2">
          <span
            class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
          >
           Tags
          </span>
        </div>
        <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
          <CalendarDays class="size-4" />
          <span class="font-normal text-nowrap">Application Deadline: 2 Nov 2024</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Building2, CalendarDays } from 'lucide-vue-next';


</script>

<style lang="scss" scoped>

</style>