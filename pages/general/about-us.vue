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
                The Nigeria Enterprise Support Organizations (ESOs) Collaborative is a programme of the Impact Investors Foundation with support from the RISA Fund and UKAID. This programme is building a strong network of diverse ESOs that share a common goal to drive sustainable economic growth through entrepreneurship. This is by pooling collective expertise and resources to enhance the capacity of Nigerian ESOs to foster collaboration, innovation, and capacity building. Through a comprehensive range of services, strategic initiatives, and collaborative frameworks; the Collaborative is empowering enterprise support organizations to drive economic growth through a supportive ecosystem where Nigerian enterprises can thrive, grow, and contribute meaningfully to the nation's economic prosperity and societal well-being.
              </p>
            </div>
          
          </div>
        </div>
        <div class="w-full max-w-screen-lg mx-auto p-4  text-justify space-y-3">
          <p class="text-base text-[#4F5865] ">
            The Collaborative recognizes the critical importance of collaboration in achieving organizational objectives, delivering exceptional support services and developing SME sector. By leveraging the strengths and resources of each enterprise support organization within our network, the Nigerian ESO Collaborative is creating a more effective and holistic support ecosystem for businesses through knowledge sharing, networking and collaboration, innovation, research and development (R&D), advocacy, access to funding, mentorship, and continuous evaluation. The ESOs Collaborative has built a platform for a supportive ecosystem where Nigerian enterprises can thrive, grow, and contribute meaningfully to the nation's economic prosperity and societal well-being. We are leveraging our collective strengths, resources, and networks to overcome challenges, seize opportunities, and create lasting positive change for the benefit of the SME sector in Nigeria. Do join us in shaping the future of entrepreneurship and enterprise development in the Nation!          </p>
        
          <p class="text-base text-[#4F5865] ">
            SMEs play a pivotal role in driving economic development, fostering innovation, and generating employment opportunities within the country. Integral to the growth and development of SMEs are Enterprise Support Organizations (ESOs) that are crucial in providing essential resources like access to capital and other forms of enterprise technical assistance/support that contribute to SMEs’ profitability and sustainability. Hence, improving the coordination, quality and quantity of enterprise support is crucial to building an enabling environment for sustainable businesses to thrive in Nigeria. With the rapidly evolving business landscape and the increasing complexity of technological advancements, the Nigerian business environment is characterised by a mix of challenges and opportunities, including regulatory complexities, infrastructural limitations, market volatility, and emerging trends such as digital and technological transformation. In this context, ESOs serve as catalysts for entrepreneurship and business sustainability, providing critical resources, mentorship, networking opportunities, investment-readiness and invariably, access to funding to empower enterprises at all stages of their growth journey. ESOs services range from making a business commercially viable, having financial and operations numbers that are realistic and achievable, having a plan on how to scale the business, knowing the right target market, having a proof of concept, building a great team and having a good advisory board.
    </p>
      
          <p class="text-base text-[#4F5865] ">
            In the investment landscape, the crucial disconnect between investors and entrepreneurs include insufficient investment readiness, differing valuation expectations, and limited access to information. Entrepreneurial Support Organizations (ESOs) are bridging these gaps by offering guidelines on investor expectations and providing capacity-building support In the investment landscape, to correct the disconnect between investors and entrepreneurs due to insufficient investment readiness, differing valuation expectations, and limited access to information.
            Indeed ESOs play in achieving organizational objectives, delivering exceptional support services and strengthening the enterprise development ecosystem, collaboration between ESOs becomes important to enhance their impact, and foster innovative solutions. By working together within a collaborative network, ESOs can share knowledge and best practices, improve their organizational performance and support services, build stronger networks, mitigate mutual risks, present a unified voice for advocacy, and reach a larger audience. Ultimately, these partnerships lead to more efficient use of resources and more significant, sustainable valued outcomes for their stakeholders. The Nigeria Enterprise Support Organizations (ESOs) Collaborative Strategy aims to provide a clear roadmap for achieving shared goals of ESOs in Nigeria working independently yet within a collaborative network. It outlines the vision, mission, and objectives, ensuring all members are aligned and working towards the same outcomes. The document defines roles, responsibilities, and processes, which helps in coordinating efforts and avoiding overlaps or conflicts. It also includes metrics for evaluating progress and continuous improvement. Additionally, a strategy document serves as a reference point for decision-making, resource allocation, and conflict resolution, ensuring the collaborative operates efficiently and effectively.
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
        <div class="w-full  max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-5">
          <p class="text-primary text-2xl font-bold">Objectives</p>
          <div class="rounded-md overflow-hidden h-[432px]">
            <img src="~/assets/images/container-image.png" alt="Gallery Image" class="w-full h-full object-cover rounded-md">
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-2 text-white gap-6">
            <div class="border-primary bg-primary text-white border rounded-md p-4 space-y-2.5 flex flex-col  justify-center">
              <p class="text-base font-medium ">
                Collaboration
              </p>
              <p class="text-sm text-justify">
                The collaborative provides a platform for cooperation, partnership and synergy between Enterprise support organizations (ESOs). The collaborative believes in the power of collaboration to drive collective impact and create synergy among ESOs, government agencies, financial institutions, academia, and other stakeholders.
              </p>
            </div>
            <div class="bg-[#D1AE6F] text-white rounded-md p-4 space-y-2.5 flex flex-col  justify-center">
              <p class="text-base font-medium ">
                Knowledge Sharing
              </p>
              <p class="text-sm  text-justify">
                The collaborative fosters a culture of continuous learning with a focus on peer-peer learning, knowledge exchange and collaboration among ESOs .
              </p>
            </div>
            <div class="bg-[#D1AE6F] text-white rounded-md p-4 space-y-2.5 flex flex-col  justify-center">
              <p class="text-base font-medium ">
                Enterprise-Centric Approach
              </p>
              <p class="text-sm  text-justify">
                Prioritize customer needs by implementing tailored support solutions, personalized interactions, and proactive service delivery.
              </p>
            </div>
            <div class="bg-primary text-white justify-center rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium ">
                Innovation Integration
              </p>
              <p class="text-sm text-justify">
                Embrace emerging technologies and best practices to innovate support services, anticipate future requirements, and maintain a competitive edge.
              </p>
            </div>
            <div class="justify-center bg-primary text-white rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium ">
                Stakeholder Alignment
              </p>
              <p class="text-sm text-justify">
                Establish strong partnerships and alignment with stakeholders to ensure seamless integration of support services with overall ecosystem development objectives.
              </p>
            </div>
            <div class="bg-[#D1AE6F] text-white rounded-md p-4 space-y-2.5 flex flex-col  justify-center">
              <p class="text-base font-medium ">
                Efficiency Optimization
              </p>
              <p class="text-sm  text-justify">
                Streamline support processes and workflows to maximize productivity, and reduce operational costs.
              </p>
            </div>
           
          </div>
        </div>
        <div class="w-full  max-w-screen-lg mx-auto p-4 my-3 text-justify space-y-5">
          <p class="text-primary text-2xl font-bold">Programme Focus</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 text-white gap-6">
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Ecosystem Development
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                Establish a robust and inclusive ecosystem of collaborative support services that empowers Nigerian enterprises to thrive, innovate, and contribute to sustainable economic growth.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Impactful Partnerships
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                Forge strategic partnerships with government agencies, financial institutions, academia, industry associations, and international organizations to amplify the reach and impact of support initiatives across Nigeria.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Capacity Building
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                Strengthen the capacity and capabilities of ESOs and support personnel to deliver high-quality, tailored support services that address the evolving needs of Nigerian enterprises effectively.
              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Sustainable Growth
              </p>
              <p class="text-base text-[#4F5865] text-justify">
                Foster an environment conducive to sustainable enterprise growth by promoting ethical business practices, responsible resource management, and social and environmental stewardship.

              </p>
            </div>
            <div class="border-primary border rounded-md p-4 space-y-2.5 flex flex-col  ">
              <p class="text-base font-medium text-primary">
                Entrepreneurship Promotion
              </p>
              <p class="text-base text-[#4F5865] text-justify">
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