<template>
  <div>
    <NuxtLayout name="general" title="ESO Programmes" >
     
          <div class="container py-4">
            <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Programmes' }]"></LayoutsBreadcrumb>
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
                          <FormField v-for="item in sectors" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                        </div>
                      </div>
                      <div>
                        <p class="text-primary text-base font-medium">Stages</p>
                        <div>
                          <FormField v-for="item in stages" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                        </div>
                      </div>
                      <div>
                        <p class="text-primary text-base font-medium">Participation</p>
                        <div>
                          <FormField v-for="item in participations" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                        </div>
                      </div>
                      <div>
                        <p class="text-primary text-base font-medium">Attendance Mode</p>
                        <div>
                          <FormField v-for="item in mode" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                        </div>
                      </div>
                      <div>
                        <p class="text-primary text-base font-medium">Non Financial Support Provided</p>
                        <div>
                          <FormField v-for="item in non_financial_support" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                        </div>
                      </div>
                      <div>
                        <p class="text-primary text-base font-medium">Financial Support Provided</p>
                        <div>
                          <FormField v-for="item in financial_support" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                              </FormControl>
                              <div class=" leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                          
                        </div>
                      </div>
                    </div>
                  </DialogScrollContent>
                </Dialog>
                <div class="py-4 hidden lg:block">
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
                          type="checkbox" 
                          :name="'sectors'"
                          :unchecked-value="false"
                          :value="item.id">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5"  
                              :checked="isSelected(item.id, 'sectors')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'sectors')" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                    <div>
                      <p class="text-primary text-base font-medium">Stages</p>
                      <div>
                        <FormField 
                        v-for="item in stages" 
                        :key="item.id" 
                        v-slot="{ value, handleChange }" 
                        type="checkbox" 
                        :name="'stages'"  
                        :value="item.id">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5"  
                              :checked="isSelected(item.id, 'stages')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'stages')" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                    <div>
                      <p class="text-primary text-base font-medium">Participation</p>
                      <div>
                        <FormField v-for="item in participations" :key="item.id" 
                        v-slot="{ value, handleChange }" type="checkbox" 
                        :name="'participation'"
                        
                        >
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5"  
                              :checked="isSelected(item.id, 'participations')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'participations')" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                    <div>
                      <p class="text-primary text-base font-medium">Attendance Mode</p>
                      <div>
                        <FormField v-for="item in mode" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5"  :checked="isSelected(item.id, 'modes')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'modes')" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                    <div>
                      <p class="text-primary text-base font-medium">Non Financial Support Provided</p>
                      <div>
                        <FormField v-for="item in non_financial_support" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5"  :checked="isSelected(item.id, 'non_financial_support')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'non_financial_support')" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                    <div>
                      <p class="text-primary text-base font-medium">Financial Support Provided</p>
                      <div>
                        <FormField v-for="item in financial_support" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" :name="item.name">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5" :checked="isSelected(item.id, 'financial_support')" 
                              @update:checked="(value) => handleCheckboxChange(value, item.id, 'financial_support')" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.name}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-5">
                  <div class="flex flex-col lg:flex-row justify-between gap-x-6 gap-y-4 lg:gap-y-0">
                    <div class="flex-1">
                      <FormField v-slot="{ componentField }" name="search">
                        <FormItem class="space-y-1">
                          <FormControl >
                            <div class="relative flex border items-center border-primary rounded-md ">
                              <Input v-bind="componentField" id="search" type="text" placeholder="Looking for Programme..." 
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
                    <DropdownMenu>
                      <DropdownMenuTrigger as-child>
                        <Button variant="outline" class="h-11 font-normal text-base shrink-0">
                          Sort by: {{ filterOption }}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent class="w-56">
                        <DropdownMenuLabel>Select Filter</DropdownMenuLabel>
                       
                        <DropdownMenuRadioGroup v-model="filterOption">
                          <DropdownMenuRadioItem class="text-sm font-normal" value="Date Created">
                            Date Created
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem class="text-sm font-normal"  value="Application Deadline">
                            Application Deadline
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem class="text-sm font-normal"  value="Free">
                            Free
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem class="text-sm font-normal"  value="Paid">
                            Paid
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                    
                  <div class="grid lg:grid-cols-3 gap-7">
                    <div v-if="loading" class="flex h-screen justify-center items-center">
                      <LayoutsLoader />
                    </div>
                    <div  v-else-if="programs?.results && programs?.results?.length == 0" class="col-span-3 flex items-center justify-center flex-col gap-2.5">
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
                          Programmes Not found
                        </span>
                    </div>
                    <Card v-else v-for="(item, index) in programs?.results"  :key="index"  class="shadow-lg rounded-lg !px-0 !py-0 overflow-hidden">
                      <CardHeader class="p-0 relative">
                        <img
                          :src="  item?.program_image?.url || item?.program_image_url || placeholderImg"
                          alt="Program Image"
                          class="w-full h-[300px] object-cover rounded-lg"
                        />  
                      </CardHeader>
                      <CardContent class="p-4 space-y-2">
                        <div class=" flex divide-x-2">
                          <!-- <div class=" text-xs text-[#FE7102] font-normal px-1 py-1">
                            {{item?.payment_mode}}
                          </div> -->
                          <div class="text-secondary-body-contrast text-nowrap text-xs py-1">
                            <!-- Startup (Post-revenue) -->
                            {{targetAudience?.find(type => type.id == item?.target_audience)?.label }}
                          </div>
                          <!-- <span class="text-secondary-body-contrast  text-xs px-1 py-1">
                            3 months
                          </span> -->
                        </div>
                        <NuxtLink :to="`/general/programms/${transformHref(item?.title) }/details`" class="text-base font-semibold text-primary">{{item?.title}}</NuxtLink>
                        <div class="text-sm text-[#475467] flex items-center space-x-2">
                          <!-- <span class="inline-block w-4 h-4 bg-blue-500 rounded-full"></span> -->
                          <Building2 class="size-4"/>
                          <span>{{ item?.organization_name}}</span>
                        </div>
                        <div class="flex space-x-2 mt-2">
                          <span
                            v-for="tag in item.sectors?.slice(0,3)"
                            :key="tag"
                            class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
                          >
                          {{sectors?.find(type => type.id == tag).name }}
                          </span>
                        </div>
                        <div class="text-sm flex gap-x-2 items-center text-secondary-body-500 mt-2">
                          <CalendarDays class="size-4" />
                          <span class="font-normal text-nowrap">Application Deadline: {{item?.program_details?.application_deadline}}</span>
                        </div>
                      </CardContent>
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
import { Building2, CalendarDays, FilterIcon, Search } from 'lucide-vue-next';
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
import { targetAudience } from '~/lib/data';
// import { sectors } from '~/lib/data';
import { useProfileStore } from '~/store/profile';
import { transformHref } from '~/lib/utils';
import Dialog from '~/components/ui/dialog/Dialog.vue';

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

