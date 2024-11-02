<template>
  <li>
    <NuxtLink
      :to="item.route"
      class="relative flex items-center gap-3 px-4 py-2 text-base font-medium duration-300 ease-in-out rounded-sm group text-nowrap text-body">
      <span v-html="item.icon"></span>
      {{ item.label }}
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps(['item', 'index']);
const currentPage = useRoute().name;
</script>

<style scoped></style>
