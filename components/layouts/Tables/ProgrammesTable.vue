<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus } from 'lucide-vue-next';

const tableData = [
  {
    ItemID: 'ITM001',
    ProductName: 'Product 1',
    Category: 'Category A',
    UnitPrice: 10.99,
    Quantity: 10,
    ReOrderValue: 50,
    LastUpdatedPrice: 10.99,
    Status: 'Active',
    Actions: 'Edit/Delete'
  },
  {
    ItemID: 'ITM002',
    ProductName: 'Product 2',
    Category: 'Category B',
    UnitPrice: 9.99,
    Quantity: 20,
    ReOrderValue: 40,
    LastUpdatedPrice: 9.99,
    Status: 'Inactive',
    Actions: 'Edit/Delete'
  },
  {
    ItemID: 'ITM003',
    ProductName: 'Product 3',
    Category: 'Category C',
    UnitPrice: 12.99,
    Quantity: 15,
    ReOrderValue: 60,
    LastUpdatedPrice: 12.99,
    Status: 'Active',
    Actions: 'Edit/Delete'
  },
  // Add more objects for each table row
];
// const stockInventoryStore = useStockInventoryStore()
const isRequestStockOpen = ref(false)
const isDetailsOpen = ref(false)
const  isMultipleRequestOpen = ref(false)

const requestLists = ref({})

const loading = ref(false)

defineProps({
  data: {
    type: Array,
    required: true
    
  }
})

onMounted(() => {
  // stockInventoryStore.getUngroupedOrdersList()
})
</script>

