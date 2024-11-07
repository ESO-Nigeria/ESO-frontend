<template>
  <div>
    <Card   class="grid md:grid-cols-[160px_minmax(0,1fr)] rounded-lg p-4 overflow-hidden">
      <CardHeader class="p-0 relative">
        <img
          src="~/assets/images/image.png"
          alt="Program Image"
          class="w-full h-full object-cover "
        />  
      </CardHeader>
      <CardContent class="p-4 space-y-2">
        <div class=" flex divide-x-2">
          
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
        <p class="text-secondary-body-contrast text-sm px-1 py-1">
          Distinguished leaders from renowned global brands will share their insights on cutting- edge …
        </p>
        <div class=" text-xs text-[#FE7102] font-normal px-1 py-1">
          Free
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