const filterOption = ref('Date Created')

const stages = [
  { id: 1, name: 'Start-up (Post-revenue)' },
  { id: 2, name: 'Early Stage' },
  { id: 3, name: 'Growth Stage' },
]

const participations = [
  { id: 1, name: 'Start-up (Post-revenue)' },
  { id: 2, name: 'Early Stage' },
  { id: 3, name: 'Growth Stage' },
]

const mode = [
  { id: 1, name: 'In-Person' },
  { id: 2, name: 'Online' },
  { id: 3, name: 'Hybrid' },
]

const non_financial_support = [
  { id: 1, name: 'Accelerator' },
  { id: 2, name: 'Fellowships' },
  { id: 3, name: 'Technical Assistance & Capacity Building' },
]
const financial_support = [
  { id: 1, name: 'Grant' },
  { id: 2, name: 'Equity' },
  { id: 3, name: 'Debt' },
]
const selectedValues = ref({
  sectors: new Set(),
  organization_types: new Set(),
  stages: new Set(),
  participations: new Set(),
  modes: new Set(),
  non_financial_support: new Set(),
  financial_support: new Set(),
});

let timeout;

const isSelected = (id, type) => {
  return selectedValues.value[type]?.has(id) || false;
};

const handleCheckboxChange = (checked, id, type) => {
  if (checked) {
    selectedValues.value[type]?.add(id);
  } else {
    selectedValues.value[type]?.delete(id);
  }

  clearTimeout(timeout); // Clear the previous timeout
  timeout = setTimeout(() => {
    sendApiRequest();
  }, 1500);
};

const sendApiRequest = async () => {
  const sectorsString = Array.from(selectedValues.value.sectors).join(',');
  const organizationTypesString = Array.from(selectedValues.value.organization_types).join(',');
  const stagesString = Array.from(selectedValues.value.stages).join(',');
  const participationsString = Array.from(selectedValues.value.participations).join(',');
  const modesString = Array.from(selectedValues.value.modes).join(',');
  const nonFinancialSupportString = Array.from(selectedValues.value.non_financial_support).join(',');
  const financialSupportString = Array.from(selectedValues.value.financial_support).join(',');
  
  const response = await profileStore.getProgrammes(
                                                    sectorsString, 
                                                    participationsString, 
                                                    financialSupportString, 
                                                    nonFinancialSupportString, 
                                                    modesString
                                                   );
  // You would typically use fetch or axios here
};

const profileStore = useProfileStore()
const programs = computed(() => {
  return profileStore.programs
})
const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getProgrammes()
})
</script>

<style lang="scss" scoped>

</style>