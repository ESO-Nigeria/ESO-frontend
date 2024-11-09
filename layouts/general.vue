<template>
  <div>
    <LayoutsHeaderComponentsHeader />
    <div>
      
      <div v-show="layoutCustomProps.title " class="bg-primary h-[230px] text-white">
        <div  class="container mx-auto flex flex-col justify-center h-full">
          <p class="text-[40px] font-bold">
            {{layoutCustomProps && layoutCustomProps?.title }}

          </p>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const layoutCustomProps = useAttrs()

console.log(layoutCustomProps.title, layoutCustomProps.loading)

</script>

<style lang="scss" scoped>

</style>