<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex flex-col w-full gap-3">
        <LayoutsBreadcrumb
          :breadcrumbs="[{ text: 'Programmes' }]"></LayoutsBreadcrumb>
        <div class="mt-3">
          <LayoutsTitleHeader
            :title="'Programmes'"
            :sub-title="'Manage organization programmes'"
             />
        </div>
     <div class="h-full py-6">
      <div class="grid h-full items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_300px]">
        <div class=" bg-white rounded-md py-6 px-10">
          <div class="space-y-5">
            <LayoutsSubTitleHeader title="Add Programme" :custom_class="'text-[#3F434A]'"/>
            <div class="relative mb-6">
              <div class="flex justify-between w-full mb-2">
                <span
                  v-for="(step, index) in steps"
                  :key="index"
                  class="text-base font-normal inline-flex items-center  gap-2"
                  :class="{ 'text-primary': currentStep >= index, 'text-[#98A2B3]': currentStep < index }"
                >
                <span class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">
                  
                  <span class="text-white">
                    <!-- {{ currentStep >= index ? <Check /> : index+1 }} -->
                    <Check v-if="currentStep >= index" class="size-4"/>  
                    <span v-else>
                      {{ index+1 }}
                    </span>
                  </span>
                </span>
                  {{ step }}
                </span>
              </div>
              <div class="h-2 rounded-full w-full">
                <Progress :model-value="progressValue" class="bg-[#B1EDCA]" :indicator_class="'bg-[#3DD37B]'"/>
                <p class="text-sm text-gray-600 text-end">Step {{ currentStep + 1 }} of {{ steps.length }}</p>
              </div>
              
            </div>

            <form action="" >
              <div v-if="currentStep === 0" class="flex gap-4 flex-col mt-4">
                <div>
                 
                  <p class="text-base text-[#3F434A] font-medium">Upload Programme Image</p>
                  <div v-if="program_image?.name" class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
                    <div class="flex gap-4">
                      <img src="~/assets/images/icons/file.svg" />
                      <div>
                        <p class="text-[#344054] font-medium">{{ program_image?.name }}</p>
                        <p class="text-secondary-body-regular-contrast">{{bytesToKilobytes(program_image?.size) }}KB – 100% uploaded -  <span @click="deleteCac" class="cursor-pointer text-destructive">Delete</span></p>
                      </div>
                       </div>
                    <div class="ml-auto">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#31A962"/>
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#31A962"/>
                        <path d="M11.3337 5.5L6.75033 10.0833L4.66699 8" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                    </div>
                  </div>
                  <div v-else class="mb-4">
                   
                    <div class="mt-4">
                      <!-- Dropzone 1 -->
            <div v-bind="getRootProps1()" class="dropzone cursor-pointer text-secondary-body-regular-contrast border border-[#EAECF0] h-[126px] rounded-md w-full flex flex-col items-center justify-center">
              <input v-bind="getInputProps1()" />
              <img src="~/assets/images/icons/upload.svg" />
              <p><b class="text-[#131438] text-sm">Click to upload</b> or drag and drop</p>
              <p class="text-xs">.pdf, .jpeg, .png (max.560kb)</p>
              <p class="text-xs text-destructive capitalize mt-1">{{ program_image_errors ? program_image_errors.code : null }}</p>
        
            </div>
                    </div>
                  </div>
                </div>
                <FormField v-slot="{ componentField }" name="program_title">
                  <FormItem class="space-y-1">
                    <FormLabel class="text-[#3F434A] text-base font-medium">Program Title</FormLabel>
                    <FormControl>
                      <Input type="text"
                        class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        placeholder="Program Title" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField
                    v-slot="{ componentField }"
                    name="description">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-sm font-medium"
                        >Program Description</FormLabel
                      >
                      <FormControl>
                        <Textarea
                        placeholder="Program Description"
                        class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        v-bind="componentField"
                      />
                      </FormControl>
                    </FormItem>
                  </FormField>
                  <FormField
                    v-slot="{ componentField }"
                    name="details">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-sm font-medium"
                        >Program Details</FormLabel
                      >
                      <FormControl>
                        <Textarea
                        placeholder="Program Details"
                        class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        v-bind="componentField"
                      />
                      </FormControl>
                    </FormItem>
                  </FormField>

                  <FormField
                    v-slot="{ componentField }"
                    name="instructor">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-sm font-medium"
                        >Brief detail of instructors used (Optional)</FormLabel
                      >
                      <FormControl>
                        <Textarea
                        placeholder="Brief detail of instructors used "
                        class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        v-bind="componentField"
                      />
                      </FormControl>
                    </FormItem>
                  </FormField>

                  <FormField v-slot="{ componentField }" name="sector">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-base font-medium">Sector </FormLabel>
                      <FormControl>
                        <Select v-bind="componentField">
                          <SelectTrigger
                            class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                            <SelectValue placeholder="Sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="primary care">
                              Nigeria
                            </SelectItem>
                          
                            
                          </SelectContent>
                        </Select>
          
                      </FormControl>
                    </FormItem>
                  </FormField>

                  <FormField v-slot="{ componentField }" name="target_audience">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-base font-medium">Business Stage (Target Audience)</FormLabel>
                      <FormControl>
                        <Select v-bind="componentField">
                          <SelectTrigger
                            class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                            <SelectValue placeholder="Target Audience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="primary care">
                              Nigeria
                            </SelectItem>
                          
                            
                          </SelectContent>
                        </Select>
          
                      </FormControl>
                    </FormItem>
                  </FormField>

                <FormField v-slot="{ componentField }" name="organization_name">
                  <FormItem class="space-y-1">
                    <FormLabel class="text-[#3F434A] text-base font-medium">Other partners and funders</FormLabel>
                    <FormControl>
                      <Input type="text"
                        class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        placeholder="Enter Organization Name" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="organization_name">
                  <FormItem class="space-y-1">
                    <FormLabel class="text-[#3F434A] text-base font-medium">Other partners and funders</FormLabel>
                    <FormControl>
                      <Input type="text"
                        class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        placeholder="Enter Organization Name" v-bind="componentField" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="non_financial_support">
                  <FormItem class="space-y-1">
                    <FormLabel class="text-[#3F434A] text-base font-medium">Non Financial Support Provided </FormLabel>
                    <FormControl>
                      <Select v-bind="componentField">
                        <SelectTrigger
                          class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                          <SelectValue placeholder="Non Financial Support " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary care">
                            Nigeria
                          </SelectItem>
                        
                          
                        </SelectContent>
                      </Select>
        
                    </FormControl>
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="financial_support">
                  <FormItem class="space-y-1">
                    <FormLabel class="text-[#3F434A] text-base font-medium">Financial Support Provided </FormLabel>
                    <FormControl>
                      <Select v-bind="componentField">
                        <SelectTrigger
                          class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                          <SelectValue placeholder="Select " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary care">
                            Nigeria
                          </SelectItem>
                        
                          
                        </SelectContent>
                      </Select>
        
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>

              <div v-if="currentStep === 1" class="flex gap-4 flex-col mt-4">
                <div class="grid grid-cols-2 gap-4">
                  <FormField v-slot="{ componentField }" name="participants">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-base font-medium">No of participant accepted per cohort(Optional)</FormLabel>
                      <FormControl>
                        <div class="relative w-full  items-center">
                          <Input type="number"
                            class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Number" v-bind="componentField" />
                          
                        </div>
          
                      </FormControl>
                    </FormItem>
                  </FormField>
                  <FormField v-slot="{ componentField }" name="fee">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-base font-medium">Participation Fee</FormLabel>
                      <FormControl>
                        <div class="relative w-full  items-center">
                          <Input type="number"
                            class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Amount or Free" v-bind="componentField" />
                          
                        </div>
          
                      </FormControl>
                    </FormItem>
                  </FormField>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <FormField v-slot="{ componentField }" name="participants">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-base font-medium">Timeline / Duration</FormLabel>
                      <FormControl>
                        <div class="relative w-full  items-center">
                          <Input type="number"
                            class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Number" v-bind="componentField" />
                          
                        </div>
          
                      </FormControl>
                    </FormItem>
                  </FormField>
                  <FormField v-slot="{ componentField }" name="fee">
                    <FormItem class="space-y-1">
                      <FormLabel class="text-[#3F434A] text-base font-medium">Application Deadline</FormLabel>
                      <FormControl>
                        <div class="relative w-full  items-center">
                          <Input type="number"
                            class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Amount or Free" v-bind="componentField" />
                        </div>
          
                      </FormControl>
                    </FormItem>
                  </FormField>
                </div>
              </div>


            </form>
            <!-- v-if="currentStep > 0" -->
            <div class="flex justify-end mt-6 gap-4">
              <Button size="lg"  @click="goToPreviousStep" type="button" variant="outline">
                Cancel
              </Button>
              <Button size="lg" v-if="currentStep < steps.length - 1" @click="goToNextStep" type="button">
                Next
              </Button>
              <Button v-if="currentStep === steps.length - 1" type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div class=" bg-white rounded-md p-6">
