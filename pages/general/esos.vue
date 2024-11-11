<template>
  <div>
    <NuxtLayout name="general" title="Enterprise Support Organisations (ESOs)" >
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
          <div v-else class="container py-4">
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
                        <p class="text-primary text-base font-medium">Organization Type</p>
                        <div>
                          <FormField v-for="item in organization_types" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" 
                          :name="item.label">
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
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
                <div class="py-4 hidden lg:block">
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
                      <p class="text-primary text-base font-medium">Organization Type</p>
                      <div>
                        <FormField v-for="item in organization_types" :key="item.id" v-slot="{ value, handleChange }" type="checkbox" 
                        :name="item.label">
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5" :checked="value" @update:checked="handleChange" />
                            </FormControl>
                            <div class=" leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.label}}</FormLabel>
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
                    <Card v-for="(item, index) in ESOs?.results" :key="index"  class="shadow-lg rounded-lg sm:px-3 py-0 overflow-hidden">
                      <NuxtLink :to="`/general/eso/${item?.id}/details`">
                      <CardHeader class="p-0 relative">
                        <!-- assets\images\placeholderImg.png C:\Users\HomePC\Documents\work\eso\assets\images\placeholderImg.png-->
                        <img
                           :src="item?.logo_url || placeholderImg"
                          alt="ESOs Logo"
                          class="w-full h-[115px] object-cover rounded-lg"
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
const filterOption = ref('Date Created')
const tags = ['Agriculture', 'Education'];


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