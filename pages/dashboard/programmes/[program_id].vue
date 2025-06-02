<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex flex-col w-full gap-3">
        <LayoutsBreadcrumb :breadcrumbs="[
          { text: 'Programmes', href: `/dashboard/programmes` },
          {text: `${program_id}` }
          ]"></LayoutsBreadcrumb>
        <div class="mt-3">
          <LayoutsTitleHeader :title="'Programme Preview'" :sub-title="''" />
        </div>
        <div class="h-full py-6">
          <div class="grid h-full items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_300px]">
            <div class=" bg-white rounded-md px-3 py-4 lg:py-6 lg:px-10">
              <div class="flex gap-4 flex-col mt-10">
                <div class="space-y-6">
                  <div class="flex justify-between items-center">
                    <p class="text-lg text-[#071827] font-medium">Program Overview</p>
                    <div class="flex ">
                      <LayoutsModalsEditProgramModal :data="program_details" />
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Program Title</p>
                    <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.title }}</p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Program Description</p>
                    <p class="text-sm text-[#3F434A] font-normal" v-html=" program_details?.description"></p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Program Details</p>
                    <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.brief_details }}</p>
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
                     <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="sector in program_details?.sectors">
                      {{ sectors.find(s => s.id === sector)?.label }}
                    </span>
                   </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Business Stage (Target Audience)*</p>
                    <div class="flex flex-wrap gap-2">
                     <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="audience in program_details?.target_audience">
                      {{ targetAudience.find(a => a.id === audience)?.label }}
                    </span>
                   </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Non Financial Support Provided*</p>
                    <div class="flex flex-wrap gap-2">
                     <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="support in program_details?.non_financial_supports">
                      {{ nonFinancialSupport.find(s => s.id === support)?.label }}
                    </span>
                   </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Financial Support Provided*</p>
                    <div class="flex flex-wrap gap-2">
                     <span class="text-sm text-[#3F434A] bg-[#D1FADF] font-normal px-3 py-1 rounded-full" v-for="support in program_details?.financial_supports">
                      {{ financialSupport.find(s => s.id === support)?.label }}
                    </span>
                   </div>
                  </div>
                  
                </div>
                <div class="space-y-6">
                  <p class="text-lg text-[#071827] font-medium">Program Details Overview</p>
                  <div class="grid gap-y-2 lg:grid-cols-2">
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">No of participant accepted per cohort(Optional)</p>
                      <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.number_of_participants }}</p>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Participation Fee</p>
                      <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.amount }}</p>
                    </div>
                  </div>
                  <div class="grid gap-y-2 lg:grid-cols-2">
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Timeline/Duration</p>
                      <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.start_date }} - {{ program_details?.program_details?.end_date }}</p>
                    </div>
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Application Deadline</p>
                      <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.application_deadline }}</p>
                    </div>
                  </div>
    
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Location*</p>
                    <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.location?.join(', ') }}</p>
                  </div>
                  <div class="grid gap-y-2 lg:grid-cols-2">
                    <div class="space-y-2">
                      <p class="text-sm text-primary font-bold">Program Mode</p>
                      <p class="text-sm text-[#3F434A] font-normal">{{program_details?.program_details?.program_mode }}</p>
                    </div>
                  </div>
    
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Registration Link.</p>
                    <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.registration_link }}</p>
                  </div>
    
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Website Url</p>
                    <p class="text-sm text-[#3F434A] font-normal">{{ program_details?.program_details?.website_link }}</p>
                  </div>
    
    
                </div>
              </div>
            </div>
            <div class=" bg-white rounded-md p-6">
              <div>
                <div>
                  <div class="h-[290px] bg-[#EAECF0] mt-4">
                    <img v-if="program_details?.program_image_url" :src="program_details?.program_image_url" class="h-full w-full" />
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

<script setup>
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo, Font, Alignment, List, Heading } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import 'ckeditor5/ckeditor5.css';
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

const editor = ClassicEditor;
const programStore = useProgrammeStore()
const editorData = ref('');
const form = useForm({})
const { program_id} = useRoute().params
const edit = (false)

const program_details = computed(() => {
  return programStore.program
})
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
  formFields.description = editor.getData();
}

onMounted(()=>{
  programStore.getProgramme(program_id)
})
</script>

<style lang="scss" scoped>

</style>