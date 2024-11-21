<template>
  <div class="max-w-4xl  px-6 py-3 bg-white rounded-lg space-y-2">
    <!-- User and Rating Section -->
    <div class="flex flex-col  space-y-1">
      <span class="font-normal text-[#232E3F] text-sm">{{user}}</span>
      <div class="flex items-center">
        <!-- Stars -->
        <star-rating class="" :star-size="16" :padding="3" :rating="rating" :read-only="true" :increment="0.01" :show-rating="false" ></star-rating>

        <!-- Reviewed Time -->
        <span class="ml-2 text-sm text-[#667085]">Reviewed {{dayjs(createdAt).fromNow()}}</span>
      </div>
    </div>
  
    <!-- Review Title -->
    <h3 class="font-normal text-[#232E3F] text-sm">{{reviewTitle}}</h3>
  
    <!-- Review Content -->
    <p class="mt-2 text-[#1C1C1E] text-sm">
      {{reviewContent}}
    </p>
  </div>
  
</template>

<script setup>
import StarRating from 'vue-star-rating';
import { useDayjs } from '#dayjs' // not need if you are using auto import

const dayjs = useDayjs()

const props = defineProps({
  user: String,
  rating: Number,
  reviewTitle: String,
  reviewContent: String,
  createdAt: String
})
</script>

<style lang="scss" scoped>

</style>