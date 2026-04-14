<template>
  <div>
    <NuxtLayout name="general" :title="article?.title || 'Loading....'" :loading="loading">
      
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
      
      <div v-else class="container py-6">
        
        
        <div class="grid grid-cols-12 gap-4 ">
          
          <!-- Main Article -->
          <div class="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8">
            <LayoutsBreadcrumb
              :breadcrumbs="[
                { text: 'Articles', href: '/' },
                { text: `${article?.title}` }
              ]"
              className="my-4"
            />
            <div class="py-3 h-full">
              <div class="space-y-4 h-full items-stretch">
                
                <div class="w-full">
                  <img 
                    :src="article?.image_url" 
                    alt="Group Image" 
                    class="w-full h-[240px] rounded-lg object-cover object-center"
                  >
                </div>

                <div>
                  <p v-html="article?.content"></p>
                </div>

              </div>
            </div>
          </div>

          <!-- RELATED ARTICLES (FIXED) -->
          <div class="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4">
            <div class="grid grid-cols-1 gap-5">
              <p class="text-primary text-xl font-medium flex items-center gap-2">
                <CalendarDays class="w-5 h-5" />
                Related Articles
              </p>
              <div v-if="!articlesList.length" class="text-center py-10">
                No related articles
              </div>

              <LayoutsArticleCard 
                v-else 
                v-for="(item, index) in articlesList.slice(0, 5)" 
                :key="index" 
                :article="item" 
                class="h-full hover:-translate-y-1 transition-transform duration-300"
              />

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
import { useDayjs } from '#dayjs';
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

const articlesList = computed(() => {
  const list = profileStore.articles?.results || []

  // remove current article
  return list.filter(item => item.id !== article.value?.id)
})

onMounted(() => {
  profileStore.getSingleArticles(article_id)
  profileStore.getArticles() 
})
</script>

<style lang="scss" scoped>
</style>