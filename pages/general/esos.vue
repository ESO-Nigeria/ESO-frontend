<template>
  <div>
    <NuxtLayout name="general" title="Enterprise Support Organisations (ESOs)" >
     
          <div  class="container py-4">
            <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'ESOs' }]"></LayoutsBreadcrumb>
            <div class="py-6 h-full">
              <div class="grid h-full items-stretch gap-6 md:grid-cols-[350px_minmax(0,1fr)]">
                <Dialog >
                  <DialogTrigger class="lg:hidden">
                    <h2 class="text-xl text-primary flex gap-1 lg:hidden"> 
                      <img src="~/assets/images/icons/filter.svg" class=" items-center"/> 
                      <span>Filter</span>
                    </h2>
                  </DialogTrigger>
                  <DialogScrollContent class="w-10/12 rounded">
                    <DialogHeader showClose>
                      <DialogTitle>
                        <h2 class="text-xl text-primary flex gap-1 lg:hidden"> 
                          <img src="~/assets/images/icons/filter.svg" class=" items-center"/> 
                          <span>Filter</span>
                        </h2>
                      </DialogTitle>
                    </DialogHeader>
                    <div class="space-y-4">
                      <div>
                        <p class="text-primary text-base font-medium">Sector</p>
                        <div>
                          <FormField 
                          v-for="item in sectors" 
                          :key="item.id" 
                          v-slot="{ value, handleChange }" 
                          type="checkbox" 
                          :name="'sectors'"
                          :unchecked-value="false"
                          :value="item.id"
                      >
                        <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                          <FormControl>
                            <Checkbox class="size-5" 
                            :checked="isSelected(item.id, 'sectors')" 
                            @update:checked="(value) => handleCheckboxChange(value, item.id, 'sectors')"
                            />
                          </FormControl>
                          <div class=" leading-none text-secondary-body-500 text-sm">
                            <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                          </div>
                        </FormItem>
                      </FormField>
                      
                          
                        </div>
                      </div>
                      <div>
                        <p class="text-primary text-base font-medium">Organization Type</p>
                        <div>
                          <FormField 
                          v-for="item in organization_types" 
                          :key="item.id" 
                          v-slot="{ value, handleChange }" 
                          type="checkbox" 
                          :value="item.id" 
                          :unchecked-value="false"
                          :name="'organization_types'">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" 
                                :checked="isSelected(item.id, 'organization_types')" 
                                @update:checked="(value) => handleCheckboxChange(value, item.id, 'organization_types')"
                                 />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.label}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                          
                        </div>
                      </div>
                   
                  
                    </div>
                  </DialogScrollContent>
                </Dialog>
                <form class="py-4 hidden lg:block">
                  <h2 class="text-xl  mb-4 text-primary flex gap-1"> 
                    <img src="~/assets/images/icons/filter.svg" class=" items-center"/> 
                  <span>Filter</span>
                  </h2>
                  <div class="space-y-4">
                    <div>
                      <p class="text-primary text-base font-medium">Sector</p>
                      <div>
                        <FormField 
                            v-for="item in sectors" 
                            :key="item.id" 
                            v-slot="{ value, handleChange }" 
                            type="checkbox" 
                            :name="'sectors'"
                            :unchecked-value="false"
                            :value="item.id"
                        >
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5" 
                              :checked="isSelected(item.id, 'sectors')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'sectors')"
                              />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                    <div>
                      <p class="text-primary text-base font-medium">Organization Type</p>
                      <div>
                        <FormField 
                        v-for="item in organization_types" 
                        :key="item.id" 
                        v-slot="{ value, handleChange }" 
                        type="checkbox" 
                        :value="item.id" 
                        :unchecked-value="false"
                        :name="'organization_types'">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5" 
                              :checked="isSelected(item.id, 'organization_types')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'organization_types')"
                               />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.label}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                 
                
                  </div>
                </form>
                <div class="space-y-5">
                  <div class="flex flex-col lg:flex-row justify-between gap-x-6 gap-y-4 lg:gap-y-0">
                    <div class="flex-1">
                      <FormField v-slot="{ componentField }" name="search">
                        <FormItem class="space-y-1">
                          <FormControl >
                            <div class="relative flex border items-center border-primary rounded-md ">
                              <Input v-bind="componentField" id="search" type="text" placeholder="Search For ESOs." 
                              class="pl-10 h-11 border-0  ring-0 disabled:bg-[#EAECF0] focus:bg-[#F5F5F5]   rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-[#333] text-sm"
                              />
                              <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                                <Search class="size-5 text-muted-foreground" />
                              </span>
                              <Button size="lg" class="h-11 rounded-none">Search</Button>
                            </div>
                           
                          </FormControl>
                          
                        </FormItem>
                      </FormField>
                    </div>
                  
                  </div>

                  <div class="grid lg:grid-cols-3 gap-7">
                    <div v-if="loading" class="flex h-screen justify-center items-center">
                      <LayoutsLoader />
                    </div>
                    <div  v-else-if="ESOs?.results && ESOs?.results?.length == 0" class="col-span-3 flex items-center justify-center flex-col gap-2.5">
                      <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2" width="32" height="32" rx="16" fill="white"/>
                        <rect x="2.5" y="2" width="32" height="32" rx="16" stroke="#CEE8F7" stroke-width="4"/>
                        <g clip-path="url(#clip0_11060_11818)">
                        <path d="M23.1667 12.0003H18.8147C18.7116 12.001 18.6097 11.9782 18.5167 11.9337L16.4127 10.8777C16.1349 10.7394 15.8289 10.6672 15.5187 10.667H13.8333C12.9496 10.6681 12.1024 11.0196 11.4775 11.6445C10.8526 12.2694 10.5011 13.1166 10.5 14.0003V22.0003C10.5011 22.8841 10.8526 23.7313 11.4775 24.3562C12.1024 24.9811 12.9496 25.3326 13.8333 25.3337H23.1667C24.0504 25.3326 24.8976 24.9811 25.5225 24.3562C26.1474 23.7313 26.4989 22.8841 26.5 22.0003V15.3337C26.4989 14.4499 26.1474 13.6027 25.5225 12.9778C24.8976 12.3529 24.0504 12.0014 23.1667 12.0003ZM13.8333 12.0003H15.5187C15.6218 11.9996 15.7237 12.0224 15.8167 12.067L17.9207 13.1197C18.1981 13.2591 18.5041 13.3324 18.8147 13.3337H23.1667C23.5654 13.3343 23.9548 13.4541 24.2849 13.6777C24.615 13.9012 24.8708 14.2184 25.0193 14.5883L11.8333 14.663V14.0003C11.8333 13.4699 12.044 12.9612 12.4191 12.5861C12.7942 12.211 13.3029 12.0003 13.8333 12.0003ZM23.1667 24.0003H13.8333C13.3029 24.0003 12.7942 23.7896 12.4191 23.4145C12.044 23.0395 11.8333 22.5308 11.8333 22.0003V15.9963L25.1667 15.921V22.0003C25.1667 22.5308 24.956 23.0395 24.5809 23.4145C24.2058 23.7896 23.6971 24.0003 23.1667 24.0003Z" fill="#374957"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11060_11818">
                        <rect width="16" height="16" fill="white" transform="translate(10.5 10)"/>
                        </clipPath>
                        </defs>
                        </svg>
            
                        <span class="text-lg text-[#3F434A] font-medium">
                          ESO Not found
                        </span>
                    </div>
                    <Card v-else v-for="(item, index) in ESOs?.results" :key="index"  class="shadow-lg rounded-lg sm:px-3 py-0 overflow-hidden">
                      <NuxtLink :to="`/general/eso/${item?.id}/details`">
                      <CardHeader class="p-0 relative">
                        <!-- assets\images\placeholderImg.png C:\Users\HomePC\Documents\work\eso\assets\images\placeholderImg.png-->
                        <img
                           :src="item?.logo_url || placeholderImg"
                          alt="ESOs Logo"
                          class="w-full h-[115px] object-contain rounded-lg"
                        />  
                        <!-- <NuxtImg
                            :src="item?.logo || '~/assets/images/placeholderImg.png'" 
                            alt="ESOs Logo" 
                            class="w-full h-[115px] object-cover rounded-lg" 
                          /> -->
                      </CardHeader>
                      <CardContent class="p-4 space-y-2">
                        <div class=" flex ">
                         
                          <div class="text-secondary-body-contrast inline-flex items-center text-nowrap text-xs px-1 py-1">
                            <MapPin class="size-4 mr-1" />  {{ item?.address }}
                          </div>
                          
                        </div>
                        <p class="text-primary text-base font-semibold">{{item?.user?.organization_name}}</p>
                        <div class=" space-y-2 mt-2">
                          <p class="text-primary text-sm font-semibold">Organization Type</p>
                          <p class="text-secondary-body-500">
                            {{organization_types?.find(type => type.id == item?.user?.organization_type)?.label }}
                          </p>
                          
                        </div>
                        <div class="space-y-2 mt-2">
                          <p class="text-primary text-sm font-semibold">Brief Description</p>
                          <p class="text-secondary-body-500 truncate">{{item?.description}}</p>
                          
                        </div>
                      </CardContent>
                    </NuxtLink>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useForm } from "vee-validate";
