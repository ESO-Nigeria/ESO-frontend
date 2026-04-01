<template>
  <div>
    <NuxtLayout name="general" title="Articles" >
      
          <div class="container py-4">
            <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Publications', href: '#' }, { text: 'Articles' }]">
            </LayoutsBreadcrumb>
            <div class="py-6 h-full">
              <div class="grid h-full items-stretch gap-6 md:grid-cols-[350px_minmax(0,1fr)]">
                <!-- Mobile Filter Dialog -->
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
                              <div class="leading-none text-secondary-body-500 text-sm">
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
                            :name="'organization_types'"
                            :unchecked-value="false"
                            :value="item.id"
                          >
                            <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                              <FormControl>
                                <Checkbox class="size-5" 
                                  :checked="isSelected(item.id, 'organization_types')" 
                                  @update:checked="(value) => handleCheckboxChange(value, item.id, 'organization_types')"
                                />
                              </FormControl>
                              <div class="leading-none text-secondary-body-500 text-sm">
                                <FormLabel class="text-secondary-body-500">{{item.label}}</FormLabel>
                              </div>
                            </FormItem>
                          </FormField>
                        </div>
                      </div>
                    </div>
                  </DialogScrollContent>
                </Dialog>

                <!-- Desktop Sidebar -->
                <div class="py-4 hidden lg:block">
                  <h2 class="text-xl mb-4 text-primary flex gap-1"> 
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
                          :value="item.id"
                        >
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5" 
                                :checked="isSelected(item.id, 'sectors')" 
                                @update:checked="(value) => handleCheckboxChange(value, item.id, 'sectors')"
                              />
                            </FormControl>
                            <div class="leading-none text-secondary-body-500 text-sm">
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
                          type="checkbox" 
                          :name="'organization_types'"
                          :unchecked-value="false"
                          :value="item.id"
                        >
                          <FormItem class="flex flex-row items-center gap-x-2 space-y-0 px-4 py-3">
                            <FormControl>
                              <Checkbox class="size-5" 
                                :checked="isSelected(item.id, 'organization_types')" 
                                @update:checked="(value) => handleCheckboxChange(value, item.id, 'organization_types')"
                              />
                            </FormControl>
                            <div class="leading-none text-secondary-body-500 text-sm">
                              <FormLabel class="text-secondary-body-500">{{item.label}}</FormLabel>
                            </div>
                          </FormItem>
                        </FormField>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Main Content -->
                <div class="space-y-5">
                  <div class="flex flex-col lg:flex-row justify-between gap-x-6 gap-y-4 lg:gap-y-0">
                    <div class="flex-1">
                      <div class="relative flex border items-center border-primary rounded-md">
                        <Input 
                          v-model="searchValue" 
                          id="search" 
                          type="text" 
                          placeholder="Search for Articles..." 
                          class="pl-10 h-11 border-0 ring-0 disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-[#333] text-sm flex-grow"
                          @keyup.enter="searchArticles"
                        />
                        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                          <Search class="size-5 text-muted-foreground" />
                        </span>
                        <Button @click="searchArticles" type="button" size="lg" class="h-11 rounded-none px-6">Search</Button>
                      </div>
                    </div>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger as-child>
                        <Button variant="outline" class="h-11 font-normal text-base shrink-0">
                          Sort by: {{ sortLabel }}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent class="w-56">
                        <DropdownMenuLabel>Select Order</DropdownMenuLabel>
                        <DropdownMenuRadioGroup v-model="sortOption">
                          <DropdownMenuRadioItem class="text-sm font-normal" value="newest">
                            Newest First
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem class="text-sm font-normal" value="oldest">
                            Oldest First
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <!-- Articles Grid -->
                  <div class="grid lg:grid-cols-2 gap-7">
                    <div v-if="loading" class="col-span-full flex h-64 justify-center items-center">
                      <LayoutsLoader />
                    </div>
                    
                    <div v-else-if="!articlesList || articlesList.length === 0" class="col-span-full flex items-center justify-center flex-col gap-4 py-20 border-2 border-dashed rounded-xl border-gray-200 bg-gray-50">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-400">
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="text-lg text-[#3F434A] font-medium">Articles Not Found</span>
                      <Button v-if="searchValue || selectedSectors.size > 0 || selectedOrganizationTypes.size > 0" variant="ghost" @click="clearFilters">Clear filters</Button>
                    </div>

                    <LayoutsArticleCard 
                      v-else 
                      v-for="(item, index) in articlesList" 
                      :key="index" 
                      :article="item" 
                      class="h-full hover:-translate-y-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next';
import { useProfileStore } from '~/store/profile';
import { organization_types } from '~/lib/data';
import Dialog from '~/components/ui/dialog/Dialog.vue';
import DialogTrigger from '~/components/ui/dialog/DialogTrigger.vue';
import DialogScrollContent from '~/components/ui/dialog/DialogScrollContent.vue';
import DialogHeader from '~/components/ui/dialog/DialogHeader.vue';
import DialogTitle from '~/components/ui/dialog/DialogTitle.vue';
import Input from '~/components/ui/input/Input.vue';
import Button from '~/components/ui/button/Button.vue';
import DropdownMenu from '~/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '~/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuLabel from '~/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuRadioGroup from '~/components/ui/dropdown-menu/DropdownMenuRadioGroup.vue';
import DropdownMenuRadioItem from '~/components/ui/dropdown-menu/DropdownMenuRadioItem.vue';
import DropdownMenuTrigger from '~/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import Checkbox from '~/components/ui/checkbox/Checkbox.vue';

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
];

const profileStore = useProfileStore();
const searchValue = ref("");
const sortOption = ref("newest");
const selectedSectors = ref(new Set());
const selectedOrganizationTypes = ref(new Set());

const sortLabel = computed(() => {
  return sortOption.value === 'newest' ? 'Newest First' : 'Oldest First';
});

const articlesData = computed(() => profileStore.articles?.results || []);
const loading = computed(() => profileStore.loadingArticles);

const articlesList = computed(() => {
  let list = [...articlesData.value];
  if (sortOption.value === 'newest') {
    list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else {
    list.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }
  return list;
});

const isSelected = (id, type) => {
  return type === 'sectors' ? selectedSectors.value.has(id) : selectedOrganizationTypes.value.has(id);
};

const handleCheckboxChange = (checked, id, type) => {
  if (checked) {
    if (type === 'sectors') selectedSectors.value.add(id);
    else selectedOrganizationTypes.value.add(id);
  } else {
    if (type === 'sectors') selectedSectors.value.delete(id);
    else selectedOrganizationTypes.value.delete(id);
  }
  
  clearTimeout(timeout);
  timeout = setTimeout(searchArticles, 1000);
};

const searchArticles = async () => {
  const sectorsString = Array.from(selectedSectors.value).join(',');
  const orgTypesString = Array.from(selectedOrganizationTypes.value).join(',');
  await profileStore.getArticles(searchValue.value, sectorsString, orgTypesString);
};

const clearFilters = () => {
  searchValue.value = '';
  selectedSectors.value.clear();
  selectedOrganizationTypes.value.clear();
  searchArticles();
};

// Auto-search after typing with debounce
let timeout;
watch(searchValue, (val) => {
  if (val === '') {
    searchArticles();
  } else {
    clearTimeout(timeout);
    timeout = setTimeout(searchArticles, 1000);
  }
});

onMounted(() => {
  profileStore.getArticles();
});
</script>

<style lang="scss" scoped>
</style>
