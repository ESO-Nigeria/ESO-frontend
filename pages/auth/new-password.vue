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
      <form @submit="onSubmit" class="flex pr-4 pl-4 sm:pr-6 sm:pl-6 gap-4 flex-col  mt-8">
        <div class="flex flex-col gap-2">
          <h6 class="text-secondary-header3 text-3xl font-bold">Set a new password</h6>
          <p class=" text-secondary-body-300 font-medium text-lg ">Create a secure password to protect your account. </p>
        </div>


        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input :type="isPasswordVisible ? 'text' : 'password'"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <button type="button" @click="togglePasswordVisibility"  class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirm_password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Confirm Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input :type="isPasswordVisible ? 'text' : 'password'"
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <button @click="togglePasswordVisibility" type="button" class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
        <!-- </div> -->

        <Button :disabled="loading" class="text-base py-3 h-11 mt-2">Reset Password

          <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
        </Button>

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
const router = useRouter()

const isPasswordVisible = ref(false);

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}
const loading  = ref(false);
 
const {token, uid} = useRoute().query

const onSubmit = form.handleSubmit(async(values) => {
  const  { email, password } = values;
 const body = {
  "uid": uid,
  "token": token,
  "new_password": password
}

  try {
    loading.value = true;
  const response =  await authStore.change_password( body );
  if (response.data &&  response?.data?.data?.status == 204) {
    loading.value = false;
    // redirect to dashboard
    router.push('/auth/reset-successful');

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