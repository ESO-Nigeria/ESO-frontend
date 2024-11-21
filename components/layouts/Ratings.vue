<template>
  <div class="ratings-container border p-5 border-[#98A2B3] rounded-md my-3">
    <div v-if="profileRatings?.length > 0 || writeReview">
      <h2 class="text-base text-[#1C1C1E] mb-3">{{ profile?.user?.organization_name }} Ratings</h2>
    
      <div  class=" grid grid-cols-1 md:grid-cols-[350px_minmax(0,1fr)] gap-4">
        <!-- Ratings Summary Section -->
        <div  class="">
          <div class="">
            <div class="ratings-summary flex-col space-y-2">
              <p class="text-lg text-[#1C1C1E]"><strong>{{ profile?.average_rating }} out of 5</strong></p>
              <star-rating class="justify-center" :star-size="25" :padding="3" :rating="profile?.average_rating" :read-only="true" :increment="0.01" :show-rating="false" ></star-rating>
              <p class="text-base text-[#1C1C1E]">{{ profile?.total_ratings }} Ratings</p>
            </div>
           
            <div class="stars-summary mt-2 space-y-3">
              <div
              v-for="(item, index) in ratingBreakdown"
              :key="index"
              class="text-nowrap inline-flex items-center gap-3 "
            >
              <span class="text-sm text-[#010F54]">
                {{ item.star }} Star - {{ item.label }}
              </span>
        
              <!-- Star Rating Component -->
              <star-rating
                class="-mt-2"
                :inline="true"
                :star-size="20"
                :padding="3"
                :rating="item.star"
                :read-only="true"
                :increment="0.01"
                :show-rating="false"
              ></star-rating>
        
              <span class="text-sm text-[#010F54]">
                {{ item.percentage }}% ({{ item.count }})
              </span>
            </div>
            </div>
          </div>
          <div class="mt-3 space-y-3">
            <p class="text-base text-[#1C1C1E] font-semibold">Review this ESO</p>
            <p class="text-sm text-[#232E3F]]">Share your thoughts with other MSMEs</p>
            <Button class="w-full"  @click="writeReview = true" type="button">Write a review</Button>
          </div>
         
        </div>
        <div v-if="writeReview == false">
          <div  v-for="rate, index in profileRatings" :key="index">
            <rate-card 
              :user="rate.name" 
              :rating="rate.rating" 
              :review-title="rate.title" 
              :review-content="rate.comment"
              :created-at="rate.created_at"
              />
          </div>
        </div>
        
        <!-- Review Form Section -->
         <div v-else class="m-auto">
          <div class="lg:w-[519px] p-6 space-y-6">
            <div class="space-y-4">
              <h2 class="text-[#1C1C1E] font-semibold text-center">Your opinion matters to us</h2>
              <star-rating class="justify-center" :star-size="48" v-model:rating="rating" :padding="8"   :increment="1" :show-rating="false" ></star-rating>
            </div>
            <form  class="space-y-6">
              <FormField  v-slot="{ componentField }" name="name">
                <FormItem class="space-y-1">
                  <FormLabel class="text-[#3F434A] text-base font-medium">Name *</FormLabel>
                  <FormControl>
                    <Input type="text"
                      class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1px]  rounded-[6px] focus-visible:ring-[1px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                      placeholder="Enter name" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              </FormField>
              <FormField v-slot="{ componentField }" name="email">
                <FormItem class="space-y-1">
                  <FormLabel class="text-[#3F434A] text-base font-medium">Email Address *</FormLabel>
                  <FormControl>
                    <div class="relative w-full  items-center">
                      <Input type="email" 
                        class="!pl-10 h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1px]  rounded-[6px] focus-visible:ring-[1px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                        placeholder="Enter email address" v-bind="componentField" />
                      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                        <Mail class="size-5 text-muted-foreground" />
                      </span>
                    </div>
      
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              </FormField>
              <FormField  v-slot="{ componentField }" name="title">
                <FormItem class="space-y-1">
                  <FormLabel class="text-[#3F434A] text-base font-medium">Title *</FormLabel>
                  <FormControl>
                    <Input type="text"
                      class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1px]  rounded-[6px] focus-visible:ring-[1px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                      placeholder="Enter title" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              </FormField>
              <FormField  v-slot="{ componentField }" name="message">
                <FormItem class="space-y-1">
                  <FormLabel class="text-[#3F434A] text-base font-medium">Your Feedback *</FormLabel>
                  <FormControl>
                    <Textarea 
                      class="h-11 border-0 ring-[#D0D5DD] disabled:bg-[#EAECF0] focus:bg-[#F5F5F5] ring-[1px]  rounded-[6px] focus-visible:ring-[1px] focus-visible:ring-offset-0 border-[#D0D5DD] text-[#3F434A] placeholder:text-gray-400 text-sm"
                      placeholder="Enter Your Feedback" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                
              </FormField>
              
              <div class="flex flex-col gap-5">
                <Button :disabled="submitting" type="button" @click="onSubmit" size="lg" class="font-normal"> Submit <MoveRight class="size-6" /> </Button>
                <Button variant="outline" size="lg" type="button" class="font-normal" @click="cancelReview">Cancel</Button>
              </div>
            </form>
          </div>
         </div>
       
      </div>
    </div>
    

    <div v-else>
      <p class="text-lg font-semibold">Be the first to rate us</p>
      <p> No review yet. <span class="text-primary cursor-pointer" @click="writeReview = true">Write a  review</span> </p>
    </div>
  </div>
 
</template>

<script setup>
import { ref } from 'vue';
import StarRating from 'vue-star-rating';
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { ArrowBigRight, Mail, MoveRight } from 'lucide-vue-next';
import RateCard from './RateCard.vue';
import { toast } from 'vue-sonner';

// Rating breakdown data

const props = defineProps({
  profile_id:{
    type: Number,
  },
  reviews: {
    type: Array,
  },
  profile:{
    type: Object,
  }
})


// Convert the raw data object into an array for easier looping
const ratingBreakdown = computed(() =>
  Object.keys(props?.profile?.star_stats || {}).map((star) => ({
    star: parseInt(star), // Star value (1, 2, 3, etc.)
    count: props?.profile?.star_stats[star]?.count || 0, // Ensure count is defined
    percentage: props?.profile?.star_stats[star]?.percentage || 0, // Ensure percentage is defined
    label: getLabel(parseInt(star)), // Add a label for each rating
  }))
);

// Helper function to generate star labels
function getLabel(star) {
  const labels = {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  };
  return labels[star] || "Unknown";
}

const {eso_id} = useRoute().params;

const rating = ref(0)
const profileRatings = ref([])
const writeReview = ref(false)
const submitting = ref(false)

const formSchema = toTypedSchema(
  z.object({
    name: z.string({ required_error: "Name is required."}),
    title: z.string({ required_error: "Title is required."}),
    message: z.string({ required_error: "Message is required."}),
    email: z.string({ required_error: "Email is required."})
      .email({ message: "Must be a valid email" }),
   
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const cancelReview = () => {
  writeReview.value = false
  form.handleReset()
  rating.value = 0
};
const onSubmit = form.handleSubmit(async(values) => {
  const body = {
    "rated_profile": eso_id,
    "email": values.email,
    "name": values.name,
    "title": values.title,
    "rating": rating.value,
    "comment": values.message
}
    submitting.value = true
    const response = await apiPostRequest(`/api/ratings/`, body)

    if (response?.data && response?.data?.status == 201) {
      const reviews = await apiGetUnRestrictedRequest(`/api/ratings/${eso_id}/profile-ratings/`)
      profileRatings.value = reviews.data
      cancelReview()
    }
    if (response?.error && response?.error?.detail) {
      toast.error(response.error.detail || '')
    }
    if (response?.error && response?.error?.rating) {
      toast.error( 'Error: Rating required. Please choose a star to proceed.')
    }
    submitting.value = false
})

onMounted(async () => {
    const response = await apiGetUnRestrictedRequest(`/api/ratings/${eso_id}/profile-ratings/`)
    profileRatings.value = response.data
})
</script>


<style scoped>
.ratings-container {
 
  padding: 20px;
}

.ratings-summary {
  padding: 16px;
  display: flex;
  text-align: center;
  background: #ECFDF3;
  border-radius: 8px;
}

.ratings-overview p {
  margin: 5px 0;
}

.stars-summary .rating-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.write-review-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #004b23;
  color: white;
  border: none;
  cursor: pointer;
}

.review-form {
  width: 50%;
}

.stars-form {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.stars-form .form-star {
  font-size: 20px;
  color: gold;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

input[type="checkbox"] {
  margin-right: 5px;
}

.form-actions {
  display: flex;
  gap: 10px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #004b23;
  color: white;
  border: none;
  cursor: pointer;
}

.cancel-button {
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
}
</style>
