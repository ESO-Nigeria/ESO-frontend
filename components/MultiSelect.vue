<script setup>
import { computed } from 'vue'
// import { Popover, PopoverContent, PopoverTrigger } from 'radix-vue'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDownIcon, EyeIcon } from 'lucide-vue-next'

const props = defineProps({
    modelValue: {
        type: Array,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        default: 'Select Options'
    },
    placeholder: {
        type: String,
        default: 'Select options...'
    }
})

const emit = defineEmits(['update:modelValue'])

const isAllSelected = computed(() => {
    return props.modelValue.length === props.options.length
})

const toggleSelectAll = () => {
    if (isAllSelected.value) {
        emit('update:modelValue', [])
    } else {
        emit('update:modelValue', props.options.map(option => option.id))
    }
}

const toggleOption = (id) => {
    const newValue = [...props.modelValue]
    const index = newValue.indexOf(id)
    if (index === -1) {
        newValue.push(id)
    } else {
        newValue.splice(index, 1)
    }
    emit('update:modelValue', newValue)
}
</script>

<template>
    <div class="w-full space-y-1">
        <p class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#3F434A] text-sm font-medium">{{ title }}</p>

        <Popover v-slot="{ open }" class="relative flex w-full">
            <PopoverTrigger as-child>
                <Button variant="outline" role="combobox" :aria-expanded="open"
                    class="flex w-full bg-background px-3 py-2 ring-offset-background justify-between file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-11 border-0 ring-[#D0D5DD] focus:bg-[#F5F5F5] ring-[1.5px] rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <div class="flex items-center gap-2 truncate">
                        <div v-if="modelValue.length > 0"
                            class="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                            Selected ({{ modelValue.length }})
                            <EyeIcon class="h-4 w-4" />
                        </div>
                        <span v-else class="text-gray-500">{{ placeholder }}</span>
                    </div>
                    <ChevronDownIcon class="h-4 w-4 opacity-50" :class="{ 'transform rotate-180': open }" />
                </Button>
            </PopoverTrigger>
            <PopoverContent class="p-0 bg-white rounded-md shadow-lg w-80" align="start">
                <Command class="w-full">
                    <div class="max-h-[300px] overflow-auto p-1">
                        <div class="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md px-3"
                            @click="toggleSelectAll">
                            <Checkbox :checked="isAllSelected" />
                            <span class="text-sm">Select All</span>
                        </div>
                        <CommandGroup>
                            <CommandItem v-for="option in options" :key="option.id"
                                @select="() => toggleOption(option.id)">
                                <div class="flex items-center space-x-2 py-1">
                                    <Checkbox :checked="modelValue.includes(option.id)" />
                                    <span class="text-sm">{{ option.label }}</span>
                                </div>
                            </CommandItem>
                        </CommandGroup>
                    </div>
                </Command>
            </PopoverContent>
        </Popover>
    </div>
</template>