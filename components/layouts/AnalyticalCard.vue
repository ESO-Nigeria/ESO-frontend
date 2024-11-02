<template>
  <div class="flex items-center gap-4">
    <!-- Icon Container -->
    <div
      class="h-10 w-[48.92px] flex items-center justify-center rounded-[15px] p-2"
      :style="{ backgroundColor: computedBgColor }"
    >
      <!-- Icon Slot -->
      <slot name="icon">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM5 2L19 2C19.5988 2.00118 20.1835 2.18151 20.679 2.5178C21.1744 2.85409 21.5579 3.33095 21.78 3.887L14.122 11.546C13.5584 12.1073 12.7954 12.4225 12 12.4225C11.2046 12.4225 10.4416 12.1073 9.878 11.546L2.22 3.887C2.44215 3.33095 2.82561 2.85409 3.32105 2.5178C3.81648 2.18151 4.40121 2.00118 5 2ZM19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17L2 6.5L8.464 12.96C9.40263 13.8963 10.6743 14.422 12 14.422C13.3257 14.422 14.5974 13.8963 15.536 12.96L22 6.5V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20Z"
            :fill="iconColor"
          />
        </svg>
      </slot>
    </div>
    <!-- Text Content -->
    <div class="space-y-1 flex-1">
      <h3 class="text-[#667085] font-normal text-base">{{ title }}</h3>
      <div class="flex justify-between flex-1">
        <p class="text-[#3F434A] font-medium text-base">{{ value }}</p>
        <!-- Percentage and Arrow Indicator -->
        <div v-show="percentage" class="flex items-center space-x-1"> 
          
          <svg  v-if="percentage >= 5" width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.651422 4.51928C0.867474 4.75656 1.23497 4.77376 1.47225 4.55771L3.18176 3.00112L3.18176 11.5193C3.18176 11.8402 3.44191 12.1004 3.76281 12.1004C4.08372 12.1004 4.34386 11.8402 4.34386 11.5193V3.00112L6.05338 4.55771C6.29065 4.77376 6.65815 4.75656 6.8742 4.51928C7.09025 4.282 7.07305 3.9145 6.83577 3.69845L3.76281 0.900391L0.689855 3.69845C0.452577 3.9145 0.43537 4.282 0.651422 4.51928Z" fill="#49C96D"/>
            </svg>
            
          <svg v-else width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.34858 8.48072C7.13253 8.24344 6.76503 8.22624 6.52775 8.44229L4.81824 9.99888V1.48066C4.81824 1.15975 4.55809 0.899609 4.23719 0.899609C3.91628 0.899609 3.65614 1.15975 3.65614 1.48066L3.65614 9.99888L1.94662 8.44229C1.70935 8.22624 1.34185 8.24344 1.1258 8.48072C0.909746 8.718 0.926953 9.0855 1.16423 9.30155L4.23719 12.0996L7.31014 9.30155C7.54742 9.0855 7.56463 8.718 7.34858 8.48072Z" fill="#FD7972"/>
            </svg>
            
          <p class="text-[15px]" :class="percentageColorClass">{{ percentage }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

// Define props for the component
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  percentage: {
    type: Number,  
  },
  bgColor: {
    type: String,
    default: '#FF965D' // Hex color
  },
  iconColor: {
    type: String,
    default: '#DC6803'
  },
  opacity: {
    type: Number,
    default: 0.1 // Default opacity
  }
})

// Convert hex to rgba for background color with opacity
const hexToRgba = (hex, opacity) => {
  const rgb = hex.replace('#', '').match(/.{1,2}/g).map(x => parseInt(x, 16));
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
}

// Computed property to generate background color with opacity
const computedBgColor = computed(() => hexToRgba(props.bgColor, props.opacity))

// Computed property to determine the percentage text color
const percentageColorClass = computed(() => {
  return props.percentage >= 5 ? 'text-green' : 'text-red';
})

</script>

<style scoped>
/* You can define any custom styles for the component here */
</style>
