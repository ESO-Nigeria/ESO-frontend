<template>
  <div class="flex gap-1.5 flex-col ">
    <h3 class="text-[22px] text-header5 font-medium ">
    {{title}}
    </h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  
})
</script>

<style lang="scss" scoped>

</style>