<script setup>
import { Check, Edit, LoaderCircle } from 'lucide-vue-next';
import { ref } from 'vue';
import FormDescription from '~/components/ui/form/FormDescription.vue';
import { useDropzone } from "vue3-dropzone"; // Ensure to use the dropzone library compatible with Vue
import FormLabel from '~/components/ui/form/FormLabel.vue';
import Input from '~/components/ui/input/Input.vue';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useAuthStore } from '~/store/auth';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import AlertDialogTrigger from '~/components/ui/alert-dialog/AlertDialogTrigger.vue';
import AlertDialogFooter from '~/components/ui/alert-dialog/AlertDialogFooter.vue';
import { useProgrammeStore } from '~/store/programmme';
import { sectors, targetAudience, nonFinancialSupport, financialSupport, programMode, countries, locations } from '~/lib/data';
import { formatDate } from '~/lib/utils';


const { isFieldDirty, handleSubmit, values } = useForm({
});

const formFields = ref({
  "title": "",
  "description": "",
  "brief_details": "",
  "program_image": '',
  "sectors": [],
  "financial_supports": [],
  "non_financial_supports": [],
  "target_audience": [],
})

const formFieldsDetails = ref({
  "number_of_participants": '',
  "amount": '',
  "start_date": '',
  "end_date": '',
  "application_deadline": '',
  "location": [],
  "program_mode": "",
  "registration_link": '',
  "website_link": '',
})

const programmeStore = useProgrammeStore();

const programme = computed(() => {
  return programmeStore.getCreateProgramme
})

const programme_details = computed(() => {
  return programmeStore.getCreateProgrammeDetails
})

onMounted(() => {
  formFields.value = programme.value
  formFieldsDetails.value = programme_details.value
})

const date = ref();
const deadline = ref()

const steps = ['Program Overview', 'Program Details', 'Preview & Publish'];
const currentStep = ref(0);

const progressValue = computed(() => ((currentStep.value + 1) / steps.length) * 100);
const program_image = ref({})
const program_image_errors = ref({})
const image_preview_link = ref()

function bytesToKilobytes(bytes) {
  return Math.floor(bytes / 1024);
}
function onDrop1(acceptedFiles, rejectReasons) {
  program_image.value = acceptedFiles[0]
  // Check for any rejection reasons
  if (rejectReasons[0]) {
    program_image_errors.value = rejectReasons[0].errors[0];
  } else {
    // Create a FileReader to read the image file
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      image_preview_link.value = event.target.result; // Save the data URL to the ref
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
}
const deleteCac = () => {
  program_image.value = {}
  program_image_errors.value = {}
  image_preview_link.value = ''
}

const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({ onDrop: onDrop1, maxSize: 560000, accept: ".pdf, .jpeg, .png", maxFiles: 1 });

// Functions to Handle Navigation
function goToNextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value += 1;
  }
  updateProgrammeState()
}

function goToPreviousStep() {
  if (currentStep.value > 0) {
    currentStep.value -= 1;
  }
  updateProgrammeState()
}

function updateProgrammeState() {
  programmeStore.STORE_PROGRAMME(formFields.value)

  programmeStore.STORE_PROGRAMME_DETAILS({
    ...formFieldsDetails.value,
    start_date: date.value ? formatDate(date.value[0]) : '',
    end_date: date.value ? formatDate(date.value[1]) : '',
    application_deadline: deadline.value ? formatDate(deadline.value) : ''
  })
}


