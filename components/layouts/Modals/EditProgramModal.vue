<script setup>
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Font, Alignment, List, Heading } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogScrollContent
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sectors, targetAudience, nonFinancialSupport, financialSupport, programMode, countries, locations } from '~/lib/data';
import { formatDate } from '~/lib/utils';
import { Edit, LoaderCircle, LoaderCircleIcon } from "lucide-vue-next";
import { watch } from 'vue';
import { useProgrammeStore } from '~/store/programmme';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { toast } from 'vue-sonner';


const { program_id } = useRoute().params

const programStore = useProgrammeStore()
const props = defineProps({
 data: {
  type: Object
 }
});
const date = ref();
const deadline = ref()
const formFields = ref({
  "title": "",
  "description": props?.data && props?.data?.description,
  "brief_details": props?.data?.brief_details,
  "sectors": props?.data?.sectors,
  "financial_supports": props?.data?.financial_supports,
  "non_financial_supports": props?.data?.non_financial_supports,
  "target_audience": props?.data?.target_audience,
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

const editor = ClassicEditor;
const editorData = ref('');

const editorConfig = {
  plugins: [ Bold, Essentials, Italic,  Paragraph, Heading, Undo, Font, List ],
  toolbar: {
		items: [
        'undo', 'redo',
        '|',
        'paragraph','heading',
        '|',
        'fontsize',
        '|',
        'bold', 'italic', 
        '|',
        'alignment',
        '|',
        'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
    ],

		shouldNotGroupWhenFull: true
	},
};

function onEditorChange(event, editor) {
  formFields.value.description = editor.getData();
}
const loadingState = ref(null)


const isOpen = ref(false)

const closeDialog = () => {
  isOpen.value = false
}
const openDialog = () => {
  isOpen.value = true
}

const form = useForm({});

const onSubmit = form.handleSubmit( async (values) => {
  loadingState.value = true
  const body = {
    ...formFields.value,
    program_details: {
      ...formFieldsDetails.value,
     application_deadline: deadline.value ? formatDate(deadline.value) : ''
    }
  }
  try {
    const response = await programStore.updateProgramme(program_id, body)
    if(response?.data?.data && response?.data?.data?.profile) {
      closeDialog()
      toast.success("Programme updated successfully")
      programStore.getProgramme(program_id)
    }
    if (response?.error ) {
      toast.error("Updating failed, Please check all fields.")
    }
    loadingState.value = false
  } catch (error) {
    console.log('error', error)
  }
});

watch(() => props.data, (newData) => {
  if (newData) {
    formFields.value.title = newData?.title || "";
    formFields.value.description = newData.description || "";
    formFields.value.brief_details = newData.brief_details || "";
    formFields.value.sectors = newData.sectors || [];
    formFields.value.financial_supports = newData.financial_supports || [];
    formFields.value.non_financial_supports = newData.non_financial_supports || [];
    formFields.value.target_audience = newData.target_audience || [];
    formFieldsDetails.value.number_of_participants = newData.program_details?.number_of_participants || '',
    formFieldsDetails.value.program_mode = newData.program_details?.program_mode || '',
    formFieldsDetails.value.amount = newData.program_details?.amount || '',
    formFieldsDetails.value.location = newData.program_details?.location || [],
    formFieldsDetails.value.registration_link = newData.program_details?.registration_link || '',
    formFieldsDetails.value.website_link = newData.program_details?.website_link || '',
    formFieldsDetails.value.start_date = newData.program_details?.start_date || '',
    formFieldsDetails.value.end_date = newData.program_details?.end_date || '',
    deadline.value = newData.program_details?.application_deadline || '',
    date.value = [formFieldsDetails.value.start_date, formFieldsDetails.value.end_date]
    formFieldsDetails.value.duration = newData.duration || ''
  }
}, { immediate: true });


</script>

<template>
  <Dialog :open="isOpen">
    <DialogTrigger @click="openDialog" as-child>
      <Button type="button" variant="ghost" class="text-[#667085]">
        <Edit class="inline-flex" /> Edit Program
      </Button>
    </DialogTrigger>
    <DialogScrollContent class="sm:max-w-[697px]">
      <DialogHeader>
        <DialogTitle class="text-[#3F434A] text-xl font-medium">Edit Program </DialogTitle>
        <DialogClose @click="closeDialog"
          class=" rounded-full size-5  opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-0  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#3F434A" />
            <path
              d="M13.0079 6.99057C12.9139 6.89656 12.7864 6.84375 12.6534 6.84375C12.5204 6.84375 12.3929 6.89656 12.2989 6.99057L9.99924 9.29019L7.69961 6.99057C7.60558 6.89656 7.47805 6.84375 7.34509 6.84375C7.21212 6.84375 7.0846 6.89656 6.99057 6.99057C6.89656 7.0846 6.84375 7.21212 6.84375 7.34509C6.84375 7.47805 6.89656 7.60558 6.99057 7.69961L9.29019 9.99924L6.99057 12.2989C6.89656 12.3929 6.84375 12.5204 6.84375 12.6534C6.84375 12.7864 6.89656 12.9139 6.99057 13.0079C7.0846 13.1019 7.21212 13.1547 7.34509 13.1547C7.47805 13.1547 7.60558 13.1019 7.69961 13.0079L9.99924 10.7083L12.2989 13.0079C12.3929 13.1019 12.5204 13.1547 12.6534 13.1547C12.7864 13.1547 12.9139 13.1019 13.0079 13.0079C13.1019 12.9139 13.1547 12.7864 13.1547 12.6534C13.1547 12.5204 13.1019 12.3929 13.0079 12.2989L10.7083 9.99924L13.0079 7.69961C13.1019 7.60558 13.1547 7.47805 13.1547 7.34509C13.1547 7.21212 13.1019 7.0846 13.0079 6.99057V6.99057Z"
              fill="#3F434A" />
          </svg>
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogHeader>

     <form class="space-y-4">
      <FormField  v-slot="{ componentField }" name="title">
        <FormItem class="space-y-1">
          <FormLabel class="text-[#3F434A] text-sm font-medium">Program Title</FormLabel>
          <FormControl>
            <Input type="text" disabled
              class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
              placeholder="Program Title"  v-model="formFields.title" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="description">
        <FormItem class="space-y-1">
          <FormLabel class="text-[#3F434A] text-sm font-medium">Program Description</FormLabel>
          <FormControl>
              <div>
                <ckeditor
                :editor="editor"
                :config="editorConfig"
                v-model="formFields.description"
                @change="onEditorChange"
               
              />
          </div>
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

      <div class="flex gap-4 flex-col mt-10">
        <div class="grid lg:grid-cols-2 gap-4 items-end">
          <FormField v-slot="{ componentField }" name="participants">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-sm font-medium ">No of participant accepted
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
              <FormLabel class="text-[#3F434A] text-sm font-medium">Participation Fee</FormLabel>
              <FormControl>
                <!-- <div class="relative w-full  items-center">
                  <Input type="number"
                    class=" h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                    placeholder="Enter Amount or Free" v-model="formFieldsDetails.amount" />

                </div> -->
            <div class="relative w-full  items-center">
                <Select v-model="formFieldsDetails.amount">
                  <SelectTrigger
                    class="h-11 border-0 ring-[#D0D5DD]  focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm">
                    <SelectValue placeholder="Select Program Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem  value="free">
                     Free
                    </SelectItem>
                    <SelectItem  value="paid">
                      Paid
                     </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              </FormControl>
            </FormItem>
          </FormField>
        </div>
      
        <div class="grid lg:grid-cols-2 gap-4">
          <FormField v-slot="{ componentField }" name="participants">
            <FormItem class="space-y-1">
              <FormLabel class="text-[#3F434A] text-sm font-medium">Timeline / Duration</FormLabel>
              <FormControl>
                <div class="relative w-full  items-center">
                  <VueDatePicker v-model="date"  @update:modelValue="(newRange) => {
                    formFieldsDetails.start_date = newRange[0]
                    formFieldsDetails.end_date = newRange[1]}" :enable-time-picker="false" range multi-calendars>
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
              <FormLabel class="text-[#3F434A] text-sm font-medium">Application Deadline</FormLabel>
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
            <FormLabel class="text-[#3F434A] text-sm font-medium">Program Mode</FormLabel>
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
            <FormLabel class="text-[#3F434A] text-sm font-medium">Registration Link</FormLabel>
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
            <FormLabel class="text-[#3F434A] text-sm font-medium">Website Link(Optional)</FormLabel>
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
      <div class="flex justify-end mt-6 gap-4">
        <Button size="lg" class="py-3 px-5 h-11 w-[145px]" @click="closeDialog" type="button"
          variant="outline">
          Cancel
        </Button>
        <Button :disabled="loadingState" class="py-3 px-5 h-11 w-[145px]" size="lg" 
          @click="onSubmit" type="button" >
         Submit

         <LoaderCircleIcon v-show="loadingState" class="animate-spin h-4 w-4 ml-2" />
        </Button>
        </div>
     </form>
    </DialogScrollContent>
  </Dialog>
</template>