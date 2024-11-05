<template>
  <div>
    <NuxtLayout name="general" title="ESO Programmes" >
          <div class="container py-4">
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
                <div>
                  <div>
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


                    <DropdownMenu>
                      <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                          Filter by: {{ filterOption }}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent class="w-56">
                        <DropdownMenuLabel>Select Filter</DropdownMenuLabel>
                       
                        <DropdownMenuRadioGroup v-model="filterOption">
                          <DropdownMenuRadioItem value="newest">
                            Newest
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="popular">
                            Popular
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="price-asc">
                            Price: Low to High
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="price-desc">
                            Price: High to Low
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { FilterIcon, Search } from 'lucide-vue-next';
import DropdownMenu from '~/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '~/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuLabel from '~/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuRadioGroup from '~/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue';
import DropdownMenuRadioItem from '~/components/ui/dropdown-menu/DropdownMenuRadioItem.vue';
import DropdownMenuTrigger from '~/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import FormLabel from '~/components/ui/form/FormLabel.vue';
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
const filterOption = ref('newest')
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
</script>

<style lang="scss" scoped>

</style>