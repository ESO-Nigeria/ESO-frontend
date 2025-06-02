<template>
  <div class="">
    <div class="h-full p-4 shadow-lg border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img class="lg:h-[306px] md:h-36 w-full object-cover object-center" :src="`${article?.image_url}`" alt="blog">
      <div class="mt-4">
      
        <h1 class="title-font text-2xl font-semibold text-[#101828] mb-3">{{ article?.title }}</h1>
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
const props = defineProps({
  article:{
    type: Object
  },
 
})
</script>

<style lang="scss" scoped>

</style>