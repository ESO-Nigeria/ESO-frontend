<template>
  <div class="min-w-0">
    <div class="h-full p-4 shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img class="block max-w-full h-48 sm:h-36 md:h-36 lg:h-[306px] w-full object-cover object-center" :src="article?.image_url || placeholderImg" alt="blog">
      <div class="mt-4 min-w-0">
      
        <h3 class="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 break-words">{{ article?.title }}</h3>
        <p class="leading-relaxed mb-3 text-secondary-body-regular-contrast line-clamp-3 break-words" v-html="article?.content"></p>
        <div class="flex items-center flex-wrap ">
          <NuxtLink :to="`/general/article/${article?.id}-${transformHref(article?.title || '')}`" class="text-primary inline-flex items-center font-medium md:mb-2 lg:mb-0">
            Read More
          </NuxtLink>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import placeholderImg from '~/assets/images/placeholderImg.png';
import { transformHref } from '~/lib/utils';
const props = defineProps({
  article:{
    type: Object
  },
})
</script>

<style lang="scss" scoped>

</style>