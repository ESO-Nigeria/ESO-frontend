<template>
  <div>
    <LayoutsHeaderComponentsHeader />
    <div>
      
      <div v-show="layoutCustomProps.title " class="bg-primary h-[150px] lg:h-[230px] text-white">
        <div  class="container mx-auto flex flex-col justify-center h-full">
          <p class="text-2xl lg:text-[40px] font-bold leading-normal">
            {{layoutCustomProps && layoutCustomProps?.title }}

          </p>
        </div>
      </div>
      <slot />
    </div>

    <LayoutsFooter />
  </div>
</template>

<script setup>
const layoutCustomProps = useAttrs()

</script>

<style lang="scss" scoped>

</style>