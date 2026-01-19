<template>
  <div>
    <NuxtLayout name="general" title="Frequently Asked Questions" subtitle="Frequently Asked Questions">
      <div class="container py-4">
        <LayoutsBreadcrumb :breadcrumbs="[{ text: 'FAQs' }]"></LayoutsBreadcrumb>
        
        <div class="py-6">
          <div class="max-w-4xl mx-auto">
            <!-- Search Section -->
            <div class="mb-8">
              <FormField v-slot="{ componentField }" name="search">
                <FormItem class="space-y-1">
                  <FormControl>
                    <div class="relative flex border items-center border-primary rounded-md">
                      <Input 
                        v-model="searchQuery" 
                        v-bind="componentField" 
                        id="search" 
                        type="text" 
                        placeholder="Search for questions..." 
                        class="pl-10 h-11 border-0 ring-0 disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] rounded-[8px] focus-visible:ring-0 focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-[#333] text-sm"
                        @keyup.enter="searchFaqs"
                      />
                      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                        <Search class="size-5 text-muted-foreground" />
                      </span>
                      <Button @click="searchFaqs" type="button" size="lg" class="h-11 rounded-none">
                        Search
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              </FormField>
            </div>

            <!-- FAQs Accordion Section -->
            <div class="space-y-4">
              <div v-if="loadingFaqs" class="flex justify-center items-center py-12">
                <LayoutsLoader />
              </div>
              
              <template v-else>
                <!-- Filtered FAQs -->
                <div v-if="faqs?.results?.length > 0" class="space-y-4">
                  <Accordion type="single" collapsible class="w-full">
                    <AccordionItem
                      v-for="(faq, index) in faqs.results"
                      :key="faq.id || index"
                      :value="`item-${index}`"
                      class="border border-gray-200 my-2 px-6"
                    >
                      <AccordionTrigger class="py-4 text-left hover:no-underline">
                        <div class="flex items-start gap-4">
                          <div class="mt-1">
                            <HelpCircle class="size-5 text-primary" />
                          </div>
                          <span class="font-medium text-[16px] text-black">
                            {{ faq.question }}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent class="pb-4 pt-2">
                        <div class="flex gap-4">
                          <div class="mt-1">
                            <MessageSquareText class="size-5 text-gray-400" />
                          </div>
                          <div class="text-gray-600 text-[16px] font-normal leading-relaxed">
                            {{ faq.answer }}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <!-- No results message -->
                <div v-else-if="!loadingFaqs && faqs?.results?.length === 0" class="text-center py-12">
                  <div class="mx-auto size-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                    <HelpCircle class="size-8 text-gray-400" />
                  </div>
                  <h3 class="text-xl font-semibold text-gray-700 mb-2">
                    No questions found
                  </h3>
                  <p class="text-gray-500">
                    Try searching with different keywords
                  </p>
                </div>
              </template>
            </div>

            <!-- Contact Support Section -->
            <div class="mt-12 pt-8 border-t border-gray-200">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                  Still have questions?
                </h3>
                <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Please contact our support team.
                </p>
                <Button size="lg" class="px-8">
                  <Mail class="size-5 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Search, HelpCircle, MessageSquareText, Mail } from 'lucide-vue-next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useProfileStore } from '~/store/profile'

const profileStore = useProfileStore()
const searchQuery = ref('')

const faqs = computed(() => profileStore.faqs)
const loadingFaqs = computed(() => profileStore.loadingFaqs)

const searchFaqs = () => {
  profileStore.getFaqs(searchQuery.value, '1')
}

watch(
  () => searchQuery.value,
  (newValue) => {
    if (newValue === '') {
      profileStore.getFaqs('', '1')
    }
  }
)

onMounted(() => {
  profileStore.getFaqs('', '1')
})
</script>