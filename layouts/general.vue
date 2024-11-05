<template>
  <div>
    <LayoutsHeaderComponentsHeader />
    <div>
      <div class="bg-primary h-[230px] text-white">
        <div class="container mx-auto flex flex-col justify-center h-full">
          <p class="text-[40px] font-bold">
            {{ layoutCustomProps.title }}
          </p>
        </div>
       
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const layoutCustomProps = useAttrs()

console.log(layoutCustomProps.title) // I am a custom layout


</script>

<style lang="scss" scoped>

</style>