<template>
  <div>
    <NuxtLayout name="general" title="About Us" >

      <div class="container py-4">
        <LayoutsBreadcrumb
            :breadcrumbs="[{ text: 'About us' }]"></LayoutsBreadcrumb>
        <div class="w-full max-w-screen-lg mx-auto p-4 sm:p-8 md:flex md:gap-6">
          <!-- Left Section with Image -->
          <div class="md:w-1/2 mb-4 md:mb-0">
            <img src="~/assets/images/about-banner-lg.png" alt="Group Image" class="w-full h-auto rounded-lg object-contain">
          </div>
          
          <!-- Right Section with Content -->
          <div class="md:w-1/2 flex flex-col justify-between">
            <!-- Header Section -->
            <div class="mb-4 text-justify">
              <h2 class="text-4xl font-bold text-left text-primary uppercase leading-snug">About the Nigerian ESO Collaborative</h2>
              <p class="text-base text-[#4F5865] mt-2">
                The Nigeria ESOs Collaborative is a network of dedicated 
                enterprise support organizations committed to fostering the growth and 
                development of Nigeria’s entrepreneurial ecosystem with a drive to empower 
                entrepreneurs across Nigeria and beyond by providing comprehensive support, 
                resources, and a unified platform for collaboration, capacity building and 
                innovation. The Collaborative brings together a diverse range of Enterprise 
                Support Organizations (ESOs) that share a common goal to drive sustainable 
                economic growth through entrepreneurship. By pooling collective expertise 
                and resources, the collaborative aims to enhance the capacity of Nigerian ESOs, 
                helping them overcome challenges and seize opportunities in a dynamic business 
                environment to fill the following gaps as identified  in the recent ESO Mapping 
                report;


              </p>
            </div>
          
          </div>
        </div>
        <div class="w-full max-w-screen-lg mx-auto p-4  text-justify space-y-3">
          <p class="text-base text-[#4F5865] ">
            