import { Building2, CalendarDays, FilterIcon, MapPin, Search } from 'lucide-vue-next';
import Card from '~/components/layouts/Card.vue';
import CardContent from '~/components/ui/card/CardContent.vue';
import CardFooter from '~/components/ui/card/CardFooter.vue';
import CardHeader from '~/components/ui/card/CardHeader.vue';
import DropdownMenu from '~/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '~/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuLabel from '~/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuRadioGroup from '~/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue';
import DropdownMenuRadioItem from '~/components/ui/dropdown-menu/DropdownMenuRadioItem.vue';
import DropdownMenuTrigger from '~/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import FormLabel from '~/components/ui/form/FormLabel.vue';
import placeholderImg from '~/assets/images/placeholderImg.png'; // Import the placeholder image
import { organization_types } from '~/lib/data';

import { useProfileStore } from '~/store/profile';
const sectors = [
  { id: 1, name: 'Agriculture' },
  { id: 2, name: 'Healthcare ' },
  { id: 3, name: 'Education' },
  { id: 4, name: 'Renewable Energy ' },
  { id: 5, name: 'Climate' },
  { id: 6, name: 'Mobility/ Transportation ' },
  { id: 7, name: 'Technology' },
  { id: 8, name: 'Consulting' },
  { id: 9, name: 'Services' },
  { id: 10, name: 'Others' },

]
const selectedSectors = ref(new Set());
const selectedOrganizationTypes = ref(new Set());
let timeout;


const form = useForm({});

const isSelected = (id, type) => {
  return type === 'sectors' ? selectedSectors.value.has(id) : selectedOrganizationTypes.value.has(id);
};

const handleCheckboxChange = (checked, id, type) => {
  if (checked) {
    if (type === 'sectors') selectedSectors.value.add(id);
    if (type === 'organization_types') selectedOrganizationTypes.value.add(id);
  } else {
    if (type === 'sectors') selectedSectors.value.delete(id);
    if (type === 'organization_types') selectedOrganizationTypes.value.delete(id);
  }

  clearTimeout(timeout); // Clear the previous timeout
  timeout = setTimeout(() => {
    sendApiRequest();
  }, 1500);
};

const sendApiRequest = async () => {
  const sectorsString = Array.from(selectedSectors.value).join(',');
  const organizationTypesString = Array.from(selectedOrganizationTypes.value).join(',');
  const response = await profileStore.getESOs(organizationTypesString, sectorsString)
  // You would typically use fetch or axios here
};

const profileStore = useProfileStore()

const ESOs = computed(() => {
  return profileStore.ESOs
})
const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getESOs()
})
</script>

<style lang="scss" scoped>

</style>