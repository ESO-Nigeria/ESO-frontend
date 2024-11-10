<template>
  <div>
    <NuxtLayout name="general">
      <section class="relative py-12 overflow-hidden  sm:pb-16 lg:pb-20 xl:pb-24">
        <div class="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                <div>
                    <h1 class="text-4xl font-bold  sm:text-5xl ">Enterprise Support Organisations (ESO) Collaborative</h1>
                    <p class="mt-4 text-xl font-normal text-[#475467]  sm:mt-8">We are a group of Professionals providing support to MSMEs in Nigeria and building a stronger ecosystem 
                    </p>
                    <form action="#" method="POST" class="relative mt-8 rounded-md">
                        <div class="relative">
                            <div class="relative border flex rounded-md">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-6">
                                    <svg class="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input type="email" name="" id="" placeholder="Looking for a programme?" class="rounded-r-none block w-full py-4 pr-6  placeholder-gray-500 border border-transparent  rounded-md pl-14 focus:border-transparent focus:ring-0" />
                                <div class="inline-flex">
                                  <button type="submit" class="border rounded-r-md border-r inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest uppercase transition-all duration-200 bg-primary text-white  sm:w-auto sm:py-3 hover:opacity-90">Search</button>
                              </div>
                              </div>
                        </div>
                       
                    </form>
                    <div class="mt-4 ">
                        <NuxtLink to="/general/programmes" class="text-base text-[#257F4A] font-normal ">View all programmes</NuxtLink>
                    </div>
                </div>
                <div class="relative">
                  <img class=" w-full  rounded-tl-[142px] " src="~/assets/images/eso-hero-card.png" alt="" />
              </div>
              
            </div>
        </div>
    </section>
    <section>
      <div class="container  mx-auto relativea max-w-7xl">
        <div class="shadow rounded-[25px]  px-4  sm:px-6 lg:px-8 ">
          <div class="pt-8">
            <p class="text-2xl text-[#257F4A] mb-3">
              About Us
            </p>
            <p class="text-base text-[#475467]">
              This platform is a community resource developed by the ESO Collaborative which brings together government, the Nigeria Hubs Network, and other enterprise support organisations. It provides entrepreneurs, startups, businesses, freelancers etc. with extensive details of programmes provided by Enterprise Support Organisations (ESOs) in Nigeria.
            </p>
          </div>
          <h3 class="text-3xl leading-snug my-3 pt-5">
            Opportunities that grow  <br /> with your journey
          </h3>
          <div class="flex flex-wrap">
            <div class="xl:w-1/3 lg:w-1/2 md:w-full py-6 mt-1">
              <span class=" inline-flex items-center">
               
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_195_18747)">
                    <path d="M13.3333 13.3334C13.687 13.3334 14.0261 13.1929 14.2761 12.9429C14.5262 12.6928 14.6667 12.3537 14.6667 12.0001V4.00008C14.6667 3.64646 14.5262 3.30732 14.2761 3.05727C14.0261 2.80722 13.687 2.66675 13.3333 2.66675C12.9797 2.66675 12.6406 2.80722 12.3905 3.05727C12.1405 3.30732 12 3.64646 12 4.00008V12.0001C12 12.3537 12.1405 12.6928 12.3905 12.9429C12.6406 13.1929 12.9797 13.3334 13.3333 13.3334Z" fill="#FE7102"/>
                    <path d="M34.6667 13.3334C35.0203 13.3334 35.3594 13.1929 35.6095 12.9429C35.8595 12.6928 36 12.3537 36 12.0001V4.00008C36 3.64646 35.8595 3.30732 35.6095 3.05727C35.3594 2.80722 35.0203 2.66675 34.6667 2.66675C34.3131 2.66675 33.9739 2.80722 33.7239 3.05727C33.4738 3.30732 33.3333 3.64646 33.3333 4.00008V12.0001C33.3333 12.3537 33.4738 12.6928 33.7239 12.9429C33.9739 13.1929 34.3131 13.3334 34.6667 13.3334Z" fill="#FE7102"/>
                    <path d="M43 7.99991H37.6667V11.9999C37.6667 12.7779 37.3576 13.524 36.8075 14.0741C36.2574 14.6242 35.5113 14.9332 34.7333 14.9332C33.9554 14.9332 33.2093 14.6242 32.6591 14.0741C32.109 13.524 31.8 12.7779 31.8 11.9999V7.99991H16.2667V11.9999C16.2667 12.7779 15.9576 13.524 15.4075 14.0741C14.8574 14.6242 14.1113 14.9332 13.3333 14.9332C12.5554 14.9332 11.8093 14.6242 11.2592 14.0741C10.709 13.524 10.4 12.7779 10.4 11.9999V7.99991H5.06666C4.74936 7.9963 4.43456 8.05635 4.14087 8.17653C3.84718 8.2967 3.58057 8.47454 3.35681 8.69954C3.13306 8.92455 2.95669 9.19213 2.83815 9.48648C2.71961 9.78083 2.66129 10.096 2.66666 10.4132V40.2532C2.66137 40.5649 2.71752 40.8746 2.83192 41.1646C2.94633 41.4545 3.11673 41.7191 3.33341 41.9433C3.55009 42.1674 3.8088 42.3466 4.09475 42.4707C4.38071 42.5948 4.68831 42.6614 5 42.6666H43C43.3117 42.6614 43.6193 42.5948 43.9052 42.4707C44.1912 42.3466 44.4499 42.1674 44.6666 41.9433C44.8833 41.7191 45.0537 41.4545 45.1681 41.1646C45.2825 40.8746 45.3386 40.5649 45.3333 40.2532V10.4132C45.3386 10.1016 45.2825 9.79189 45.1681 9.50191C45.0537 9.21194 44.8833 8.94734 44.6666 8.72323C44.4499 8.49912 44.1912 8.3199 43.9052 8.19579C43.6193 8.07168 43.3117 8.00512 43 7.99991ZM34.5867 22.1066L21.6933 34.9999L14.6667 27.9199C14.3554 27.5775 14.1867 27.1291 14.1953 26.6664C14.2039 26.2037 14.389 25.7618 14.7128 25.4312C15.0366 25.1006 15.4746 24.9063 15.9369 24.8881C16.3993 24.8699 16.8512 25.0291 17.2 25.3332L21.7067 29.8399L32 19.5466C32.169 19.3776 32.3696 19.2436 32.5903 19.1521C32.8111 19.0607 33.0477 19.0136 33.2867 19.0136C33.5256 19.0136 33.7622 19.0607 33.983 19.1521C34.2038 19.2436 34.4044 19.3776 34.5733 19.5466C34.7423 19.7155 34.8763 19.9161 34.9678 20.1369C35.0592 20.3577 35.1063 20.5943 35.1063 20.8332C35.1063 21.0722 35.0592 21.3088 34.9678 21.5296C34.8763 21.7503 34.7423 21.9509 34.5733 22.1199L34.5867 22.1066Z" fill="#FE7102"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_195_18747">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  
              </span>
              <h2 class="text-lg sm:text-xl text-[#257F4A] font-medium title-font mb-2">Reliable programmes</h2>
              <p class="leading-relaxed text-base text-[#475467] mb-4">All Enterprise support organizations (ESOs)and their programmes on this platform have been carefully verified</p>
              
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full py-6 mt-1">
              <span class=" inline-flex items-center">
               
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_195_18752)">
                  <path d="M39.8045 48C38.1832 48 36.5984 47.5161 35.2505 46.6096C33.9025 45.7031 32.8521 44.4147 32.232 42.9074C31.612 41.4 31.4502 39.7415 31.767 38.1416C32.0839 36.5417 32.8653 35.0723 34.0122 33.9193C35.1592 32.7664 36.6202 31.9816 38.2105 31.6643C39.8008 31.347 41.4489 31.5115 42.9463 32.1369C44.4437 32.7623 45.7231 33.8205 46.6227 35.1778C47.5223 36.535 48.0016 38.1301 48 39.7615C48.0021 40.8447 47.7915 41.9176 47.3803 42.9186C46.9691 43.9197 46.3654 44.8291 45.6038 45.5946C44.8423 46.3602 43.9379 46.9668 42.9427 47.3796C41.9474 47.7924 40.8809 48.0032 39.8045 48ZM40.5276 37.7403C40.327 37.7257 40.1278 37.783 39.9652 37.902C39.5152 38.2092 39.0653 38.5164 38.6314 38.8479C38.4695 38.9785 38.3262 39.1308 38.2055 39.3007C38.1721 39.3402 38.1538 39.3903 38.1538 39.4422C38.1538 39.494 38.1721 39.5442 38.2055 39.5836C38.2384 39.6246 38.284 39.6533 38.335 39.665C38.386 39.6768 38.4395 39.6709 38.4868 39.6483C38.5938 39.615 38.6985 39.5745 38.8001 39.527L39.1054 39.3977C39.2501 39.3492 39.3304 39.3977 39.3224 39.5756C39.3302 39.6427 39.3302 39.7105 39.3224 39.7777C39.0117 41.0713 38.6957 42.3702 38.3743 43.6746C38.3239 43.8374 38.3325 44.0129 38.3988 44.1699C38.465 44.3268 38.5844 44.455 38.7358 44.5316C38.8829 44.6029 39.0463 44.6331 39.2089 44.6188C39.3715 44.6046 39.5273 44.5465 39.6598 44.4507C40.0937 44.1678 40.5276 43.8686 40.9374 43.5533C41.1454 43.3749 41.3364 43.1773 41.5079 42.9631C41.5414 42.9374 41.5647 42.9004 41.5736 42.8589C41.5824 42.8174 41.5762 42.7741 41.5561 42.7367C41.5305 42.698 41.4934 42.6685 41.45 42.6525C41.4067 42.6366 41.3594 42.6349 41.315 42.6478C41.2081 42.6782 41.1034 42.716 41.0017 42.761C40.8892 42.8095 40.7767 42.8742 40.6562 42.9146C40.5356 42.955 40.4392 42.9146 40.4553 42.761C40.4589 42.657 40.4751 42.5538 40.5035 42.4538C40.7928 41.233 41.09 40.0283 41.3873 38.8075C41.4321 38.6776 41.4433 38.5383 41.4197 38.4028C41.3961 38.2673 41.3385 38.1401 41.2524 38.0333C41.1664 37.9264 41.0546 37.8435 40.9278 37.7922C40.801 37.7409 40.6632 37.7231 40.5276 37.7403ZM41.3954 36.0425C41.3883 35.8665 41.3444 35.694 41.2667 35.5363C41.1889 35.3785 41.079 35.239 40.944 35.1269C40.8091 35.0147 40.6522 34.9325 40.4835 34.8854C40.3148 34.8384 40.1382 34.8277 39.9652 34.854C39.7865 34.8735 39.6153 34.9364 39.4661 35.0372C39.317 35.1381 39.1945 35.274 39.1091 35.4331C39.0237 35.5922 38.978 35.7698 38.976 35.9506C38.974 36.1314 39.0156 36.31 39.0974 36.471C39.212 36.7294 39.4102 36.9412 39.6597 37.0718C39.9092 37.2025 40.1952 37.2443 40.4714 37.1905C40.7315 37.1321 40.9644 36.9869 41.1322 36.7785C41.2999 36.5701 41.3927 36.3107 41.3954 36.0425Z" fill="#FE7102"/>
                  <path d="M11.7469 8.3436H26.9407C27.3059 8.34147 27.6553 8.19401 27.9128 7.93346C28.1702 7.6729 28.3147 7.32042 28.3147 6.953V4.1718C28.3126 3.06742 27.8762 2.00877 27.1009 1.2271C26.3255 0.445426 25.2743 0.00427021 24.1768 0H14.535C13.4374 0.00427021 12.3862 0.445426 11.6109 1.2271C10.8355 2.00877 10.3992 3.06742 10.397 4.1718V6.953C10.399 7.31566 10.5408 7.66338 10.7927 7.92282C11.0445 8.18226 11.3866 8.33313 11.7469 8.3436Z" fill="#FE7102"/>
                  <path d="M28.8771 39.7533C28.8783 38.7639 29.0134 37.7793 29.2789 36.8266H5.11818C4.87451 36.8244 4.64155 36.7255 4.47 36.5514C4.29845 36.3773 4.2022 36.142 4.20221 35.8968V34.0535C4.20431 33.8097 4.30148 33.5765 4.47281 33.4041C4.64413 33.2317 4.8759 33.1339 5.11818 33.1318H31.0947C31.9946 31.9238 33.1329 30.9161 34.4381 30.1718C35.7433 29.4274 37.1874 28.9626 38.6796 28.8064V7.64822C38.6775 6.54244 38.24 5.48257 37.4629 4.70067C36.6859 3.91877 35.6326 3.47855 34.5336 3.47642H33.1516C33.0597 3.47178 32.9678 3.48659 32.8819 3.51989C32.7959 3.5532 32.7179 3.60425 32.6528 3.66976C32.5877 3.73528 32.537 3.81379 32.5039 3.90025C32.4708 3.9867 32.456 4.07918 32.4607 4.17172V6.95292C32.4564 8.42545 31.8738 9.83658 30.8397 10.8786C29.8057 11.9206 28.4041 12.5089 26.9407 12.5153H11.7469C10.2821 12.5111 8.8785 11.9236 7.84273 10.8814C6.80696 9.83919 6.22319 8.42685 6.21895 6.95292V4.17172C6.22355 4.07918 6.20883 3.9867 6.17574 3.90025C6.14264 3.81379 6.0919 3.73528 6.0268 3.66976C5.96169 3.60425 5.88366 3.5532 5.79774 3.51989C5.71182 3.48659 5.61991 3.47178 5.52795 3.47642H4.14596C3.04704 3.47855 1.99373 3.91877 1.21667 4.70067C0.439611 5.48257 0.00212353 6.54244 0 7.64822V37.5623C0.00212353 38.6681 0.439611 39.7279 1.21667 40.5098C1.99373 41.2917 3.04704 41.732 4.14596 41.7341H29.0539C28.9363 41.0805 28.8772 40.4175 28.8771 39.7533ZM18.705 17.9241C18.7072 17.6789 18.8055 17.4445 18.9785 17.2719C19.1516 17.0993 19.3854 17.0024 19.6291 17.0024H33.3847C33.6276 17.0024 33.8606 17.0995 34.0323 17.2724C34.2041 17.4452 34.3006 17.6797 34.3006 17.9241V19.7675C34.3006 20.0127 34.2044 20.2479 34.0328 20.4221C33.8613 20.5962 33.6283 20.6951 33.3847 20.6972H19.6291C19.3846 20.6951 19.1508 20.5965 18.978 20.4226C18.8052 20.2487 18.7071 20.0134 18.705 19.7675V17.9241ZM18.5765 26.009C18.5786 25.7652 18.6758 25.532 18.8471 25.3596C19.0184 25.1872 19.2502 25.0894 19.4925 25.0873H33.3847C33.6269 25.0894 33.8587 25.1872 34.03 25.3596C34.2013 25.532 34.2985 25.7652 34.3006 26.009V27.8604C34.3006 28.1049 34.2041 28.3393 34.0323 28.5122C33.8606 28.685 33.6276 28.7821 33.3847 28.7821H19.4925C19.2495 28.7821 19.0166 28.685 18.8448 28.5122C18.673 28.3393 18.5765 28.1049 18.5765 27.8604V26.009ZM4.11383 23.5835V22.0959C4.11594 21.7127 4.26814 21.3459 4.53741 21.0749C4.80667 20.804 5.17126 20.6508 5.55206 20.6487H7.69735V18.4739C7.69735 18.0901 7.84888 17.722 8.1186 17.4506C8.38832 17.1792 8.75414 17.0267 9.13558 17.0267H10.5658C10.7553 17.0256 10.9432 17.0623 11.1186 17.1345C11.2941 17.2068 11.4536 17.3132 11.588 17.4477C11.7224 17.5822 11.829 17.7421 11.9018 17.9182C11.9746 18.0943 12.0121 18.2831 12.012 18.4739V20.6325H14.1654C14.5454 20.6347 14.9092 20.7881 15.1772 21.0593C15.4452 21.3304 15.5956 21.6973 15.5956 22.0797V23.5188C15.5913 23.8977 15.4388 24.2596 15.171 24.526C14.9033 24.7924 14.5419 24.9418 14.1654 24.9418H12.012V27.1085C12.012 27.4902 11.8614 27.8563 11.5932 28.1261C11.3249 28.396 10.9612 28.5476 10.5819 28.5476H9.15165C8.7716 28.5477 8.40699 28.3963 8.1375 28.1266C7.86801 27.857 7.71555 27.491 7.71342 27.1085V24.9418H5.56813C5.19354 24.9419 4.83368 24.795 4.56509 24.5323C4.29649 24.2696 4.14036 23.9118 4.12989 23.535L4.11383 23.5835Z" fill="#FE7102"/>
                  <rect x="4" y="16" width="13" height="14" fill="#FE7102"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_195_18752">
                  <rect width="48" height="48" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  
                  
              </span>
              <h2 class="text-lg sm:text-xl text-[#257F4A] font-medium title-font mb-2">Detailed information</h2>
              <p class="leading-relaxed text-base text-[#475467] mb-4">We provide extensive information about each (ESOs) and its programmes, for you to make informed decision.</p>
              
            </div>
            <div class="xl:w-1/3 lg:w-1/2 md:w-full py-6 mt-1">
              <span class=" inline-flex items-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_195_18704)">
                  <path d="M37.632 25.6094C31.9049 25.6094 27.2612 30.2546 27.2612 35.9803C27.2612 41.7044 31.9049 46.3469 37.632 46.3469C43.3562 46.3469 48 41.7045 48 35.9803C48 30.2545 43.3562 25.6094 37.632 25.6094ZM38.2974 43.6447V42.7494C38.2974 42.379 37.9987 42.0797 37.632 42.0797C37.2616 42.0797 36.9637 42.3798 36.9637 42.7494V43.6447C33.2507 43.3255 30.2846 40.3587 29.9653 36.6463H30.8634C31.2303 36.6463 31.5303 36.3476 31.5303 35.9809C31.5303 35.6077 31.2303 35.3126 30.8634 35.3126H29.9653C30.2845 31.5988 33.2513 28.6349 36.9637 28.3142V29.2109C36.9637 29.5799 37.2624 29.8793 37.632 29.8793C37.9988 29.8793 38.2974 29.5792 38.2974 29.2109V28.3142C42.0118 28.6349 44.978 31.5988 45.2958 35.3126H44.3976C44.0288 35.3126 43.7308 35.6084 43.7308 35.9809C43.7308 36.3484 44.0295 36.6463 44.3976 36.6463H45.2958C44.9787 40.3586 42.0118 43.3247 38.2974 43.6447Z" fill="#FE7102"/>
                  <path d="M41.4954 34.9777H39.0898C38.7691 34.5152 38.2364 34.2081 37.6319 34.2081C37.6227 34.2081 37.6128 34.2109 37.6021 34.2109L35.4101 31.1249C35.0909 30.6758 34.4652 30.5716 34.0147 30.8894C33.5656 31.2101 33.4577 31.8372 33.7791 32.2877L35.9726 35.375C35.9053 35.5644 35.862 35.7659 35.862 35.9809C35.862 36.9584 36.653 37.7494 37.6319 37.7494C38.2364 37.7494 38.7719 37.4451 39.0898 36.9811H41.4954C42.0473 36.9811 42.4964 36.535 42.4964 35.9816C42.4964 35.4254 42.0474 34.9777 41.4954 34.9777Z" fill="#FE7102"/>
                  <path d="M9.97999 15.3407C11.7947 15.3407 13.2631 13.8708 13.2631 12.0583V4.93575C13.2631 3.1225 11.7947 1.65332 9.97999 1.65332C8.16674 1.65332 6.69897 3.1225 6.69897 4.93575V12.059C6.69897 13.8708 8.16666 15.3407 9.97999 15.3407Z" fill="#FE7102"/>
                  <path d="M30.0845 15.3407C31.8993 15.3407 33.3677 13.8708 33.3677 12.0583V4.93575C33.3677 3.1225 31.8992 1.65332 30.0845 1.65332C28.2727 1.65332 26.8036 3.1225 26.8036 4.93575V12.059C26.8028 13.8708 28.2728 15.3407 30.0845 15.3407Z" fill="#FE7102"/>
                  <path d="M14.428 24.4545C14.428 23.5174 13.6704 22.7583 12.7311 22.7583H9.58557C8.64848 22.7583 7.8873 23.5174 7.8873 24.4545V27.5986C7.8873 28.5371 8.64848 29.2984 9.58557 29.2984H12.7311C13.6696 29.2984 14.428 28.5371 14.428 27.5986V24.4545Z" fill="#FE7102"/>
                  <path d="M23.3041 24.4564C23.3041 23.5193 22.5443 22.761 21.6093 22.761H18.4623C17.5252 22.761 16.7668 23.5193 16.7668 24.4564V27.6013C16.7668 28.537 17.5252 29.2982 18.4623 29.2982H21.6093C22.545 29.2982 23.3041 28.537 23.3041 27.6013V24.4564Z" fill="#FE7102"/>
                  <path d="M27.3371 22.7583C26.3985 22.7583 25.6387 23.5174 25.6387 24.4545V27.5986C25.6387 28.4477 26.2715 29.1174 27.0831 29.2444C28.3274 27.3063 30.0896 25.737 32.176 24.7226V24.4545C32.176 23.5174 31.4176 22.7583 30.4791 22.7583H27.3371Z" fill="#FE7102"/>
                  <path d="M9.58628 31.281C8.64918 31.281 7.88792 32.0394 7.88792 32.9765V36.1219C7.88792 37.059 8.64918 37.8174 9.58628 37.8174H12.7333C13.6704 37.8174 14.428 37.059 14.428 36.1219V32.9765C14.428 32.0394 13.6704 31.281 12.7333 31.281H9.58628Z" fill="#FE7102"/>
                  <path d="M21.6057 31.2825H18.4616C17.5245 31.2825 16.7662 32.0423 16.7662 32.9794V36.1221C16.7662 37.0592 17.5245 37.8175 18.4616 37.8175H21.6057C22.5414 37.8175 23.3012 37.0592 23.3012 36.1221V32.9794C23.3012 32.0422 22.5414 31.2825 21.6057 31.2825Z" fill="#FE7102"/>
                  <path d="M26.1913 41.066H10.2332C7.48642 41.066 5.25104 38.8307 5.25104 36.0867V19.4191H34.8164V23.7805C35.7223 23.572 36.6609 23.4499 37.632 23.4499C38.4649 23.4499 39.2778 23.5358 40.0659 23.6926V8.01611H35.3371V12.0583C35.3371 14.9541 32.9825 17.3094 30.0845 17.3094C27.1881 17.3094 24.8336 14.9542 24.8336 12.0583V8.01611H15.2324V12.0583C15.2324 14.9541 12.8764 17.3094 9.97991 17.3094C7.08477 17.3094 4.72885 14.9542 4.72885 12.0583V8.01611H-1.52588e-05V36.086C-1.52588e-05 41.7357 4.58132 46.3192 10.2332 46.3192H29.8321C30.0648 46.3192 30.2946 46.3001 30.523 46.2851C28.6402 44.984 27.1362 43.1785 26.1913 41.066Z" fill="#FE7102"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_195_18704">
                  <rect width="48" height="48" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  
              </span>
              <h2 class="text-lg sm:text-xl text-[#257F4A] font-medium title-font mb-2">Upcoming Programmes</h2>
              <p class="leading-relaxed text-base text-[#475467] mb-4">Use our advanced search feature to find upcoming entrepreneurship events and programmes and sign-up for updates.</p>
              
            </div>
            
          </div>
        </div>
       
      </div>
    </section>

    <section class="my-8">
      <div class="px-4 mx-auto space-y-4 relativea sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex justify-between items-center">
          <p class="text-primary text-xl font-medium">Top Trending Programmes </p>
          <NuxtLink to="/general/programmes" class="text-primary text-xl font-medium">See all</NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
          <LayoutsProgrammeCard :program="item" v-for="(item, index) in programs?.results?.slice(0,4)" :key="index"  />
        </div>
      </div>
    </section>

    <section class="my-8">
      <div class="px-4 mx-auto space-y-4 relative sm:px-6 lg:px-8 max-w-7xl">
          

          <div class="flex justify-between items-center">
            <p class="text-primary text-xl font-medium">Upcoming Events</p>
            <NuxtLink to="/general/events" class="text-primary text-xl font-medium">See all</NuxtLink>
          </div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">

          <LayoutsEventsCard :event="item" v-for="(item, index) in events?.results" :key="index"  />
        </div>
      </div>
    </section>

    <section class="my-8">
      <div class="container  mx-auto  relative max-w-7xl">
        <div class="bg-customGreen  rounded-[25px]  px-4  sm:px-6 lg:px-8 ">
          <div class="container pt-10 pb-10 mx-auto px-4">
            <!-- First Section: Heading -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <h3 class="text-3xl leading-snug my-3 text-[#fff]">
                Ready to level up your<br /> programmes 
              </h3>
               <p class="text-base text-[#fff]">
                    Support small business  with tailored < br>programme to increase productivity
                </p>
              </div>
              <!-- Second Section: Buttons -->
              <div class="lg:flex  lg:items-start lg:justify-start lg:space-x-5">
                <NuxtLink to="/auth/login">
                  <Button variant="variant" size="lg" class="bg-customLightGreen mb-2 text-[#fff] text-base font-normal">
                    Great Started Now
                  </Button>
                </NuxtLink>

                <NuxtLink to="/auth/register">
                  <Button class="border border-blue-50 " size="lg">
                    Learn More
                  </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
         
        
        </div>
       
      </div>
      
    </section>

    <section class="my-8 ">
      <div class="container  mx-auto  relative max-w-7xl">
        <div class="space-y-4">
          <h6 class="text-3xl text-[#257F4A]">
            Featured Articles
          </h6>
          <p class="text-base text-[#475467]">
            Our featured articles showcase the expertise and perspectives of our team, providing timely and informative content to help you stay ahead of the curve. Explore our curated collection of stories, analysis, and commentary to gain a deeper understanding of the topics that matter most.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <LayoutsArticleCard class="" v-for="item, index in Array.from({length: 2})" :key="index" />
        </div>
      </div>
    </section>
    <section class="my-8 mt-16">
      <div class="container  mx-auto  relative max-w-7xl">
        <div class="space-y-4">
          <h6 class="text-xl lg:text-3xl text-center text-[#257F4A]">
           Funded by
          </h6>
        </div>

        <div class="flex flex-wrap items-center  gap-4 justify-center">
          <div class="w-2/12 ">
            <img src="~/assets/images/risa.png" alt="Sponsor 1" class="w-full" />
          </div>
          <div class="w-2/12">
            <img src="~/assets/images/ukaid.png" alt="Sponsor 1" />

          </div>
        </div>
      </div>
    </section>
    <LayoutsFooter />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useProfileStore } from '~/store/profile';


const profileStore = useProfileStore()

const events = computed(() => {
  return profileStore.events
})
const programs = computed(() => {
  return profileStore.programs
})
const loading = computed(() => {
  return profileStore.loading
})
onMounted(() => {
  profileStore.getEvents()
  profileStore.getProgrammes()
})
</script>

<style lang="scss" scoped>

</style>