Gap 1 : Low Levels of Enterprise Readiness<br>
Gap 2: Low Capacity of ESO’s to Delivery Effective Programs <br>
Gap 3: Limited Sectors of Focus<br>
Gap 4: Disconnect between MSME investment and financing available and access to finance by MSMEs<br>
</p>
        
      
        
      

        </div>
        <div class="w-full max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-3">
          <div class="grid md:grid-cols-2 text-white gap-6">
            <div class="bg-primary h-[390px] rounded-md px-6 py-8 space-y-6 flex flex-col  justify-center">
              <p class="text-2xl">
                Vision Statement:
              </p>
              <p class="text-base">
                To foster a vibrant and inclusive ecosystem of empowered enterprise support organizations (ESOs) driving sustainable economic growth and innovation across Nigeria through collaborative support initiatives. 
              </p>
            </div>
            <div class="bg-[#D1AE6F] h-[390px] text-white  rounded-md  px-6 py-8 space-y-6 flex flex-col  justify-center">
              <p class="text-2xl">
                Mission Statement:
              </p>
              <ul class="list-disc pl-3 text-base  space-y-2">
                <li>To collaborate to build an ecosystem where ESOs thrive.</li>
                <li>
                  To engage with stakeholders to increase investments (with a focus on impact investments) into enterprises by 
                  providing comprehensive, accessible, and impactful support services.
                </li>
                <li>
                  To develop globally competitive ESOs which are sustainable, innovative, well-governed, cooperating, and 
                  profitable.
                </li>
                <li>To contribute to a sustainable enabling impact investing ecosystem in Nigeria.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full  max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-5">
          <p class="text-primary text-2xl font-bold">Core Values</p>
          <p class="text-[#4F5865] text-base">By adhering to these core values, ESOs Collaborative endeavors to create a supportive ecosystem where Nigerian enterprises can thrive, grow, and contribute meaningfully to the nation's economic prosperity and societal well-being.</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-6">
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Collaboration
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                The collaborative believes in the power of collaboration to drive collective impact and create synergy among ESOs, government agencies, financial institutions, academia, and other stakeholders.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Inclusivity
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                We are committed to promoting inclusivity and equity by ensuring that support services are accessible to enterprises of all sizes, sectors, and regions across Nigeria.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Innovation
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                We embrace innovation as a catalyst for economic growth and competitiveness, fostering a culture of creativity, experimentation, and continuous improvement in our support initiatives.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Integrity
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                We uphold the highest standards of integrity, transparency, and ethical conduct in all our interactions and operations, earning the trust and confidence of stakeholders.

              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Empowerment
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                We are dedicated to empowering entrepreneurs and businesses with the knowledge, resources, and networks they need to succeed, realizing their full potential as drivers of economic development.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Adaptability
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                We recognize the dynamic nature of the business environment and commit to remaining agile, adaptable, and responsive to evolving needs, trends, and challenges.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Impact-driven
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                We are results-oriented, measuring our success by the tangible impact we create in terms of job creation, revenue generation, innovation, and sustainable development outcomes for Nigerian enterprises and communities.
              </p>
            </div>
          </div>
        </div>
       
        <div class="w-full bg-primary  rounded-md max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-5">
          <p class="text-white text-2xl font-bold">Programme Focus</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-6">
            <div class="border-white border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-white  font-medium text-primary">
                Ecosystem Development
              </p>
              <p class="text-white text-[#4F5865] text-justify">
                Establish a robust and inclusive ecosystem of collaborative support services that empowers Nigerian enterprises to thrive, innovate, and contribute to sustainable economic growth.
              </p>
            </div>
            <div class="border-white border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-white font-medium text-primary">
                Impactful Partnerships
              </p>
              <p class="text-white text-[#4F5865] text-justify">
                Forge strategic partnerships with government agencies, financial institutions, academia, industry associations, and international organizations to amplify the reach and impact of support initiatives across Nigeria.
              </p>
            </div>
            <div class="border-white border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-white font-medium text-primary">
                Capacity Building
              </p>
              <p class="text-white text-[#4F5865] text-justify">
                Strengthen the capacity and capabilities of ESOs and support personnel to deliver high-quality, tailored support services that address the evolving needs of Nigerian enterprises effectively.
              </p>
            </div>
            <div class="border-white border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-white font-medium text-primary">
                Sustainable Growth
              </p>
              <p class="text-white text-[#4F5865] text-justify">
                Foster an environment conducive to sustainable enterprise growth by promoting ethical business practices, responsible resource management, and social and environmental stewardship.

              </p>
            </div>
            <div class="border-white border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-white font-medium text-primary">
                Entrepreneurship Promotion
              </p>
              <p class="text-white text-[#4F5865] text-justify">
                Cultivate a culture of entrepreneurship, innovation, and risk-taking among Nigerian youth and aspiring entrepreneurs, equipping them with the skills, knowledge, and networks needed to succeed in the dynamic business landscape.
              </p>
            </div>
          
           
          </div>
        </div>

        <div class="w-full  max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-5">
          <p class="text-primary text-2xl font-bold">Key Objectives</p>
          <div class="grid lg:grid-cols-2 gap-6">
            <div class="grid  gap-6">
              <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
                <p class="text-base font-medium text-primary">
                  Unified Communication Channels
                </p>
                <p class="text-base text-[#4F5865] text-justify">
                  Implement an integrated platform for communication and information sharing, enabling seamless collaboration among ESOs Collaborative and stakeholders.
                </p>
              </div>
              <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
                <p class="text-base font-medium text-primary">
                  Knowledge Management System
                </p>
                <p class="text-base text-[#4F5865] text-justify">
                  Develop a robust knowledge base accessible to all support personnel, facilitating efficient problem resolution and empowering self-service capabilities.
                </p>
              </div>
              <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
                <p class="text-base font-medium text-primary">
                  Training and Capacity Building
                </p>
                <p class="text-base text-[#4F5865] text-justify">
                  Institute cross-training programs to equip support staff with diverse skill sets, enabling them to address a wide range of issues and collaborate effectively across teams.
                </p>
              </div>
              <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
                <p class="text-base font-medium text-primary">
                  Metrics-Drive Performance Evaluation
                </p>
                <p class="text-base text-[#4F5865] text-justify">
                  Utilize performance metrics and feedback mechanisms to assess the effectiveness of support initiatives, identify areas for improvement, and drive continuous enhancement.
  
                </p>
              </div>
              <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
                <p class="text-base font-medium text-primary">
                  Address Market Gaps
                </p>
                <p class="text-base text-[#4F5865] text-justify">
                  Identify and address gaps in support services, particularly in underserved regions and sectors, to ensure equitable access to support resources and opportunities for all Nigerian enterprises                </p>
              </div>
            
             
            </div>

            <div class="grid lg:grid-cols-2 gap-6 auto-rows-[360px]">
              <div class="rounded-md overflow-hidden">
                <img src="~/assets/images/about-g1.png" alt="Gallery Image" class="w-full h-full object-cover rounded-md">
              </div>
              <div class="rounded-md overflow-hidden">
                <img src="~/assets/images/about-g2.png" alt="Gallery Image" class="w-full h-full object-cover rounded-md">
              </div>
              <div class="rounded-md  overflow-hidden">
                <img src="~/assets/images/about-g3.png" alt="Gallery Image" class="w-full h-full object-cover rounded-md">
              </div>
              <div class="rounded-md overflow-hidden">
                <img src="~/assets/images/about-g4.png" alt="Gallery Image" class="w-full h-full object-cover rounded-md">
              </div>
            </div>
          </div>

        </div>
      </div>
  </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>