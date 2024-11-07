<template>
  <div class="mt-4 flex flex-col gap-6">
    <Alert v-show="success" class="bg-[#E2FEF0] border-0 flex items-center">
      <CheckIcon class="text-[#05944F] size-5" />
      <div class="">
        <AlertTitle class="text-[#232E3F]">Details Submitted Successfully!</AlertTitle>
        <AlertDescription class="text-[#5C6F7F]">
          Your organization details have been submitted for verification. Please continue to complete the remaining sections to finalize your application.
        </AlertDescription>
      </div>
     
    </Alert>
    <p class="text-base text-secondary-body-500">Upload relevant certificates and licenses for verification.</p>
    <!-- <div v-for="doc, index in certificates?.results" :key="index+1">
      <div v-if="doc?.cac_certificate">
        <div class="mb-4">
          <p class="text-[#3F434A] text-base font-medium">CAC Certificate</p>
          <p class="text-base text-[#98A2B3] font-normal">Upload CAC document and Enter Details</p>

        </div>
        <div  class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
          <div class="flex gap-4">
            <img src="~/assets/images/icons/file.svg" />
            <div>
              <p class="text-[#344054] font-medium">{{ doc?.name }}</p>
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
      </div>
      <div v-if="doc?.tin_certificate">
        <div class="mb-4">
          <p class="text-[#3F434A] text-base font-medium">TIN Certificate</p>
          <p class="text-base text-[#98A2B3] font-normal">Upload TIN document and Enter Details</p>

        </div>
        <div  class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
          <div class="flex gap-4">
            <img src="~/assets/images/icons/file.svg" />
            <div>
              <p class="text-[#344054] font-medium">{{ doc?.name }}</p>
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
      </div>
      <div v-if="doc?.other_license">
        <div class="mb-4">
          <p class="text-[#3F434A] text-base font-medium">OTher Licence</p>
          <p class="text-base text-[#98A2B3] font-normal">Upload TIN document and Enter Details</p>

        </div>
        <div  class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
          <div class="flex gap-4">
            <img src="~/assets/images/icons/file.svg" />
            <div>
              <p class="text-[#344054] font-medium">{{ doc?.name }}</p>
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
      </div>
    </div> -->
    <form>
      <div class="flex gap-4 flex-col">
        <div>
          <div class="mb-4">
            <p class="text-[#3F434A] text-base font-medium">CAC Document</p>
            <p class="text-base text-[#98A2B3] font-normal">Upload Registration Certificate</p>
          </div>
          <div v-if="cac_doc?.name " class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
            <div class="flex gap-4">
              <img src="~/assets/images/icons/file.svg" />
              <div>
                <p class="text-[#344054] font-medium">{{ cac_doc?.name }}</p>
                <p class="text-secondary-body-regular-contrast">{{bytesToKilobytes(cac_doc?.size) }}KB – 100% uploaded -  <span @click="deleteTin" class="cursor-pointer text-destructive">Delete</span></p>
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
            <p class="text-sm text-[#3F434A] font-medium">Upload CAC Certificate</p>
            <div class="mt-4">
              <!-- Dropzone 1 -->
    <div v-bind="getRootProps2()" class="dropzone cursor-pointer text-secondary-body-regular-contrast border border-[#EAECF0] h-[126px] rounded-md w-full flex flex-col items-center justify-center">
      <input v-bind="getInputProps2()" />
      <img src="~/assets/images/icons/upload.svg" />
      <p><b class="text-[#131438] text-sm">Click to upload</b> or drag and drop</p>
      <p class="text-xs">.pdf, .jpeg, .png (max.560kb)</p>
      <p class="text-xs text-destructive capitalize mt-1">{{ cac_doc_errors ? cac_doc_errors.code : null }}</p>

    </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <p class="text-[#3F434A] text-base font-medium">TIN</p>
            <p class="text-base text-[#98A2B3] font-normal">Upload Registration Certificate</p>
          </div>
          <div v-if="tin_doc?.name" class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
            <div class="flex gap-4">
              <img src="~/assets/images/icons/file.svg" />
              <div>
                <p class="text-[#344054] font-medium">{{ tin_doc?.name }}</p>
                <p class="text-secondary-body-regular-contrast">{{bytesToKilobytes(tin_doc?.size) }}KB – 100% uploaded -  <span @click="deleteTin" class="cursor-pointer text-destructive">Delete</span></p>
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
            <p class="text-sm text-[#3F434A] font-medium">Upload TIN Certificate</p>
            <div class="mt-4">
              <!-- Dropzone 1 -->
    <div v-bind="getRootProps2()" class="dropzone cursor-pointer text-secondary-body-regular-contrast border border-[#EAECF0] h-[126px] rounded-md w-full flex flex-col items-center justify-center">
      <input v-bind="getInputProps2()" />
      <img src="~/assets/images/icons/upload.svg" />
      <p><b class="text-[#131438] text-sm">Click to upload</b> or drag and drop</p>
      <p class="text-xs">.pdf, .jpeg, .png (max.560kb)</p>
      <p class="text-xs text-destructive capitalize mt-1">{{ tin_doc_errors ? tin_doc_errors.code : null }}</p>

    </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <p class="text-[#3F434A] text-base font-medium">Licences (Optional)</p>
            <p class="text-base text-[#98A2B3] font-normal">Upload any supporting documents</p>
          </div>
          <div v-if="license_doc?.name" class="border border-primary w-[367px] text-sm h-[72px] p-4 rounded-md flex items-start ">
            <div class="flex gap-4">
              <img src="~/assets/images/icons/file.svg" />
              <div>
                <p class="text-[#344054] font-medium">{{ license_doc?.name }}</p>
                <p class="text-secondary-body-regular-contrast">{{bytesToKilobytes(license_doc?.size) }}KB – 100% uploaded -  <span @click="deleteLicense" class="cursor-pointer text-destructive">Delete</span></p>
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
              <div v-bind="getRootProps3()" class="dropzone cursor-pointer text-secondary-body-regular-contrast border border-[#EAECF0] h-[126px] rounded-md w-full flex flex-col items-center justify-center">
                <input v-bind="getInputProps3()" />
                <img src="~/assets/images/icons/upload.svg" />
                <p><b class="text-[#131438] text-sm">Click to upload</b> or drag and drop</p>
                <p class="text-xs">.pdf, .jpeg, .png (max.560kb)</p>
                <p class="text-xs text-destructive capitalize mt-1">{{ license_doc_errors ? license_doc_errors.code : null }}</p>

              </div>
            </div>
          </div>
        </div>

        <FormField v-slot="{ componentField }" name="organization_name" class="">
          <FormItem class="space-y-1 w-1/2">
            <FormLabel class="text-[#3F434A] text-base font-medium">Number of Years in Operation</FormLabel>
            <FormControl>
              <Input type="number"
                class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1.5px]  rounded-[8px] focus-visible:ring-[1.5px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                placeholder="Years in Operation" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>
        <div class="mt-8 flex justify-end gap-6" >
          <Button type="button" size="lg" variant="outline" class="py-3 px-5 h-11 w-[145px]">Cancel</Button>
          <AlertDialog>
            <AlertDialogTrigger :disabled="loading || certificates?.results?.length > 0" class="">
              <Button type="button" :disabled="loading || certificates?.results?.length > 0" size="lg" class="py-3 px-5 h-11 w-[145px]">
                Save
                <LoaderCircle v-show="loading" class="animate-spin h-4 w-4 ml-2" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent class="max-w-[426px] pt-12">
              <AlertDialogHeader>
                <AlertDialogTitle
                  class=" pt-4 pb-2 text-3xl text-center text-gray-950"
                  >Confirm Your Uploads</AlertDialogTitle
                >
                <AlertDialogDescription
                  class="px-4 text-center font-normal text-base text-[#3F434A]">
                  Are you sure you want to submit?             </AlertDialogDescription>
              </AlertDialogHeader>
              <Alert class="mb-2 bg-[#EDF2F780] px-4 py-3 inline-flex">
                <img
                  class="mr-2"
                  src="~/assets/images/icons/info.svg"
                  alt="" />
                <AlertDescription class="text-sm text-[#5C6F7F]">
                  Please review the uploaded certificates and licenses to ensure they’re clear and correct. Once confirmed, these documents will be submitted for verification.                </AlertDescription>
              </Alert>
              <AlertDialogFooter class="flex gap-2.5">
                <AlertDialogCancel type="button" class="w-full h-11 py-3 px-6">Edit Details</AlertDialogCancel>
                <AlertDialogAction @click="onSubmit" type="button" class="w-full h-11 py-3 px-6 bg-primary-600">Yes, Submit</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
  
      </div>
   
    </form>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { useDropzone } from "vue3-dropzone"; // Ensure to use the dropzone library compatible with Vue
import { serialize } from "object-to-formdata";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useAuthStore } from '~/store/auth';
import { useProfileStore } from '~/store/profile';
import { LoaderCircle } from "lucide-vue-next";

