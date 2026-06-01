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
              <div class="flex items-center justify-between">
                <p class="text-primary text-xl font-medium flex items-center gap-2">
                  <CalendarDays class="w-5 h-5" />
                  Related Articles
                </p>
                <NuxtLink :to="`/general/articles`" class="text-primary inline-flex items-center font-medium md:mb-2 lg:mb-0">
                  See all
                </NuxtLink>
              </div>
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
import { reverseTransform, getPlainText, makeAbsoluteUrl } from '~/lib/utils';
import { useHead, useRuntimeConfig } from '#imports';

const dayjs = useDayjs()
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl?.replace(/\/$/, '') || 'http://localhost:3000'

const { article_id } = route.params
const profileStore = useProfileStore()

const article = computed(() => {
  return profileStore.singleArticles
})

const loading = computed(() => {
  return profileStore.loading
})

const pageUrl = computed(() => `${siteUrl}${route.path}`)
const pageDescription = computed(() => {
  const raw = article.value?.content || ''
  return (article.value?.description || getPlainText(raw) || 'Read this article on ESO').slice(0, 160)
})
const pageImage = computed(() => {
  return makeAbsoluteUrl(article.value?.image_url, siteUrl)
})

useHead(() => ({
  title: article.value?.title
    ? `${article.value.title} | Enterprise Support Organisations (ESO) Collaborative`
    : 'Enterprise Support Organisations (ESO) Collaborative',
  meta: [
    { name: 'description', content: pageDescription.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: article.value?.title || 'Enterprise Support Organisations (ESO) Collaborative' },
    { property: 'og:description', content: pageDescription.value },
    { property: 'og:url', content: pageUrl.value },
    ...(pageImage.value ? [{ property: 'og:image', content: pageImage.value }] : []),
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: article.value?.title || 'Enterprise Support Organisations (ESO) Collaborative' },
    { name: 'twitter:description', content: pageDescription.value },
    ...(pageImage.value ? [{ name: 'twitter:image', content: pageImage.value }] : [])
  ]
}))

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