async function handleFormSubmit() {
  programmeStore.SET_LOADING(true);

  const formData = new FormData();
  formData.append('title', programme.value?.title);
  formData.append('description', programme.value?.description);
  formData.append('brief_details', programme.value?.brief_details);

  for(let sector of programme.value?.sectors){
    formData.append('sectors', sector)
  }
  for(let financial_support of programme.value?.financial_supports){
    formData.append('financial_supports', financial_support)
  }
  for(let non_financial_support of programme.value?.non_financial_supports){
    formData.append('non_financial_supports', non_financial_support)
  }
  for(let target_audience of programme.value?.target_audience){
    formData.append('target_audience', target_audience)
  }

  // formData.append('program_image', programmeStore.getProgrammeImage); 

  try {
    const programmeResponse = await programmeStore.CREATE_PROGRAMME(formData);
    const programmeData = programmeResponse?.data?.data;
 
    if (programmeData?.id) {
      const programme_id = programmeData.id;
      const data = {
        ...programme_details.value,
        program: programme_id
      }
      const detailsResponse = await programmeStore.CREATE_PROGRAMME_DETAILS(data);
      
      const detailsData = detailsResponse?.data?.data;
      if (detailsData) {
        navigateTo(`/dashboard/programmes`);
      }
    }
  } catch (error) {
    console.error("Error creating programme:", error);
  } finally {
    programmeStore.SET_LOADING(false);
  }
}
</script>

