<template>
  <div>
    <NuxtLayout name="general" :title="article?.title || 'Loading....'" :loading="loading">
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
      
      <div v-else class="container py-6">
        <LayoutsBreadcrumb
          :breadcrumbs="[
            { text: 'Articles', href: '/' },
            {text: `${article?.title}`}
            ]"></LayoutsBreadcrumb>
        <div class="py-3 h-full">
          <div class=" space-y-4 h-full items-stretch ">
            <div class="w-full ">
              <img :src="article?.image_url" alt="Group Image" class="w-full h-[240px] rounded-lg object-cover">
            </div>
            <div >
              <p>
                {{ article?.content }}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </NuxtLayout>

  </div>
</template>

<script setup>
import { CalendarDays } from 'lucide-vue-next';
import { useProfileStore } from '~/store/profile';
import { useDayjs } from '#dayjs' // not need if you are using auto import
import { reverseTransform } from '~/lib/utils';

const dayjs = useDayjs()

const { article_id } = useRoute().params
const profileStore = useProfileStore()

const article = computed(() => {
  return profileStore.singleArticles
})
const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getSingleArticles(article_id)
})
</script>

<style lang="scss" scoped>

</style>