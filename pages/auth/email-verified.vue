<template>
  <div>
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center mx-auto">
          <NuxtLink to="/">
            <img class="w-auto " src="~/assets/images/Main-Logo.png" alt="logo">
          </NuxtLink>
          </div>
    </div>
    <div v-if="loading">
      Loading ...
    </div>
    <form v-else class="flex pr-4 pl-4 sm:pr-6 sm:pl-6 gap-4 flex-col mt-8">
      <div class="flex flex-col gap-2">
        <h6 class="text-secondary-header3 text-3xl font-bold">Email Verification Successful</h6>
        <p class="text-primary-success font-medium text-lg">Success!</p>
        <p class=" text-secondary-body-300 font-medium text-lg ">Your email has been successfully verified.</p>
      </div>
   
         
        <NuxtLink to="/auth/login" class="mt-2 border py-3 px-5 bg-primary  rounded-md text-white h-11 text-base  text-center font-medium "> Continue to Login </NuxtLink>

    </form>
     
    </NuxtLayout>
  </div>
</template>

<script setup>
import {Eye} from 'lucide-vue-next'
import { ArrowLeft } from 'lucide-vue-next';
 
const {token, uid} = useRoute().query
const loading = ref("")
import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore()

onMounted(async () => {
  loading.value = true
  try {
    loading.value = true;
  const response =  await authStore.email_verified( {token, uid} );
  if (response.data && response?.data?.data?.auth_token) {
    loading.value = false;
   
    } else {
      loading.value = false;
      // alert(response.data.message);
      }
    loading.value = false
  }catch(error) {
    loading.value = false
    console.log('error', error)
  }
})
</script>

<style lang="scss" scoped>

</style>