const { isFieldDirty, handleSubmit, values } = useForm({
});
const LSprofile = ref()

const profileStore = useProfileStore()
const loading  = ref(false);
const success = ref(false)
const cac_doc = ref({})
const cac_doc_errors = ref({})
const tin_doc = ref({})
const tin_doc_errors = ref({})
const license_doc = ref({})
const license_doc_errors = ref({})

const certificates = computed(() => {
  return profileStore.certificates
})
function bytesToKilobytes(bytes) {
  return Math.floor(bytes / 1024);
}
// Dropzone 1
function onDrop1(acceptedFiles, rejectReasons) {
  cac_doc.value = acceptedFiles[0]
  if (rejectReasons[0]) {
    cac_doc_errors.value = rejectReasons[0].errors[0]
  }
}
const deleteCac = () => {
  cac_doc.value = {}
  cac_doc_errors.value = {}
}

const { getRootProps: getRootProps1, getInputProps: getInputProps1 } = useDropzone({ onDrop: onDrop1, maxSize: 560000, accept: ".pdf, .jpeg, .png", maxFiles: 1});

function onDrop2(acceptedFiles, rejectReasons) {
  tin_doc.value = acceptedFiles[0]
  if (rejectReasons[0]) {
    tin_doc_errors.value = rejectReasons[0].errors[0]
  }
}
const deleteTin = () => {
  tin_doc.value = {}
  tin_doc_errors.value = {}
}
const { getRootProps: getRootProps2, getInputProps: getInputProps2 } = useDropzone({ onDrop: onDrop2, maxSize: 560000, accept: ".pdf, .jpeg, .png", maxFiles: 1 });

