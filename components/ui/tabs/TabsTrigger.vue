<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<TabsTriggerProps & { 
  class?: HTMLAttributes['class'] ,
  inner_class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap bg-[#F2F4F7] text-[#667085] rounded-t-xl  px-12 py-4 text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=active]:text-[#088AD8]',
      props.class,
    )"
  >
    <span :class="cn('truncate', props.inner_class)">
      <slot />
    </span>
    <span v-if="$slots.description" class="text-xs text-[#3F434A]">
      <slot name="description"/>
    </span>
    <span v-if="$slots.badge" class="ml-2">
      <slot name="badge" />
    </span>
  </TabsTrigger>
</template>
