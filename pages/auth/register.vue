<template>
  <div>
    <NuxtLayout name="auth">
      <div class="">
        <div class="flex justify-center mx-auto">
          <img class="w-auto " src="~/assets/images/icons/logo.svg" alt="logo">
        </div>
      </div>
      <form  @submit="onSubmit"  class="flex gap-4 flex-col mt-8">
        <div class="flex flex-col gap-2">
          <h6 class="text-secondary-header3 text-3xl font-bold">Join the Community</h6>
          <p class=" text-secondary-body-300 font-medium text-lg ">Join to discover and apply for impactful programs
            designed to support your business growth.</p>
        </div>

        <FormField v-slot="{ componentField }" name="organization_name">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Organization Name</FormLabel>
            <FormControl>
              <Input type="text"
                class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                placeholder="Enter Organization Name" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="organization_type">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-sm font-medium">Organization Type</FormLabel>
            <FormControl>
              <Select v-bind="componentField">
                <SelectTrigger
                  class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                  <SelectValue placeholder="Select an organization type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial_management_service">
                    Financial Management Service
                  </SelectItem>
                  <SelectItem value="legal_services">
                    Legal Services
                  </SelectItem>
                  <SelectItem value="market_development">
                    Market Development
                  </SelectItem>
                  <SelectItem value="management_consulting">
                    Management Consulting
                  </SelectItem>
                  <SelectItem value="others">
                    Other Relevant Services
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>
              <!-- <p class="text-sm text-secondary-body-regular-contrast">(First Name & Last Name of Most senior executive
                member)</p> -->
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="first_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">First Name</FormLabel>
                <FormControl>
                  <Input type="text"
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter First Name" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="last_name">
              <FormItem class="space-y-1">
                <FormLabel class="text-[#3F434A] text-base font-medium">Last Name</FormLabel>
                <FormControl>
                  <Input type="text"
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter Last Name" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <p class="text-sm text-secondary-body-regular-contrast">(First Name & Last Name of Most senior executive
            member)</p>
        </div>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Email Address (Work Email Address)</FormLabel>
            <FormControl>
              <div class="relative w-full  items-center">
                <Input type="email"
                  class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter email address" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <Mail class="size-5 text-muted-foreground" />
                </span>
              </div>

            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" :validate-on-blur="!isFieldDirty" name="whatsapp_number">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Whatsapp Number</FormLabel>
            <FormControl>
              <div class="relative w-full  items-center">
                <Input type="tel"
                  class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Whatsapp Number" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <img src="~/assets/images/icons/chat.svg" class="size-5 text-muted-foreground" />
                </span>
              </div>

            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center mb-2">
                <Input 
                  :type="isPasswordVisible ? 'text' : 'password'"
                  class="h-11 pl-10 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField"   @input="checkPasswordStrength" v-model="password"                  />
                <button type="button" @click="togglePasswordVisibility"  aria-label="Toggle password visibility" class="absolute cursor-pointer end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                  <img src="~/assets/images/icons/lock.svg" class="size-5 text-muted-foreground" />
                </span>
              </div>
            </FormControl>
            <FormMessage />
            <ul class="space-y-1 text-sm mt-3">
              <li class="text-secondary-body-regular-contrast font-normal inline-flex items-center" :class="getIndicatorClass(criteria.length)">
                <span v-if="criteria.length" class="text-green-500 mr-1 ">
                  <img src="~/assets/images/icons/secure_check.svg" />
                </span>
                Password must be at least 8 characters
              
              </li>
              <li class="text-secondary-body-regular-contrast font-normal" :class="getIndicatorClass(criteria.uppercase)">
                <span v-if="criteria.uppercase" class="text-green-500 mr-1">✔</span>Password must have at least one uppercase</li>
              <li class="text-secondary-body-regular-contrast font-normal" :class="getIndicatorClass(criteria.number)">
                <span v-if="criteria.number" class="text-green-500 mr-1">✔</span>Password must have one number</li>
              <li class="text-secondary-body-regular-contrast font-normal" :class="getIndicatorClass(criteria.special)">
                <span v-if="criteria.special" class="text-green-500 mr-1">✔</span>Password must have one special characters</li>
            </ul>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirm_password">
          <FormItem class="space-y-1">
            <FormLabel class="text-[#3F434A] text-base font-medium">Confirm Password</FormLabel>
            <FormControl class=" relative w-full  items-center">

              <div class="relative w-full  items-center">
                <Input 
                :type="isPasswordVisible ? 'text' : 'password'"
                  class="pl-10 h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                  placeholder="Enter Password" v-bind="componentField" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">

                  <img src="~/assets/images/icons/lock.svg" class="size-5 text-muted-foreground" />
                </span>
                <button @click="togglePasswordVisibility"   class="absolute end-0 inset-y-0 flex items-center justify-center px-2">

                  <Eye v-if="!isPasswordVisible" class="size-5 text-muted-foreground" />
                  <EyeOff v-else class="size-5 text-muted-foreground" />
                </button>
              </div>
            </FormControl>
          </FormItem>
        </FormField>
        <!-- </div> -->

        <Button :disabled="loading" class="text-base py-3 h-11 mt-2">
          Create Account 
          <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
        </Button>
        <p class="mt-2 text-base font-medium text-secondary-body-600">Already have an account?  <NuxtLink
            to="/auth/login" class="inline-flex items-center gap-2 "><span class="underline ">Login to continue</span>
            <img src="~/assets/images/icons/arrow.svg" /> </NuxtLink></p>
      </form>

    </NuxtLayout>
  </div>
