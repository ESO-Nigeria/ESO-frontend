<template>
  <div>
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center mx-auto">
          <NuxtLink to="/">
            <img class="w-auto " src="~/assets/images/icons/logo.svg" alt="logo">
          </NuxtLink>
          
        </div>
      </div>
      <form @submit="onSubmit" class="flex gap-4 flex-col mt-8">
        <div class="flex flex-col gap-2">
          <h6 class="text-secondary-header3 text-3xl font-bold">Welcome back,</h6>
          <p class=" text-secondary-body-300 font-medium text-lg ">Log in to continue</p>
        </div>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Email Address</FormLabel>
            <FormControl>
              <Input type="email"
                class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                placeholder="Enter email address" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input  :type="isPasswordVisible ? 'text' : 'password'"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <button type="button" @click="togglePasswordVisibility" class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
              </div>
            </FormControl>
          </FormItem>
        </FormField>

        <!-- </div> -->
        <NuxtLink to="/auth/forgot" class="">
        <p class="inline-flex  items-center gap-2 text-base font-medium text-secondary-body-600">Forgot Your Password
         <img src="~/assets/images/icons/arrow.svg" /> </p></NuxtLink>
        <Button :disabled="loading" class="text-base py-3 h-11 mt-2">Login 
          <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
        </Button>
        <p class="mt-2 text-base font-medium text-secondary-body-600">Do not have an Account?  <NuxtLink
            to="/auth/register" class="inline-flex items-center gap-2 "><span class="underline ">Sign Up</span> <img
              src="~/assets/images/icons/arrow.svg" /> </NuxtLink></p>

      </form>

    </NuxtLayout>
  </div>
</template>

<script setup>
import { Eye, EyeOff, LoaderCircle } from 'lucide-vue-next'
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore()
const form = useForm({
  // validationSchema: formSchema,
});
const isPasswordVisible = ref(false);

const router = useRouter()
const loading  = ref(false);

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}
const onSubmit = form.handleSubmit(async(values) => {
  const  { email, password } = values;
 
  try {
    loading.value = true;
  const response =  await authStore.login( {email, password} );
  if (response.data && response?.data?.data?.data?.auth_token) {
    loading.value = false;
    // redirect to dashboard
    router.push('/dashboard');

    } else {
      loading.value = false;
      // alert(response.data.message);
      }
    loading.value = false
  }catch(error) {
    loading.value = false
    console.log('error', error)
  }
});
</script>

<style lang="scss" scoped></style>