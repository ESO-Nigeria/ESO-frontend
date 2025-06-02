<template>
  <div class="flex gap-1.5 flex-col ">
    <h1 v-if="!loading" class="text-[28px] text-header5 font-semibold ">
    {{title}} 
    </h1>
    <p v-if="!loading" class="text-header text-base font-normal">
      {{subTitle}}
    </p>
      <!-- Skeleton loader for the text -->
      <div v-if="loading" class="skeleton-text w-2/6 my-4 h-7 rounded-md"></div>
      <!-- <div v-if="loading" class="skeleton-text w-16 h-3 mt-2 rounded-md"></div> -->
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle:{
    type: String
  },
  loading:{
    type:Boolean,
    default:false
  }
})
</script>

<style lang="scss" scoped>

</style>