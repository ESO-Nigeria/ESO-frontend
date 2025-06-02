<template>
  <header class="py-4 md:py-6 relative">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8 relative">
      <div class="flex items-center justify-between">
        <div class="flex-shrink-0">
          <a href="/" title="" class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
              <img class="w-auto h-20" src="~/assets/images/Main-Logo.png" alt="logo" />
          </a>
        </div>

        <div class="flex lg:hidden">
          <button type="button" class="text-gray-900" @click="expanded = !expanded" :aria-expanded="expanded">
            <span v-if="!expanded" aria-hidden="true">
              <!-- Hamburger Icon -->
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
            <span v-else aria-hidden="true">
              <!-- Close Icon -->
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        <div class="hidden lg:flex lg:ml-14 lg:items-center lg:justify-center lg:space-x-6">
          <NuxtLink to="/general/esos" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> ESOs </NuxtLink>
          <NuxtLink to="/general/programmes" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Programme </NuxtLink>
          <NuxtLink to="/general/events" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Events </NuxtLink>
          <NuxtLink to="/general/about-us" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </NuxtLink>
          <!-- <NuxtLink to="/general/mapping-report" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Mapping Report </NuxtLink> -->

          <!-- Reports Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center space-x-1 focus:outline-none" type="button">
              <span>Reports</span>
              <svg
                class="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div class="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <ul class="flex flex-col">
                <li>
                  <NuxtLink to="/general/mapping-report" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    ESO Mapping Report
                  </NuxtLink>
                </li>
                <li><NuxtLink to="/general/annual-forum" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Annual Forum
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>


          <!-- <NuxtLink to="/general/about-us" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Join the Community </NuxtLink> -->
          <a href="https://docs.google.com/forms/d/1_lE4s9DZz2yhYYBUsCHc3YHrbtIRYbJ8OnzLt_wqpb0/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Join the Community</a>
        </div>

        <div v-if="token" class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-5">
          <NuxtLink to="/dashboard">
            <Button size="lg" title="" class="text-base font-medium">Dashboard</Button>
          </NuxtLink>
        </div>

        <div v-else class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-5">
          <NuxtLink to="/auth/login">
            <Button variant="outline" size="lg" title="" class="text-base font-medium">Login</Button>
          </NuxtLink>
          <NuxtLink to="/auth/register">
            <Button size="lg">Create Account</Button>
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="expanded" class="lg:hidden absolute top-20	 bg-white w-full left-0 z-30 px-5">
        <div class="px-1 py-8">
          <div class="grid gap-y-7">
            <NuxtLink to="/general/esos" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> ESOs </NuxtLink>
          <NuxtLink to="/general/programmes" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Programme </NuxtLink>
          <NuxtLink to="/general/events" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Events </NuxtLink>
          <NuxtLink to="/general/about-us" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About </NuxtLink>
          <NuxtLink to="/general/about-us" title="" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Mapping Report </NuxtLink>
          
          <!-- Reports Dropdown -->
<div class="relative group">
  <button
    class="nav-link flex items-center space-x-1 focus:outline-none"
    type="button"
  >
    <span>Reports</span>
    <svg
      class="w-4 h-4 transform transition-transform duration-200 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Dropdown Menu -->
  <div
    class="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
  >
    <ul class="flex flex-col">
      <li>
        <NuxtLink
          to="/general/mapping-report"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          ESO Mapping Report
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/general/annual-forum"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Annual Forum
        </NuxtLink>
      </li>
      
    </ul>
  </div>
</div>


          <a href="https://docs.google.com/forms/d/1_lE4s9DZz2yhYYBUsCHc3YHrbtIRYbJ8OnzLt_wqpb0/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Join the Community</a>

          <div v-if="token">
            <NuxtLink to="/dashboard">
              <Button size="lg" title="" class="text-base font-medium w-full">Dashboard</Button>
            </NuxtLink>
          </div>
          <div v-else class="flex w-full flex-col gap-y-3">
            <NuxtLink to="/auth/login">
              <Button variant="outline" size="lg" title="" class="w-full text-base font-medium">Login</Button>
            </NuxtLink>
            <NuxtLink to="/auth/register">
              <Button size="lg" class="w-full">Create Account</Button>
            </NuxtLink>
          </div>
        </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const token = ref();
const expanded = ref(false); // Step 1: Add state for mobile nav

onMounted(() => {
  if (process.client) {
    const storedToken = getItem("token");
    if (storedToken && storedToken !== undefined) {
      token.value = JSON.parse(storedToken);
    }
  }
});
</script>

<script>
export default {
  mounted() {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-BXN8PVE3HB";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BXN8PVE3HB');
    `;
    document.head.appendChild(script2);
  },
};
</script>

<style lang="scss" scoped>
/* You can add specific styles for the mobile navigation here if needed */
</style>
