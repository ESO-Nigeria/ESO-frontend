<script setup lang="ts">
import AvatarDropDown from './HeaderComponents/AvatarDropDown.vue'
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const user = computed(() => {
  return authStore.user;
})


</script>

<template>
  <header
    class="sticky top-0 z-40 flex w-full bg-white drop-shadow-1 "
  >
    <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div class="flex items-center gap-3 ml-auto">
        <ul class="flex items-center gap-3 ">
          <li class="">
            <div class="w-10 h-10 rounded-full bg-[#EDF2F780] flex items-center justify-center">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.6 9.95798V8.9C5.6 5.36538 8.46538 2.5 12 2.5C15.5346 2.5 18.4 5.36537 18.4 8.9V9.95798C18.4 12.2583 19.0649 14.5096 20.3146 16.4409L21 17.5H3L3.68539 16.4408C4.93512 14.5096 5.6 12.2583 5.6 9.95798Z" stroke="#2E4457" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 21.3887C11.5344 21.9825 12.4656 21.9825 13 21.3887" stroke="#2E4457" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                               
            </div>
          </li>
          <li>
            <div class="w-10 h-10 rounded-full bg-[#EDF2F780] flex items-center justify-center">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16.5L21 21.5L16 16.5ZM18.5 10.25C18.5 15.0825 14.5825 19 9.75 19C4.91751 19 1 15.0825 1 10.25C1 5.41751 4.91751 1.5 9.75 1.5C14.5825 1.5 18.5 5.41751 18.5 10.25Z" stroke="#2E4457" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
            </div>
          </li>
        </ul>
        <AvatarDropDown />
      </div>
    </div>
  </header>
</template>
