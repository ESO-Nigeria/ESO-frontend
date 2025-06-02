<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { X } from 'lucide-vue-next'

const props = defineProps<{
  class?: HTMLAttributes['class'],
  showClose?: boolean
}>()

const showClose = ref(props.showClose || true);


</script>

<template>
  <div
    :class="cn('flex justify-between  gap-y-1.5 text-center sm:text-left', props.class)"
  >
    <slot />
    <!-- {{ showClose }}
    <DialogClose v-show="showClose"
        class=" rounded-full size-5  opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#3F434A"/>
        <path d="M13.0079 6.99057C12.9139 6.89656 12.7864 6.84375 12.6534 6.84375C12.5204 6.84375 12.3929 6.89656 12.2989 6.99057L9.99924 9.29019L7.69961 6.99057C7.60558 6.89656 7.47805 6.84375 7.34509 6.84375C7.21212 6.84375 7.0846 6.89656 6.99057 6.99057C6.89656 7.0846 6.84375 7.21212 6.84375 7.34509C6.84375 7.47805 6.89656 7.60558 6.99057 7.69961L9.29019 9.99924L6.99057 12.2989C6.89656 12.3929 6.84375 12.5204 6.84375 12.6534C6.84375 12.7864 6.89656 12.9139 6.99057 13.0079C7.0846 13.1019 7.21212 13.1547 7.34509 13.1547C7.47805 13.1547 7.60558 13.1019 7.69961 13.0079L9.99924 10.7083L12.2989 13.0079C12.3929 13.1019 12.5204 13.1547 12.6534 13.1547C12.7864 13.1547 12.9139 13.1019 13.0079 13.0079C13.1019 12.9139 13.1547 12.7864 13.1547 12.6534C13.1547 12.5204 13.1019 12.3929 13.0079 12.2989L10.7083 9.99924L13.0079 7.69961C13.1019 7.60558 13.1547 7.47805 13.1547 7.34509C13.1547 7.21212 13.1019 7.0846 13.0079 6.99057V6.99057Z" fill="#3F434A"/>
        </svg>
        <span class="sr-only">Close</span>
      </DialogClose> -->
  </div>
</template>
