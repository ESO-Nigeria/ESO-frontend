<script setup lang="ts">
import { useRouter } from '#imports';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';

const target = ref(null);
const dropdownOpen = ref(false);

onClickOutside(target, () => {
  dropdownOpen.value = false;
});

// import { useAuthStore } from '~/store/auth';
const router = useRouter();
const showMenu = ref(false);
const routePathName = useRequestURL().pathname;
const authStore = useAuthStore();
// const profileDetails = authStore.getProfile;
const user = computed(() => {
  return authStore.user;
})


const logUserOut = async () => {
  authStore.logUserOut();
  router.push('/auth/login');
};

const handleShowMenu = () => {
  showMenu.value = !showMenu.value;
};


</script>

<template>
  <div
    class="relative"
    ref="target">
    <NuxtLink
      class="flex items-center gap-2"
      to="#"
      @click.prevent="dropdownOpen = !dropdownOpen">
      <div
        class="flex items-center justify-center w-8 h-8 text-xs font-bold rounded-full bg-primary-100 text-primary">
        S
      </div>
      <span class="hidden text-right lg:block">
        <span class="block text-sm font-medium text-black"
          >Hi, {{user?.first_name}}
        </span>
      </span>
      <svg
        :class="dropdownOpen && 'rotate-180'"
        class="hidden fill-current sm:block"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
          fill="" />
      </svg>
    </NuxtLink>

    <!-- Dropdown Start -->
    <div
      v-show="dropdownOpen"
      class="absolute right-0 mt-4 flex w-52 flex-col bg-white shadow-10 rounded-[10px]">
      <ul class="flex flex-col p-4">
        
        <li>
          <NuxtLink
            to="#"
            class="flex items-center py-2 px-[18px] gap-2 text-sm font-normal duration-300 ease-in-out">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_8673_420090)">
                <path
                  d="M8.5 8C9.29113 8 10.0645 7.76541 10.7223 7.32588C11.3801 6.88635 11.8928 6.26164 12.1955 5.53074C12.4983 4.79983 12.5775 3.99556 12.4231 3.21964C12.2688 2.44372 11.8878 1.73098 11.3284 1.17157C10.769 0.612165 10.0563 0.231202 9.28036 0.0768607C8.50444 -0.0774802 7.70017 0.00173314 6.96927 0.304484C6.23836 0.607234 5.61365 1.11992 5.17412 1.77772C4.7346 2.43552 4.5 3.20888 4.5 4C4.50106 5.06054 4.92283 6.07734 5.67274 6.82726C6.42266 7.57718 7.43946 7.99894 8.5 8ZM8.5 1.33334C9.02742 1.33334 9.54299 1.48973 9.98152 1.78275C10.4201 2.07577 10.7618 2.49224 10.9637 2.97951C11.1655 3.46678 11.2183 4.00296 11.1154 4.52024C11.0125 5.03753 10.7586 5.51268 10.3856 5.88562C10.0127 6.25856 9.53752 6.51254 9.02024 6.61543C8.50296 6.71832 7.96678 6.66551 7.47951 6.46368C6.99224 6.26185 6.57577 5.92005 6.28275 5.48152C5.98973 5.04299 5.83333 4.52742 5.83333 4C5.83333 3.29276 6.11428 2.61448 6.61438 2.11438C7.11448 1.61429 7.79276 1.33334 8.5 1.33334Z"
                  fill="#374957" />
                <path
                  d="M8.5 9.33398C6.90924 9.33575 5.38414 9.96846 4.25931 11.0933C3.13447 12.2181 2.50176 13.7432 2.5 15.334C2.5 15.5108 2.57024 15.6804 2.69526 15.8054C2.82029 15.9304 2.98986 16.0007 3.16667 16.0007C3.34348 16.0007 3.51305 15.9304 3.63807 15.8054C3.7631 15.6804 3.83333 15.5108 3.83333 15.334C3.83333 14.0963 4.325 12.9093 5.20017 12.0342C6.07534 11.159 7.26232 10.6673 8.5 10.6673C9.73768 10.6673 10.9247 11.159 11.7998 12.0342C12.675 12.9093 13.1667 14.0963 13.1667 15.334C13.1667 15.5108 13.2369 15.6804 13.3619 15.8054C13.487 15.9304 13.6565 16.0007 13.8333 16.0007C14.0101 16.0007 14.1797 15.9304 14.3047 15.8054C14.4298 15.6804 14.5 15.5108 14.5 15.334C14.4982 13.7432 13.8655 12.2181 12.7407 11.0933C11.6159 9.96846 10.0908 9.33575 8.5 9.33398Z"
                  fill="#374957" />
              </g>
              <defs>
                <clipPath id="clip0_8673_420090">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>

            Profile
          </NuxtLink>
        </li>
        <li
        @click="logUserOut"
         class="flex items-center py-2 px-[18px] gap-2 text-sm font-normal duration-300 ease-in-out cursor-pointer">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_8673_420093)">
              <path
                d="M15.7176 6.11396L13.1316 3.52796C13.0058 3.40652 12.8374 3.33933 12.6626 3.34085C12.4878 3.34236 12.3206 3.41248 12.197 3.53608C12.0734 3.65969 12.0033 3.8269 12.0018 4.00169C12.0002 4.17649 12.0674 4.34489 12.1889 4.47063L14.7749 7.05663C14.8517 7.13498 14.9189 7.22227 14.9749 7.31663C14.9649 7.31663 14.9569 7.3113 14.9469 7.3113L4.49089 7.33263C4.31407 7.33263 4.14451 7.40287 4.01948 7.52789C3.89446 7.65291 3.82422 7.82248 3.82422 7.99929C3.82422 8.17611 3.89446 8.34567 4.01948 8.4707C4.14451 8.59572 4.31407 8.66596 4.49089 8.66596L14.9429 8.64463C14.9616 8.64463 14.9769 8.63529 14.9949 8.63396C14.9358 8.74673 14.8608 8.85045 14.7722 8.94196L12.1862 11.528C12.1225 11.5895 12.0718 11.663 12.0368 11.7444C12.0019 11.8257 11.9835 11.9132 11.9827 12.0017C11.9819 12.0902 11.9988 12.178 12.0323 12.2599C12.0659 12.3419 12.1154 12.4163 12.178 12.4789C12.2406 12.5415 12.315 12.591 12.3969 12.6245C12.4788 12.658 12.5666 12.6749 12.6552 12.6741C12.7437 12.6734 12.8312 12.655 12.9125 12.62C12.9938 12.5851 13.0674 12.5343 13.1289 12.4706L15.7149 9.88463C16.2148 9.38455 16.4956 8.7064 16.4956 7.99929C16.4956 7.29219 16.2148 6.61404 15.7149 6.11396H15.7176Z"
                fill="#374957" />
              <path
                d="M5.16667 14.6667H3.83333C3.3029 14.6667 2.79419 14.456 2.41912 14.0809C2.04405 13.7058 1.83333 13.1971 1.83333 12.6667V3.33333C1.83333 2.8029 2.04405 2.29419 2.41912 1.91912C2.79419 1.54405 3.3029 1.33333 3.83333 1.33333H5.16667C5.34348 1.33333 5.51305 1.2631 5.63807 1.13807C5.7631 1.01305 5.83333 0.843478 5.83333 0.666667C5.83333 0.489856 5.7631 0.320286 5.63807 0.195262C5.51305 0.0702379 5.34348 0 5.16667 0L3.83333 0C2.9496 0.00105857 2.10237 0.352588 1.47748 0.97748C0.852588 1.60237 0.501059 2.4496 0.5 3.33333L0.5 12.6667C0.501059 13.5504 0.852588 14.3976 1.47748 15.0225C2.10237 15.6474 2.9496 15.9989 3.83333 16H5.16667C5.34348 16 5.51305 15.9298 5.63807 15.8047C5.7631 15.6797 5.83333 15.5101 5.83333 15.3333C5.83333 15.1565 5.7631 14.987 5.63807 14.8619C5.51305 14.7369 5.34348 14.6667 5.16667 14.6667Z"
                fill="#374957" />
            </g>
            <defs>
              <clipPath id="clip0_8673_420093">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>

          Logout
        </li>
      </ul>
    </div>
    <!-- Dropdown End -->
  </div>
</template>
