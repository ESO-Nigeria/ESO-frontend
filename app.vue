<template>
  <div class="antialised">
    <NuxtPage />
    <Toaster richColors position="top-right" />
  </div>
</template>

<script setup>
import { Toaster } from 'vue-sonner'
</script>

<style lang="scss">
@use '~/assets/css/tailwind.css';
</style>