<template>
  <div>
    <div class="bg-white border-t">
      <div
      class="flex justify-between items-center px-6 py-[19px] border-b-[1.5px] border-gray-200">
      <div class="flex items-center space-x-2">
        <div
          class="relative flex gap-1.5 items-center px-4 bg-[#F9FAFB] rounded-lg border">
          <span class="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.7552 18.5783L14.781 13.6041C16.1365 11.9463 16.803 9.83087 16.6425 7.69543C16.4821 5.55999 15.507 3.5679 13.919 2.13123C12.331 0.694554 10.2515 -0.0767949 8.1107 -0.0232684C5.96991 0.0302581 3.93158 0.904564 2.41734 2.41881C0.9031 3.93305 0.0287933 5.97137 -0.0247333 8.11216C-0.0782598 10.253 0.693089 12.3324 2.12976 13.9205C3.56644 15.5085 5.55852 16.4836 7.69397 16.644C9.82941 16.8044 11.9448 16.138 13.6027 14.7825L18.5768 19.7566C18.734 19.9084 18.9445 19.9924 19.163 19.9905C19.3815 19.9886 19.5905 19.901 19.745 19.7465C19.8995 19.592 19.9872 19.383 19.9891 19.1645C19.991 18.946 19.907 18.7355 19.7552 18.5783ZM8.33266 15.0008C7.01412 15.0008 5.72519 14.6098 4.62886 13.8773C3.53253 13.1447 2.67805 12.1035 2.17347 10.8854C1.66888 9.66718 1.53686 8.32673 1.79409 7.03353C2.05133 5.74032 2.68627 4.55243 3.61862 3.62008C4.55097 2.68773 5.73885 2.05279 7.03206 1.79556C8.32527 1.53832 9.66571 1.67035 10.8839 2.17493C12.1021 2.67952 13.1433 3.534 13.8758 4.63033C14.6083 5.72665 14.9993 7.01559 14.9993 8.33413C14.9973 10.1016 14.2943 11.7962 13.0445 13.046C11.7947 14.2958 10.1002 14.9988 8.33266 15.0008Z"
                fill="#98A2B3" />
            </svg>
          </span>
  
          <input
            type="text"
            placeholder="Search"
            class="py-2.5 w-[233px] bg-transparent focus:outline-none" />
        </div>
        <button
          @click="isDrawerOpen = true"
          class="px-4 w-[99px] py-2.5 flex items-center text-base font-normal justify-center gap-1.5 border rounded-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.6672 20C11.4869 20 11.3115 19.9415 11.1672 19.8333L7.83389 17.3333C7.73039 17.2557 7.64639 17.1551 7.58853 17.0393C7.53067 16.9236 7.50055 16.796 7.50055 16.6667V11.9833L1.65389 5.40583C1.23865 4.9374 0.967536 4.35901 0.87312 3.7402C0.778704 3.12138 0.865007 2.48846 1.12166 1.91751C1.37831 1.34656 1.79438 0.861882 2.31987 0.521721C2.84536 0.181561 3.45791 0.000395349 4.08389 0L15.9172 0C16.5431 0.000734209 17.1555 0.182199 17.6808 0.522589C18.2061 0.862978 18.6219 1.34781 18.8783 1.91882C19.1347 2.48983 19.2207 3.12273 19.126 3.74146C19.0314 4.36018 18.7601 4.93841 18.3447 5.40667L12.5006 11.9833V19.1667C12.5006 19.3877 12.4128 19.5996 12.2565 19.7559C12.1002 19.9122 11.8882 20 11.6672 20ZM9.16722 16.25L10.8339 17.5V11.6667C10.8341 11.4626 10.9091 11.2657 11.0447 11.1133L17.1014 4.29917C17.3033 4.0709 17.4351 3.7892 17.4809 3.48788C17.5267 3.18655 17.4846 2.87842 17.3595 2.60046C17.2345 2.32251 17.0319 2.08655 16.7761 1.92091C16.5202 1.75527 16.222 1.66699 15.9172 1.66667H4.08389C3.77926 1.66713 3.48124 1.75546 3.22556 1.92105C2.96988 2.08665 2.76739 2.3225 2.64239 2.60029C2.51739 2.87809 2.47518 3.18605 2.52083 3.48723C2.56647 3.78842 2.69803 4.07004 2.89972 4.29833L8.95722 11.1133C9.09257 11.2659 9.16728 11.4627 9.16722 11.6667V16.25Z"
              fill="#667085" />
          </svg>
          <span class=""> Filter </span>
        </button>
      </div>
      <NuxtLink to="/dashboard/programmes/add">
        <Button
        size="lg"
        class="gap-2 ml-auto mr-4 [&_svg]:size-6 text-base "
        >
        Add New
        <Plus />
      </Button>
      </NuxtLink>
      
    </div>
    </div>
   
  <Table class="border border-gray-200  ">
    <TableHeader>
      <TableRow class="bg-white text-sm font-normal text-gray-500">
        <TableHead class="w-[50px]">
          <div class="flex items-center justify-center h-full">
            <Checkbox id="terms" class="h-5 w-5 border border-gray-300 rounded-md data-[state=checked]:border-[#088AD8] data-[state=checked]:bg-primaryBlue-25 data-[state=checked]:text-primaryBlue-500" />
          </div>
        </TableHead>
        
        <TableHead class="text-center">Programme Title</TableHead>
        <TableHead class="text-center">Sector</TableHead>
        <TableHead class="text-center">Program Mode</TableHead>

        <TableHead class="text-center">Application Deadline</TableHead>
        <TableHead class="text-center">Approval Status</TableHead>
        <TableHead class="text-center">Action</TableHead>
       
      </TableRow>
    </TableHeader>
    <TableBody class="bg-white">
      <TableRow v-if="loading">
        <TableCell colspan="10" class="text-center">
          <LayoutsPageLoader/>
        </TableCell>
      </TableRow>
      <TableRow  v-else-if="data && data?.length === 0" class="h-40">
        <TableCell colspan="10" class="p-4 text-center">
          <div class=" flex items-center justify-center flex-col gap-2.5">
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.5" y="2" width="32" height="32" rx="16" fill="white"/>
              <rect x="2.5" y="2" width="32" height="32" rx="16" stroke="#CEE8F7" stroke-width="4"/>
              <g clip-path="url(#clip0_11060_11818)">
              <path d="M23.1667 12.0003H18.8147C18.7116 12.001 18.6097 11.9782 18.5167 11.9337L16.4127 10.8777C16.1349 10.7394 15.8289 10.6672 15.5187 10.667H13.8333C12.9496 10.6681 12.1024 11.0196 11.4775 11.6445C10.8526 12.2694 10.5011 13.1166 10.5 14.0003V22.0003C10.5011 22.8841 10.8526 23.7313 11.4775 24.3562C12.1024 24.9811 12.9496 25.3326 13.8333 25.3337H23.1667C24.0504 25.3326 24.8976 24.9811 25.5225 24.3562C26.1474 23.7313 26.4989 22.8841 26.5 22.0003V15.3337C26.4989 14.4499 26.1474 13.6027 25.5225 12.9778C24.8976 12.3529 24.0504 12.0014 23.1667 12.0003ZM13.8333 12.0003H15.5187C15.6218 11.9996 15.7237 12.0224 15.8167 12.067L17.9207 13.1197C18.1981 13.2591 18.5041 13.3324 18.8147 13.3337H23.1667C23.5654 13.3343 23.9548 13.4541 24.2849 13.6777C24.615 13.9012 24.8708 14.2184 25.0193 14.5883L11.8333 14.663V14.0003C11.8333 13.4699 12.044 12.9612 12.4191 12.5861C12.7942 12.211 13.3029 12.0003 13.8333 12.0003ZM23.1667 24.0003H13.8333C13.3029 24.0003 12.7942 23.7896 12.4191 23.4145C12.044 23.0395 11.8333 22.5308 11.8333 22.0003V15.9963L25.1667 15.921V22.0003C25.1667 22.5308 24.956 23.0395 24.5809 23.4145C24.2058 23.7896 23.6971 24.0003 23.1667 24.0003Z" fill="#374957"/>
              </g>
              <defs>
              <clipPath id="clip0_11060_11818">
              <rect width="16" height="16" fill="white" transform="translate(10.5 10)"/>
              </clipPath>
              </defs>
              </svg>
  
              <span class="text-lg text-[#3F434A] font-medium">
                You do not have any programme
              </span>
          </div>
        </TableCell>
      </TableRow>
      <TableRow v-else v-for="item in requestLists?.data" class="text-sm text-gray-900 font-normal" :key="item.id">
        <TableCell class="text-left py-4 px-6 w-[50px]">
          <div class="flex items-center justify-center h-full">
            <Checkbox id="terms"
              class="h-5 w-5 border border-gray-300 rounded-md data-[state=checked]:border-[#088AD8] data-[state=checked]:bg-primaryBlue-25 data-[state=checked]:text-primaryBlue-500" />
          </div>
        </TableCell>
        <TableCell class=" py-4 px-6">{{item.order_number}}</TableCell>
        <TableCell class="text-center py-4 px-6 capitalize"> {{ item.created_at ? formattedDate(item.created_at) : 'N/A' }} </TableCell>
        
        <TableCell class="text-center py-4 px-6 capitalize"> {{ item.category ? item.category : 'N/A' }} </TableCell>
        <TableCell class="text-center py-4 px-6 capitalize"> {{ item.item_name ? item.item_name : 'N/A' }} </TableCell>
        <TableCell class="text-center py-4 px-6 capitalize"> {{ item.quantity ? item.quantity : 'N/A' }} </TableCell>

        <TableCell class="text-center py-4 px-6">
          <div class="text-center">
            <div>
              <p class="text-gray-900 text-nowrap">
                {{ item.requested_by_name }}
              </p>
              
            </div>
          </div>
        </TableCell>
        <TableCell class="text-center py-4 px-6">
          <div class="text-center">
            <div>
              <p class="text-gray-900 text-nowrap">
                {{ item.supplied_by_name }}
              </p>
              
            </div>
          </div>
        </TableCell>
        <TableCell class="text-center py-4 px-6 capitalize"> {{ item.supplied_date ? formatDateTime(item.supplied_date) : 'N/A' }} </TableCell>

        <TableCell class="text-center py-4 px-6">
          <span class="px-2 py-1 text-sm font-normal capitalize rounded-full" :class="item?.status === 'completed'
            ? 'bg-success-50 text-success-700'
            : item?.status === 'pending' ? 'text-[#026AA2] bg-[#F0F9FF]' : 'text-error-700 bg-error-50'">
            {{ item.status }}
          </span>

        </TableCell>
        
      </TableRow>
    </TableBody>
  </Table>
  <!-- <LayoutsPageModalsStockDetailsModal :isOpen="isDetailsOpen" @close="isDetailsOpen = false"/>
  <LayoutsPageModalsRequestStock :isOpen="isRequestStockOpen" @close="isRequestStockOpen  = false"/>
  <LayoutsPageModalsMultipleRequest :isOpen="isMultipleRequestOpen" @close="isMultipleRequestOpen  = false"/> -->

</div>
  
</template>