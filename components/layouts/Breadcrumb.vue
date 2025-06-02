<template>
  <div v-if="loading" class="skeleton-text w-2/6 my-4 h-7 rounded-md"></div>
  <nav v-else aria-label="Breadcrumb" class="flex px-2">
    <ol class="flex items-center space-x-2">
      <li class="inline-flex items-center">
        <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 18.3332V9.99984H12.5V18.3332M2.5 7.49984L10 1.6665L17.5 7.49984V16.6665C17.5 17.1085 17.3244 17.5325 17.0118 17.845C16.6993 18.1576 16.2754 18.3332 15.8333 18.3332H4.16667C3.72464 18.3332 3.30072 18.1576 2.98816 17.845C2.67559 17.5325 2.5 17.1085 2.5 16.6665V7.49984Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
      </li>
      <li v-for="(item, index) in breadcrumbs" :key="index" class="inline-flex items-center capitalize">
        <div class="flex items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <NuxtLink v-if="item.href" :to="item.href" :class="{ 'text-[#088AD8]': index === breadcrumbs.length - 1 }" class="ml-1 md:ml-2 text-sm capitalize font-normal text-[#667085]">
            {{ item.text }}
          </NuxtLink>
          <span v-else :class="{ 'text-[#088AD8]': index === breadcrumbs.length - 1 }" class="ml-1 md:ml-2 text-sm font-normal text-[#667085]">
            {{ item.text }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script >
export default {
  name: "Breadcrumb"
}
</script>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }, 
  loading:{
    type:Boolean,
    default:false
  }
})
const currentPage = useRoute().name

</script>

<style scoped>

</style>