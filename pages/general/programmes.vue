<template>
  <div>
    <NuxtLayout name="general" title="ESO Programmes" >
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
          <div v-else class="container py-4">
            <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Programmes' }]"></LayoutsBreadcrumb>
            <div class="py-6 h-full">
              <div class="grid h-full items-stretch gap-6 md:grid-cols-[350px_minmax(0,1fr)]">
                <div class="py-4">
                  <h2 class="text-xl  mb-4 text-primary flex gap-1"> 
                    <img src="~/assets/images/icons/filter.svg" class=" items-center"/> 
                  <span>Filter</span>
                  </h2>
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
                </div>
                <div class="space-y-5">
                  <div class="flex justify-between gap-x-6">
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
                    
                  <div class="grid grid-cols-3 gap-7">
                    <Card v-for="(item, index) in programs?.results"  :key="index"  class="shadow-lg rounded-lg px-4 py-0 overflow-hidden">
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
                        <NuxtLink :to="`/general/programms/${item.id}/details`" class="text-base font-semibold text-primary">{{item?.title}}</NuxtLink>
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
                          <span class="font-normal text-nowrap">Application Deadline: {{item?.application_deadline}}</span>
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
const tags = ['Agriculture', 'Education'];

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