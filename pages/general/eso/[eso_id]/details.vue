<template>
  <div>
    <NuxtLayout name="general" :title="`${ESO?.user?.organization_name || 'Loading....'}`">
      <div v-if="loading" class="flex h-screen justify-center items-center">
        <LayoutsLoader />
      </div>
      <div v-else class="container py-6">
        <LayoutsBreadcrumb
          :breadcrumbs="[
            { text: 'ESOs', href: '/general/esos' },
            {text: `${ESO?.user?.organization_name}`}
            ]"></LayoutsBreadcrumb>
            
        <div class="py-3 h-full">
          <div class="grid h-full items-stretch gap-8 md:grid-cols-[260px_minmax(0,1fr)]">
            <div class=" bg-white rounded-md ">
              <div>
                <div>
                  <div class="h-[290px] bg-[#EAECF0] mt-4"> 
                    <img :src="ESO?.logo_url || '~/assets/images/placeholderImg.png'" class="h-full w-full rounded-md object-contain"/>
                  </div>
                  <div class="mt-3">
                    <div class="space-y-3">
                      <!-- <div class="space-y-1 text-center">
                    <p class="text-[32px] text-primary font-bold">50</p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      Programmes
                    </p>
                  </div> -->
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Organization Type</p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      {{organization_types?.find(type => type.id == ESO?.user?.organization_type)?.label}}
                    </p>
                  </div>
                  <div v-if="ESO?.number_of_years_in_operation !== 0" class="space-y-2">
                    <p class="text-sm text-primary font-bold">Number of years in Operation</p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      {{ ESO?.number_of_years_in_operation }}
                      <!-- {{organization_types?.find(type => type.id == ESO?.user?.organization_type)?.label }} -->
                    </p>
                  </div>
                  <div class="space-x-2 flex items-start">
                    <p class="text-sm font-bold">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99906 8C8.52648 8 9.04205 7.8436 9.48058 7.55059C9.91911 7.25757 10.2609 6.84109 10.4627 6.35382C10.6646 5.86655 10.7174 5.33038 10.6145 4.81309C10.5116 4.29581 10.2576 3.82066 9.88468 3.44772C9.51174 3.07478 9.03658 2.8208 8.5193 2.71791C8.00202 2.61501 7.46584 2.66782 6.97857 2.86965C6.4913 3.07149 6.07483 3.41328 5.78181 3.85181C5.48879 4.29034 5.33239 4.80592 5.33239 5.33333C5.33239 6.04058 5.61335 6.71885 6.11344 7.21895C6.61354 7.71905 7.29182 8 7.99906 8ZM7.99906 4C8.26277 4 8.52056 4.0782 8.73982 4.22471C8.95909 4.37122 9.12998 4.57945 9.2309 4.82309C9.33182 5.06672 9.35822 5.33481 9.30678 5.59345C9.25533 5.8521 9.12834 6.08967 8.94187 6.27614C8.7554 6.46261 8.51782 6.5896 8.25918 6.64105C8.00054 6.69249 7.73245 6.66609 7.48882 6.56517C7.24518 6.46426 7.03694 6.29336 6.89044 6.07409C6.74393 5.85483 6.66573 5.59704 6.66573 5.33333C6.66573 4.97971 6.8062 4.64057 7.05625 4.39052C7.3063 4.14048 7.64544 4 7.99906 4ZM13.7724 6.10467L13.2931 5.94533C13.3793 5.19862 13.3068 4.4421 13.0801 3.72539C12.8535 3.00868 12.4779 2.34798 11.9781 1.78659C11.4782 1.22521 10.8653 0.77584 10.1795 0.467942C9.49382 0.160045 8.75074 0.000578321 7.99906 0C7.23757 0.00029398 6.48498 0.163796 5.79201 0.47949C5.09903 0.795184 4.48177 1.25574 3.98181 1.83012C3.48185 2.4045 3.1108 3.07936 2.89367 3.80925C2.67653 4.53913 2.61836 5.30707 2.72306 6.06133C2.08508 6.18029 1.49514 6.48128 1.02439 6.928C0.69851 7.23783 0.43944 7.61104 0.263113 8.02469C0.0867854 8.43834 -0.00307348 8.88368 -0.000939424 9.33333V12.05C0.000461639 12.7709 0.234922 13.472 0.667454 14.0487C1.09999 14.6254 1.7074 15.0468 2.39906 15.25L4.31239 15.85C4.63377 15.95 4.96848 16.0006 5.30506 16C5.61039 15.9996 5.91426 15.9579 6.20839 15.876L10.0617 14.736C10.405 14.6423 10.7671 14.6423 11.1104 14.736L12.7017 15.2693C13.0939 15.3648 13.5027 15.37 13.8972 15.2845C14.2917 15.199 14.6616 15.0251 14.9791 14.7758C15.2966 14.5266 15.5534 14.2085 15.73 13.8455C15.9067 13.4826 15.9987 13.0843 15.9991 12.6807V9.248C15.9975 8.55827 15.7828 7.88589 15.3841 7.32303C14.9855 6.76017 14.4225 6.33437 13.7724 6.104V6.10467ZM5.17106 2.508C5.5419 2.13566 5.98261 1.84022 6.46792 1.63862C6.95322 1.43703 7.47355 1.33325 7.99906 1.33325C8.52457 1.33325 9.0449 1.43703 9.53021 1.63862C10.0155 1.84022 10.4562 2.13566 10.8271 2.508C11.5752 3.26076 11.9957 4.27854 11.997 5.33982C11.9984 6.4011 11.5806 7.41997 10.8344 8.17467L8.46573 10.478C8.3421 10.5992 8.17587 10.6671 8.00273 10.6671C7.82959 10.6671 7.66336 10.5992 7.53973 10.478L5.17106 8.18467C4.42137 7.43026 4.0006 6.40989 4.0006 5.34633C4.0006 4.28277 4.42137 3.26241 5.17106 2.508V2.508ZM14.6657 12.6807C14.6661 12.8826 14.6205 13.0819 14.5322 13.2635C14.4439 13.4452 14.3154 13.6042 14.1564 13.7287C14.0061 13.8495 13.8311 13.9357 13.6438 13.9812C13.4564 14.0267 13.2613 14.0304 13.0724 13.992L11.5091 13.4667C10.9177 13.2968 10.291 13.2931 9.69773 13.456L5.84173 14.5947C5.47124 14.6969 5.07916 14.6902 4.71239 14.5753L2.78306 13.9753C2.3655 13.8546 1.99837 13.6016 1.73679 13.2545C1.47522 12.9073 1.33332 12.4847 1.33239 12.05V9.33333C1.3309 9.06386 1.38453 8.79692 1.49001 8.54894C1.59548 8.30095 1.75057 8.07717 1.94573 7.89133C2.25123 7.60018 2.64041 7.41223 3.05839 7.354C3.32713 8.02012 3.72731 8.62527 4.23506 9.13333L6.61306 11.4353C6.98473 11.7993 7.48421 12.0031 8.00439 12.0031C8.52458 12.0031 9.02405 11.7993 9.39573 11.4353L11.7711 9.12667C12.3029 8.59269 12.7149 7.95159 12.9797 7.246L13.3377 7.36467C13.726 7.50379 14.0618 7.7593 14.2995 8.09636C14.5372 8.43341 14.6651 8.83558 14.6657 9.248V12.6807Z" fill="#232E3F"/>
                      </svg>
                    </p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      {{ ESO?.address }}
                    </p>
                  </div>
                  <div class="space-x-2 flex items-start">
                    <p class="text-sm font-bold">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.66648 0.666755C8.66648 0.489944 8.73672 0.320375 8.86175 0.19535C8.98677 0.070326 9.15634 8.80828e-05 9.33315 8.80828e-05C11.1007 0.00202915 12.7952 0.705031 14.045 1.95485C15.2949 3.20468 15.9979 4.89924 15.9998 6.66676C15.9998 6.84357 15.9296 7.01314 15.8045 7.13816C15.6795 7.26318 15.51 7.33342 15.3331 7.33342C15.1563 7.33342 14.9868 7.26318 14.8617 7.13816C14.7367 7.01314 14.6665 6.84357 14.6665 6.66676C14.6649 5.25276 14.1025 3.89712 13.1026 2.89727C12.1028 1.89742 10.7471 1.33501 9.33315 1.33342C9.15634 1.33342 8.98677 1.26318 8.86175 1.13816C8.73672 1.01314 8.66648 0.843566 8.66648 0.666755V0.666755ZM9.33315 4.00009C10.0404 4.00009 10.7187 4.28104 11.2188 4.78114C11.7189 5.28123 11.9998 5.95951 11.9998 6.66676C11.9998 6.84357 12.0701 7.01314 12.1951 7.13816C12.3201 7.26318 12.4897 7.33342 12.6665 7.33342C12.8433 7.33342 13.0129 7.26318 13.1379 7.13816C13.2629 7.01314 13.3331 6.84357 13.3331 6.66676C13.3321 5.60621 12.9103 4.58941 12.1604 3.8395C11.4105 3.08958 10.3937 2.66781 9.33315 2.66676C9.15634 2.66676 8.98677 2.73699 8.86175 2.86202C8.73672 2.98704 8.66648 3.15661 8.66648 3.33342C8.66648 3.51023 8.73672 3.6798 8.86175 3.80483C8.98677 3.92985 9.15634 4.00009 9.33315 4.00009V4.00009ZM15.3951 11.1594C15.7815 11.5468 15.9984 12.0716 15.9984 12.6188C15.9984 13.1659 15.7815 13.6907 15.3951 14.0781L14.7885 14.7774C9.32848 20.0048 -3.95817 6.72142 1.18849 1.24409L1.95516 0.577421C2.343 0.201873 2.86311 -0.0058792 3.40296 -0.000888689C3.94281 0.00410182 4.45899 0.221434 4.83982 0.604088C4.86049 0.624755 6.09582 2.22942 6.09582 2.22942C6.46237 2.61451 6.66642 3.12604 6.66555 3.65769C6.66469 4.18934 6.45896 4.7002 6.09115 5.08409L5.31916 6.05476C5.74639 7.09283 6.37453 8.03625 7.16749 8.83082C7.96045 9.62538 8.90261 10.2554 9.93982 10.6848L10.9165 9.90809C11.3004 9.54057 11.8112 9.33509 12.3427 9.33434C12.8742 9.3336 13.3855 9.53764 13.7705 9.90409C13.7705 9.90409 15.3745 11.1388 15.3951 11.1594ZM14.4778 12.1288C14.4778 12.1288 12.8825 10.9014 12.8618 10.8808C12.7245 10.7446 12.5389 10.6682 12.3455 10.6682C12.1521 10.6682 11.9665 10.7446 11.8291 10.8808C11.8111 10.8994 10.4665 11.9708 10.4665 11.9708C10.3759 12.0429 10.268 12.0902 10.1536 12.1079C10.0391 12.1257 9.92204 12.1133 9.81382 12.0721C8.47012 11.5718 7.24964 10.7886 6.23504 9.77548C5.22044 8.76237 4.43542 7.54304 3.93316 6.20009C3.88862 6.09039 3.8741 5.97081 3.89109 5.85365C3.90808 5.73648 3.95597 5.62595 4.02982 5.53342C4.02982 5.53342 5.10116 4.18809 5.11916 4.17076C5.25533 4.03341 5.33174 3.84783 5.33174 3.65442C5.33174 3.46101 5.25533 3.27543 5.11916 3.13809C5.09849 3.11809 3.87116 1.52142 3.87116 1.52142C3.73176 1.39643 3.54983 1.32949 3.36266 1.33432C3.17549 1.33915 2.99725 1.4154 2.86449 1.54742L2.09783 2.21409C-1.6635 6.73676 9.85048 17.6121 13.8138 13.8668L14.4211 13.1668C14.5635 13.0349 14.6489 12.8529 14.6595 12.6592C14.6701 12.4655 14.6049 12.2753 14.4778 12.1288V12.1288Z" fill="#232E3F"/>
                      </svg>
                    </p>
                    <p class="text-sm text-[#3F434A] font-normal">
                      {{ ESO?.company_phone }}
                    </p>
                  </div>
                  <div class="flex gap-x-2">
                    <a class="" v-for="link in ESO?.social_links" :href="checkLink(link.url)" :key="link?.id" target="_blank" rel="noopener noreferrer">
                      <span v-if="link?.platform == 'TWITTER'">
                        <img src="~/assets/images/icons/twitter.svg" alt="social_icon" />
                      </span>
                      <span v-if="link?.platform == 'FACEBOOK'">
                        <img src="~/assets/images/icons/facebook.svg" alt="social_icon" />
                      </span>
                      <span v-if="link?.platform == 'LINKEDIN'">
                        <img src="~/assets/images/icons/linkedIn.svg" alt="social_icon" />
                      </span>
                      <span v-if="link?.platform == 'INSTAGRAM'">
                        <img src="~/assets/images/icons/instagram.svg" alt="social_icon" />
                      </span>
                    </a>
                  </div>
                  <div v-if="ESO?.social_links?.length > 0 && ESO.social_links?.find(type => type.platform == 'WEBSITE')?.url">
                    <NuxtLink :to="checkLink(ESO.social_links?.find(type => type.platform == 'WEBSITE')?.url)" target="_blank" class="w-full mt-3">
                    <p size="lg" class="py-3 text-center  text-sm px-5 h-11 w-full bg-primary text-white rounded-md"  type="button" >
                   Visit Website
                  </p>
                  
                </NuxtLink>
                  </div>
                  
                  </div>
                    <div class=" flex divide-x-2">
          <!-- <p class=" text-sm text-[#FE7102] font-normal px-1 ">
            Free
          </p> -->
          <!-- <p class="text-secondary-body-contrast text-nowrap text-sm px-1 ">
            Startup (Post-revenue)
          </p> -->
        </div>
        <!-- <div>
          <span class="text-secondary-body-contrast  text-sm px-1 ">
            Status: <span class="text-[#257F4A] capitalize">{{  ESO?.approval_status }}</span>
          </span>
        </div> -->
                 
       
      </div>
                </div>
              </div>
            </div>
            <div class=" bg-white rounded-md mt-4">
              <div class="flex gap-4 flex-col">
                <div class="space-y-6">
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Sector</p>
                    <div class="flex flex-row gap-2 flex-wrap mt-2 font-normal">
                     
                      <span
            v-for="tag in  ESO?.sectors"
            :key="tag"
            class="bg-[#ECFDF3] text-secondary-body-500 text-xs px-2 py-1 rounded-md"
          >
          {{sectors?.find(type => type.id == tag).label }}
          </span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Brief Description</p>
                    <p class="text-sm text-[#3F434A] font-normal" v-html="ESO.description"></p>
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-primary font-bold">Services</p>
                    <p class="text-sm text-[#3F434A] font-normal">
                    {{ ESO.services || 'N/A' }}
                    </p>
                  </div>
                
                 
                </div>
                

                <!-- <div class="flex justify-end mt-6 gap-4">
                  <Button size="lg" class="py-3 px-5 h-11 w-full"  type="button" >
                    Apply Now
                  </Button>
                  <Button class="py-3 px-5 h-11 w-full bg-[#257F4A]" size="lg" type="button">
                    Visit Website
                  </Button>
                 
                
                </div> -->
              </div>
            </div>
          </div>
          <div class="py-3">
            <p class="text-primary text-lg font-medium">Ratings</p>
            <LayoutsRatings :profile="ESO"/>
          </div>
          
        </div>
      </div>
    </NuxtLayout>

  </div>
</template>

<script setup>
import { CalendarDays } from 'lucide-vue-next';
import { useProfileStore } from '~/store/profile';
import { useDayjs } from '#dayjs' // not need if you are using auto import
import { organization_types, sectors } from '~/lib/data';
import { checkLink } from '~/lib/utils';

const dayjs = useDayjs()

const { eso_id } = useRoute().params
const profileStore = useProfileStore()

const ESO = computed(() => {
  return profileStore.singleESO
})
const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getSingleESO(eso_id)
})

</script>

<style lang="scss" scoped>

</style>