<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex flex-col w-full gap-3">
        <LayoutsBreadcrumb :breadcrumbs="[{ text: 'Programmes' }]"></LayoutsBreadcrumb>
        <div class="mt-3">
          <LayoutsTitleHeader :title="'Programmes'" :sub-title="'Manage organization programmes'" />
        </div>
        <div class="h-full py-6">
          <div class="grid h-full items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_300px]">
            <div class=" bg-white rounded-md py-6 px-10">
              <div class="space-y-5">
                <LayoutsSubTitleHeader title="Add Programme" :custom_class="'text-[#3F434A]'" />
                <div class="relative mb-6">
                  <div class="flex justify-between w-full mb-2">
                    <span v-for="(step, index) in steps" :key="index"
                      class="text-base font-normal inline-flex items-center  gap-2"
                      :class="{ 'text-primary': currentStep >= index, 'text-[#98A2B3]': currentStep < index }">
                      <span
                        class="size-5 inline-flex items-center justify-center rounded-full bg-current  text-xs mr-1">

                        <span class="text-white">
                          <!-- {{ currentStep >= index ? <Check /> : index+1 }} -->
                          <Check v-if="currentStep >= index" class="size-4" />
                          <span v-else>
                            {{ index + 1 }}
                          </span>
                        </span>
                      </span>
                      {{ step }}
                    </span>
                  </div>
                  <div class="h-2 rounded-full w-full">
                    <Progress :model-value="progressValue" class="bg-[#B1EDCA]" :indicator_class="'bg-[#3DD37B]'" />
                    <p class="text-sm text-gray-600 text-end">Step {{ currentStep + 1 }} of {{ steps.length }}</p>
                  </div>

                </div>

                <form action="">
                  <div v-if="currentStep === 0" class="flex gap-4 flex-col mt-10">
                    <!-- TOOD: Add Programme Image Uploader  -->
                    <!-- <div>
                      <p class="text-base text-[#3F434A] font-medium">Upload Programme Image</p>
                      <div v-if="program_image?.name"
                        class="border border-primary text-sm h-[72px] p-4 rounded-md flex items-start ">
                        <div class="flex gap-4">
                          <img src="~/assets/images/icons/file.svg" />
                          <div>
                            <p class="text-[#344054] font-medium">{{ program_image?.name }}</p>
                            <p class="text-secondary-body-regular-contrast">{{ bytesToKilobytes(program_image?.size) }}KB
                              – 100% uploaded - <span @click="deleteCac"
                                class="cursor-pointer text-destructive">Delete</span></p>
                          </div>
                        </div>
                        <div class="ml-auto">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#31A962" />
                            <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#31A962" />
                            <path d="M11.3337 5.5L6.75033 10.0833L4.66699 8" stroke="white" stroke-width="1.66667"
                              stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                        </div>
                      </div>
                      <div v-else class="mb-4">
                        <div class="mt-4">
                          <div v-bind="getRootProps1()"
                            class="dropzone cursor-pointer text-secondary-body-regular-contrast border border-[#EAECF0] h-[126px] rounded-md w-full flex flex-col items-center justify-center">
                            <input v-bind="getInputProps1()" />
                            <img src="~/assets/images/icons/upload.svg" />
                            <p><b class="text-[#131438] text-sm">Click to upload</b> or drag and drop</p>
                            <p class="text-xs">.pdf, .jpeg, .png (max.560kb)</p>
                            <p class="text-xs text-destructive capitalize mt-1">{{ program_image_errors ?
                              program_image_errors.code : null }}</p>

                          </div>
                        </div>
                      </div>
                    </div> -->
             
                    <FormField v-slot="{ componentField }" name="title">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-base font-medium">Program Title</FormLabel>
                        <FormControl>
                          <Input type="text"
                            v-model="formFields.title"
                            class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Program Title" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="description">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-sm font-medium">Program Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Program Description"
                            class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            v-model="formFields.description" />
                        </FormControl>
                      </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="details">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-sm font-medium">Program Details</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Program Details"
                            class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            v-model="formFields.brief_details" />
                        </FormControl>
                      </FormItem>
                    </FormField>

                    <!-- <FormField v-slot="{ componentField }" name="instructor">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-sm font-medium">Brief detail of instructors used
                          (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Brief detail of instructors used "
                            class="border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            v-model="formFields.instructors" />
                        </FormControl>
                      </FormItem>
                    </FormField> -->

                    <MultiSelect
                      v-model="formFields.sectors"
                      :options="sectors"
                      title="Sector"
                      placeholder="Select sectors..."
                    />

                    <MultiSelect
                      v-model="formFields.target_audience"
                      :options="targetAudience"
                      title="Target Audience"
                      placeholder="Select target audience..."
                    />

                    <!-- <FormField v-slot="{ componentField }" name="organization_name">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-base font-medium">Other partners and funders</FormLabel>
                        <FormControl>
                          <Input type="text"
                            class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Organization Name" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </FormField> -->

                    <MultiSelect
                      v-model="formFields.non_financial_supports"
                      :options="nonFinancialSupport"
                      title="Non Financial Support"
                      placeholder="Select non financial support..."
                    />

                    <MultiSelect
                      v-model="formFields.financial_supports"
                      :options="financialSupport"
                      title="Financial Support Provided"
                      placeholder="Select financial support..."
                    />

                    <!-- <FormField v-slot="{ componentField }" name="financial_support">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-base font-medium">Financial Support Provided </FormLabel>
                        <FormControl>
                          <Select v-model="formFields.financial_supports">
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
                    </FormField> -->
                  </div>

                  <div v-if="currentStep === 1" class="flex gap-4 flex-col mt-10">
                    <div class="grid grid-cols-2 gap-4">
                      <FormField v-slot="{ componentField }" name="participants">
                        <FormItem class="space-y-1">
                          <FormLabel class="text-[#3F434A] text-base font-medium text-nowrap">No of participant accepted
                            per cohort(Optional)</FormLabel>
                          <FormControl>
                            <div class="relative w-full  items-center">
                              <Input type="number"
                                class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                                placeholder="Enter Number" v-model="formFieldsDetails.number_of_participants" />

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
                                placeholder="Enter Amount or Free" v-model="formFieldsDetails.amount" />

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
                              <VueDatePicker v-model="date" :enable-time-picker="false" range multi-calendars>
                              </VueDatePicker>
                              <!-- <Input type="number"
                            class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Number" v-bind="componentField" />
                           -->
                            </div>

                          </FormControl>
                        </FormItem>
                      </FormField>
                      <FormField v-slot="{ componentField }" name="fee">
                        <FormItem class="space-y-1">
                          <FormLabel class="text-[#3F434A] text-base font-medium">Application Deadline</FormLabel>
                          <FormControl>
                            <div class="relative w-full  items-center">
                              <VueDatePicker v-model="deadline" :enable-time-picker="false" class=""></VueDatePicker>

                              <!-- <Input type="number"
                            class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                            placeholder="Enter Amount or Free" v-bind="componentField" /> -->
                            </div>

                          </FormControl>
                        </FormItem>
                      </FormField>
                    </div>
                 
                    <MultiSelect
                      v-model="formFieldsDetails.location"
                      :options="locations"
                      title="Locations"
                      placeholder="Select locations..."
                    />

                    <FormField v-slot="{ componentField }" name="fee">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-base font-medium">Program Mode</FormLabel>
                        <FormControl>
                          <div class="relative w-full  items-center">
                            <Select v-model="formFieldsDetails.program_mode">
                              <SelectTrigger
                                class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                                <SelectValue placeholder="Select Program Mode" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem v-for="mode in programMode" :key="mode.id" :value="mode.id">
                                  {{ mode.label }}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                      </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="link">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-base font-medium">Registration Link</FormLabel>
                        <FormControl>
                          <div class="relative w-full  items-center">
                            <Input type="url"
                              class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                              placeholder="Enter Registration Link" v-model="formFieldsDetails.registration_link" />
                          </div>
                        </FormControl>
                      </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="website">
                      <FormItem class="space-y-1">
                        <FormLabel class="text-[#3F434A] text-base font-medium">Website Link(Optional)</FormLabel>
                        <FormControl>
                          <div class="relative w-full  items-center">
                            <Input type="url"
                              class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                              placeholder="Enter Website Link" v-model="formFieldsDetails.website_link" />
                          </div>
                        </FormControl>
                      </FormItem>
                    </FormField>
                  </div>

                  <div v-if="currentStep === 2" class="flex gap-4 flex-col mt-10">
                    <div class="space-y-6">
                      <p class="text-lg text-[#071827] font-medium">Program Overview</p>
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Program Title</p>
                        <p class="text-sm text-[#3F434A] font-normal">{{ programme.title }}</p>
                      </div>
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Program Description</p>
                        <p class="text-sm text-[#3F434A] font-normal">{{ programme.description }}</p>
                      </div>
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Program Details</p>
                        <p class="text-sm text-[#3F434A] font-normal">{{ programme.brief_details }}</p>
                      </div>
                      <!-- <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Brief Detail of Instructors Used</p>
                        <p class="text-sm text-[#3F434A] font-normal">Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Amet, similique? Minima rerum, rem magnam sequi ab, inventore, explicabo cum
                          cumque laborum possimus temporibus voluptatem amet dolores officia necessitatibus eum nam.</p>
                      </div> -->
                 
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Sector*</p>
                       <div class="flex flex-wrap gap-2">
                         <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="sector in programme.sectors">
                          {{ sectors.find(s => s.id === sector)?.label }}
                        </span>
                       </div>
                      </div>
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Business Stage (Target Audience)*</p>
                        <div class="flex flex-wrap gap-2">
                         <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="audience in programme.target_audience">
                          {{ targetAudience.find(a => a.id === audience)?.label }}
                        </span>
                       </div>
                      </div>
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Non Financial Support Provided*</p>
                        <div class="flex flex-wrap gap-2">
                         <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="support in programme.non_financial_supports">
                          {{ nonFinancialSupport.find(s => s.id === support)?.label }}
                        </span>
                       </div>
                      </div>
                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Financial Support Provided*</p>
                        <div class="flex flex-wrap gap-2">
                         <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="support in programme.financial_supports">
                          {{ financialSupport.find(s => s.id === support)?.label }}
                        </span>
                       </div>
                      </div>
                      <div class="flex justify-end">
                        <Button type="button" @click="currentStep = 0" variant="ghost" class="text-[#667085]">
                          <Edit class="inline-flex" /> Edit Program Overview
                        </Button>
                      </div>
                    </div>
                    <div class="space-y-6">
                      <p class="text-lg text-[#071827] font-medium">Program Overview</p>
                      <div class="grid grid-cols-2">
                        <div class="space-y-2">
                          <p class="text-sm text-primary font-bold">No of participant accepted per cohort(Optional)</p>
                          <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.number_of_participants }}</p>
                        </div>
                        <div class="space-y-2">
                          <p class="text-sm text-primary font-bold">Participation Fee</p>
                          <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.amount }}</p>
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="space-y-2">
                          <p class="text-sm text-primary font-bold">Timeline/Duration</p>
                          <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.start_date }} - {{ programme_details.end_date }}</p>
                        </div>
                        <div class="space-y-2">
                          <p class="text-sm text-primary font-bold">Application Deadline</p>
                          <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.application_deadline }}</p>
                        </div>
                      </div>

                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Location*</p>
                        <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.locati }}</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="space-y-2">
                          <p class="text-sm text-primary font-bold">Program Mode</p>
                          <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.program_mode }}</p>
                        </div>
                      </div>

                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Registration Link.</p>
                        <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.registration_link }}</p>
                      </div>

                      <div class="space-y-2">
                        <p class="text-sm text-primary font-bold">Website Url</p>
                        <p class="text-sm text-[#3F434A] font-normal">{{ programme_details.website_link }}</p>
                      </div>


                      <div class="flex justify-end">
                        <Button type="button" @click="currentStep = 1" variant="ghost" class="text-[#667085]">
                          <Edit class="inline-flex" /> Edit Program Details
                        </Button>
                      </div>
                    </div>
                  </div>

                </form>
                <!-- v-if="currentStep > 0" -->
                <div class="flex justify-end mt-6 gap-4">
                  <Button size="lg" class="py-3 px-5 h-11 w-[145px]" @click="goToPreviousStep" type="button"
                    variant="outline">
                    Cancel
                  </Button>
                  <Button class="py-3 px-5 h-11 w-[145px]" size="lg" v-if="currentStep < steps.length - 1"
                    @click="goToNextStep" type="button">
                    Next
                  </Button>
                  <!-- <Button size="lg" v-if="currentStep === steps.length - 1" type="submit" >
                Submit
              </Button> -->
                  <AlertDialog>
                    <AlertDialogTrigger class="">
                      <Button type="button" size="lg" v-if="currentStep === steps.length - 1"
                        :disabled="programmeStore.loading"
                        class="py-3 px-5 h-11 w-[145px]"> 
                        Submit
                        <LoaderCircle v-if="programmeStore.loading" class="animate-spin h-4 w-4 ml-2" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent class="max-w-[426px] pt-12">
                      <AlertDialogHeader>
                        <AlertDialogTitle class=" pt-4 pb-2 text-3xl text-center text-gray-950">Confirm Submission
                        </AlertDialogTitle>
                        <AlertDialogDescription class="px-4 text-center font-normal text-base text-[#3F434A]">
                          Are you sure you want to submit? </AlertDialogDescription>
                      </AlertDialogHeader>
                      <Alert class="mb-2 bg-[#EDF2F780] px-4 py-3 inline-flex">
                        <img class="mr-2" src="~/assets/images/icons/info.svg" alt="" />
                        <AlertDescription class="text-sm text-[#5C6F7F]">
                          When you click “Yes, Submit”, your programme will be sent to ESO Collaborative Admin to verify
                          and approved Please review the information provided to ensure accuracy. Once confirmed, this
                          information will be submitted for verification.
                        </AlertDescription>
                      </Alert>
                      <AlertDialogFooter class="flex gap-2.5">
                        <AlertDialogCancel type="button" class="w-full h-11 py-3 px-6">Edit Details</AlertDialogCancel>
                        <AlertDialogAction @click="handleFormSubmit" type="button" class="w-full h-11 py-3 px-6 bg-primary-600">Yes, Submit
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
            <div class=" bg-white rounded-md p-6">
              <div>
                <p class="text-base text-[#3F434A] font-medium">Program Overview</p>
                <div>
                  <div class="h-[290px] bg-[#EAECF0] mt-4">
                    <img v-if="image_preview_link" :src="image_preview_link" class="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>