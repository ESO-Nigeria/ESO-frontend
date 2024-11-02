<template>
  <div class="flex h-screen overflow-hidden">
    <LayoutsSidebar />
   <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#F9FAFB]">
      <LayoutsNavbar class="" />
      <div
        class="w-full h-full p-4 px-6 pt-10 overflow-auto main max-w-screen-2xl md:p-6 2xl:p-10">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
