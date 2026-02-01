<template>
  <div>
    <NuxtLayout name="general" :title="report?.title || 'Loading...'" :loading="loading">
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>

      <div v-else class="container py-4">
        <LayoutsBreadcrumb :breadcrumbs="[
          { text: 'Reports', href: '/general/reports' },
          { text: report?.title }
        ]"></LayoutsBreadcrumb>
        
        <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 md:flex md:gap-6">
          <!-- Left Section with Image -->
          <div class="md:w-1/2 mb-4 md:mb-0">
             <img :src="report?.thumbnail || placeholderImg" :alt="report?.title" class="w-full h-auto rounded-lg object-contain">
          </div>
          
          <!-- Right Section with Content -->
          <div class="md:w-1/2 flex flex-col justify-between">
            <!-- Header Section -->
            <div class="mb-4 text-justify">
              <h2 class="text-4xl font-bold text-left text-primary uppercase leading-snug">{{ report?.title }}</h2>
              <div class="text-base text-[#4F5865] mt-2 report-content" v-html="report?.content"></div>
            </div>

            <div class="bg-customGreen rounded-[25px] px-4 sm:px-6 lg:px-8">
              <div class="container pt-4 pb-4 mx-auto px-4">
                <!-- Download Section -->
                <div class="grid grid-cols-1 lg:grid-cols-1 gap-4 items-center">
                  <div>
                    <h3 class="text-3xl leading-snug my-3 text-[#fff]">
                      Download the Report Now
                    </h3>
                    <a :href="report?.report_url" target="_blank" v-if="report?.report_url">
                      <Button variant="variant" size="lg" class="bg-customLightGreen mb-2 text-[#fff] text-base font-normal">
                        Download Now
                      </Button>
                    </a>
                  </div>
                </div>
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
import placeholderImg from '~/assets/images/placeholderImg.png';

const { report_id } = useRoute().params
const profileStore = useProfileStore()

const report = computed(() => profileStore.report)
const loading = computed(() => profileStore.loadingReports)

onMounted(() => {
  profileStore.getSingleReport(report_id)
})
</script>

<style lang="scss" scoped>
.report-content {
  :deep(p) {
    margin-bottom: 1rem;
    text-align: justify;
  }
  :deep(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
   :deep(li) {
    margin-bottom: 0.5rem;
  }
}
</style>