function onDrop3(acceptedFiles, rejectReasons) {
  license_doc.value = acceptedFiles[0]
  if (rejectReasons[0]) {
    license_doc_errors.value = rejectReasons[0].errors[0]
  }
}

const deleteLicense = () => {
  license_doc.value = {}
  license_doc_errors.value = {}
}
const { getRootProps: getRootProps3, getInputProps: getInputProps3 } = useDropzone({ onDrop: onDrop3, maxSize: 560000, accept: ".pdf, .jpeg, .png", maxFiles: 1 });


const onSubmit = handleSubmit(async(values) => {
     
  const formData = new FormData();
  // Append each property to the FormData object
  formData.append('cac_certificate', cac_doc.value);
  formData.append('tin_certificate', tin_doc.value);
  formData.append('profile', LSprofile?.value?.id);
  formData.append('other_license', license_doc.value)
    // const form = serialize(newBody);
    console.log('values', values, formData, LSprofile.value?.id)
      try {
        loading.value = true;
      const response =  await profileStore.uploadCertificates(LSprofile?.value?.id,formData);
      console.log('response', response.data?.data)
      if (response.data && response?.data?.data) {
        loading.value = false;
        success.value = true;
        profileStore.getCertificates()
        // redirect to dashboard
        // console.log('here', response?.data?.data?.id)

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
onMounted(() => {
  if (process.client) {
        const storedProfile = getItem("profile");
        if (storedProfile && storedProfile !== undefined) {
          LSprofile.value  =  JSON.parse(storedProfile);
          // = user
        }
      }
  profileStore.getCertificates()
})
</script>

<style lang="scss" scoped>

</style>