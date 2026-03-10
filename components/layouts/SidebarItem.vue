<template>
  <li>
    <template v-if="item.disabled">
      <div
        @click="onDisabledClick"
        class="relative flex items-center gap-3 px-4 py-2 text-base font-medium duration-300 ease-in-out rounded-sm cursor-not-allowed group text-nowrap text-body opacity-50">
        <span v-html="item.icon"></span>
        {{ item.label }}
      </div>
    </template>
    <NuxtLink
      v-else
      :to="item.route"
      class="relative flex items-center gap-3 px-4 py-2 text-base font-medium duration-300 ease-in-out rounded-sm group text-nowrap text-body">
      <span v-html="item.icon"></span>
      {{ item.label }}
    </NuxtLink>
  </li>
</template>

<script setup>
import { toast } from 'vue-sonner';

const props = defineProps(['item', 'index']);
const currentPage = useRoute().name;

const onDisabledClick = () => {
  if (props.item.disabledMessage) {
    toast.error(props.item.disabledMessage);
  }
};
</script>

<style scoped></style>