right
        </div>
      </div>
     </div>
      
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Check } from 'lucide-vue-next';
import { ref } from 'vue';
import FormDescription from '~/components/ui/form/FormDescription.vue';
import { useDropzone } from "vue3-dropzone"; // Ensure to use the dropzone library compatible with Vue
import FormLabel from '~/components/ui/form/FormLabel.vue';
import Input from '~/components/ui/input/Input.vue';
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

const { isFieldDirty, values } = useForm({
  validationSchema: formSchema,
});

// Steps Array
const steps = ['Program Overview', 'Program Details', 'Publish'];
const currentStep = ref(0);

// Form Data
const formData = ref({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
});

const progressValue = computed(() => ((currentStep.value + 1) / steps.length) * 100);
const program_image = ref({})
const program_image_errors = ref({})

function bytesToKilobytes(bytes) {
  return Math.floor(bytes / 1024);
}

function onDrop1(acceptedFiles, rejectReasons) {
  program_image.value = acceptedFiles[0]
  if (rejectReasons[0]) {
    program_image_errors.value = rejectReasons[0].errors[0]
  }
}
const deleteCac = () => {
  program_image.value = {}
  program_image_errors.value = {}
}

const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({ onDrop: onDrop1, maxSize: 560000, accept: ".pdf, .jpeg, .png", maxFiles: 1});

// Functions to Handle Navigation
function goToNextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value += 1;
  }
}

function goToPreviousStep() {
  if (currentStep.value > 0) {
    currentStep.value -= 1;
  }
}

// Function to Handle Form Submission
function handleSubmit() {
  console.log('Form Submitted:', formData.value);
  alert('Form submitted successfully!');
}
</script>

<style lang="scss" scoped>

</style>