</template>

<script setup>
import { Eye, EyeOff, LoaderCircle } from 'lucide-vue-next'
import { Mail } from 'lucide-vue-next';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useAuthStore } from '~/store/auth';

const formSchema = toTypedSchema(
  z.object({
    organization_name: z.string({ required_error: "Organization Name is required."}),
    organization_type: z.string({ required_error: "Organization Type is required."}),
    first_name: z.string({ required_error: "First Name is required."}),
    last_name: z.string({ required_error: "Last Name is required."}),
    email: z.string({ required_error: "Email is required."})
      .email({ message: "Must be a valid email" }),
    whatsapp_number: z.string({required_error: "Whatsapp number is required"})
      .min(10, { message: "Whatsapp Number must be at least 10 characters" }) // Minimum length of 10
      .max(15, { message: "Whatsapp Number cannot exceed 15 characters" }) // Optional: add a max length validation
      .regex(/^\d+$/, { message: "Whatsapp Number must be digits only" }), // Ensure only digits
       
    password: z.string({ message: "Password is required" }),
      // This can stay to ensure there's some input
    confirm_password: z.string().optional()
  })
);

// Password and criteria state
const password = ref('');
const isPasswordVisible = ref(false);

const criteria = ref({
  length: false,
  uppercase: false,
  number: false,
  special: false,
});

// Function to check password strength criteria
function checkPasswordStrength() {
  console.log('password', password, values)
  const value = password.value;
  criteria.value.length = value.length >= 8;
  criteria.value.uppercase = /[A-Z]/.test(value);
  criteria.value.number = /[0-9]/.test(value);
  criteria.value.special = /[@$!%*?&]/.test(value);
}

// Function to return CSS class for each criterion
function getIndicatorClass(isPassed) {
  return isPassed ? 'text-green-500' : 'text-gray-500';
}

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

const authStore = useAuthStore()
const { isFieldDirty, handleSubmit, values } = useForm({
  validationSchema: formSchema,
});
const router = useRouter()
const loading  = ref(false);

const onSubmit = handleSubmit(async(values) => {

  const body =  {
  "email": values.email,
  "password": values.password,
  "re_password": values.confirm_password,
  "first_name": values.first_name,
  "last_name": values.last_name,
  "organization_name": values.organization_name,
  "organization_type": values.organization_type,
  "whatsapp_number": values?.whatsapp_number
}

console.log('values', values)
  try {
    loading.value = true;
  const response =  await authStore.register( body );
  console.log('response', response.data?.data)
  if (response.data && response?.data?.data?.id) {
    loading.value = false;
    // redirect to dashboard
    console.log('here', response?.data?.data?.id)
    router.push('/auth/registration-successful');

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