<template>
  <div class="">
    <div class="h-full p-4 shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img class="lg:h-[306px] md:h-36 w-full object-cover object-center" :src="article?.image_url || placeholderImg" alt="blog">
      <div class="mt-4">
      
        <h3 class="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">{{ article?.title }}</h3>
        <p class="leading-relaxed mb-3 text-secondary-body-regular-contrast line-clamp-3" v-html="article?.content"></p>
        <div class="flex items-center flex-wrap ">
          <NuxtLink :to="`/general/article/${article?.id}`" class="text-primary inline-flex items-center font-medium md:mb-2 lg:mb-0">
            Read More
          </NuxtLink>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import placeholderImg from '~/assets/images/placeholderImg.png';
const props = defineProps({
  article:{
    type: Object
  },
})
</script>

<style lang="scss" scoped>

</style>