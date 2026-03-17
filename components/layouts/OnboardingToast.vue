<template>
  <div class="onboarding-toast flex items-center gap-4 bg-white border border-primary-200 p-4 rounded-xl shadow-lg max-w-md w-full animate-in fade-in slide-in-from-right-8 duration-300">
    <div class="flex-shrink-0 size-10 bg-primary-100 rounded-full flex items-center justify-center">
      <RocketIcon class="size-6 text-primary-600" />
    </div>
    
    <div class="flex-grow min-w-0">
      <h4 class="text-sm font-semibold text-gray-900 truncate">Complete your profile</h4>
      <p class="text-xs text-gray-600 mt-0.5 line-clamp-2">
        You're almost there! Complete your organization profile to get verified and start adding programmes.
      </p>
      <div class="mt-3 flex items-center gap-3">
        <NuxtLink 
          to="/dashboard/onboarding" 
          class="text-xs font-medium text-primary-700 hover:text-primary-800 transition-colors"
          @click="$emit('close')"
        >
          Complete Now
        </NuxtLink>
        <button 
          class="text-xs font-medium text-gray-400 hover:text-gray-500 transition-colors"
          @click="$emit('close')"
        >
          Maybe later
        </button>
      </div>
    </div>

    <button 
      @click="$emit('close')"
      class="flex-shrink-0 size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
    >
      <XIcon class="size-5" />
    </button>
  </div>
</template>

<script setup>
import { RocketIcon, XIcon } from 'lucide-vue-next'

defineEmits(['close'])
</script>

<style scoped>
.onboarding-toast {
  pointer-events: auto;
}
</style>
