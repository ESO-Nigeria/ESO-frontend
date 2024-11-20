<template>
  <div>
    <NuxtLayout name="general" title="Events" subtitle="programes title">
      <div class="container py-4">
            <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'Events' }]"></LayoutsBreadcrumb>
            <div class="py-6 h-full">
              
              <div class="grid h-full items-stretch gap-6 ">
               
                <div class="space-y-5">
                  <div class="flex flex-col lg:flex-row justify-between gap-x-6 gap-y-4 lg:gap-y-0 w-full lg:w-1/2">
                    <div class="flex-1">
                      <FormField v-slot="{ componentField }" name="search">
                        <FormItem class="space-y-1">
                          <FormControl >
                            <div class="relative flex border items-center border-primary rounded-md ">
                              <Input v-model="searchValue" v-bind="componentField" id="search" type="text" placeholder="Search for Events" 
                              class="pl-10 h-11 border-0  ring-0 disabled:bg-[#EAECF0] focus:bg-[#F5F5F5]   rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-[#333] text-sm"
                              />
                              <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                                <Search class="size-5 text-muted-foreground" />
                              </span>
                              <Button @click="searchEvents" type="button" size="lg" class="h-11 rounded-none">Search</Button>
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
                          <DropdownMenuRadioItem class="text-sm font-normal" value="created_at">
                            Date Created
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem class="text-sm font-normal"  value="Application Deadline">
                            Application Deadline
                          </DropdownMenuRadioItem>
                         
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div class="grid lg:grid-cols-2 sm:grid-cols-1  gap-7">
                    <div v-if="loading" class="flex h-screen justify-center items-center col-span-full">
                      <LayoutsLoader />
                    </div>
                    <LayoutsEventsCard v-else :event="item" v-for="(item, index) in events?.results" :key="index" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';
import placeholderImg from '~/assets/images/placeholderImg.png'; // Import the placeholder image

const filterOption = ref('Date Created')

const profileStore = useProfileStore()
const searchValue = ref("")
const singleUser = computed(() => {
  return profileStore.singleESO
})
const events = computed(() => {
  return profileStore.events
})
const loading = computed(() => {
  return profileStore.loading
})
const searchEvents = () => {
  profileStore.getEvents(searchValue.value)
}
watch(
  () => searchValue.value,
  (newValue) => {
    if(newValue == ''){
      profileStore.getEvents()
    }
  }
);
onMounted(() => {
  profileStore.getEvents()
  // profileStore.

})
</script>

<style lang="scss" scoped>

</style>