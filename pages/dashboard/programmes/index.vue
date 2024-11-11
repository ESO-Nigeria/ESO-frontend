<template>
  <div>
    <NuxtLayout name="dashboard">
      <div class="flex flex-col w-full gap-3">
        <LayoutsBreadcrumb
          :breadcrumbs="[{ text: 'Programmes' }]"></LayoutsBreadcrumb>
        <div class="mt-3">
          <LayoutsTitleHeader
            :title="'Programmes'"
            :sub-title="'Manage organization programmes'"
             />
        </div>
     
        <div class="flex-col flex gap-3">
          
          <div class="grid lg:grid-cols-3 gap-4 ">
            <LayoutsCard>
              <LayoutsAnalyticalCard
                title="All"
                :value="0"
                bgColor="#3DD37B"
                iconColor="#12B76A"
               >
                <!-- Custom Icon if needed -->
                <template #icon>
                  <div
                  class="flex flex-col items-center justify-center w-20 h-10 bg-light-green text-green rounded-xl">
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0L5 0C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 17C0.00158786 18.3256 0.528882 19.5964 1.46622 20.5338C2.40356 21.4711 3.67441 21.9984 5 22H19C20.3256 21.9984 21.5964 21.4711 22.5338 20.5338C23.4711 19.5964 23.9984 18.3256 24 17V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0ZM5 2L19 2C19.5988 2.00118 20.1835 2.18151 20.679 2.5178C21.1744 2.85409 21.5579 3.33095 21.78 3.887L14.122 11.546C13.5584 12.1073 12.7954 12.4225 12 12.4225C11.2046 12.4225 10.4416 12.1073 9.878 11.546L2.22 3.887C2.44215 3.33095 2.82561 2.85409 3.32105 2.5178C3.81648 2.18151 4.40121 2.00118 5 2ZM19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17L2 6.5L8.464 12.96C9.40263 13.8963 10.6743 14.422 12 14.422C13.3257 14.422 14.5974 13.8963 15.536 12.96L22 6.5V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20Z" fill="#3DD37B"/>
                    </svg>
                    
                </div>             
                </template>
              </LayoutsAnalyticalCard>
            </LayoutsCard>
    
            <LayoutsCard>
              <LayoutsAnalyticalCard
                title="Active"
                :value="0"
                bgColor="#3DD37B"
                iconColor="#12B76A">
                <template #icon>
                  <div
                    class="flex flex-col items-center justify-center w-20 h-10 bg-light-green text-green rounded-xl">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2296 5.16984C10.8521 5.50881 10.21 5.53339 9.79544 5.22474L6.8086 3.00105L6.8086 15.1699C6.8086 15.6284 6.35408 16 5.7934 16C5.23272 16 4.7782 15.6284 4.7782 15.1699L4.7782 3.00105L1.79136 5.22474C1.37679 5.53339 0.734706 5.50881 0.357223 5.16984C-0.0202599 4.83087 0.00980282 4.30588 0.424373 3.99723L5.7934 0L11.1624 3.99723C11.577 4.30588 11.6071 4.83087 11.2296 5.16984Z" fill="#12B76A"/>
                      </svg>
                      
                      
                  </div>
                </template>
              </LayoutsAnalyticalCard>
            </LayoutsCard>
    
            <LayoutsCard>
              <LayoutsAnalyticalCard
                title="Pending"
                :value="0"
               
                bgColor="#FE7102"
                iconColor="#DC6803">
                <!-- Custom Icon if needed -->
                <template #icon>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.09073 5.16984C1.46822 5.50881 2.1103 5.53339 2.52487 5.22474L5.51171 3.00105V15.1699C5.51171 15.6284 5.96623 16 6.52691 16C7.08759 16 7.54211 15.6284 7.54211 15.1699V3.00105L10.529 5.22474C10.9435 5.53339 11.5856 5.50881 11.9631 5.16984C12.3406 4.83087 12.3105 4.30588 11.8959 3.99723L6.52691 0L1.15788 3.99723C0.743315 4.30588 0.713251 4.83087 1.09073 5.16984Z" fill="#FE7102"/>
                    </svg>                    
                </template>
              </LayoutsAnalyticalCard>
            </LayoutsCard>
           
          </div>
        </div>
        
        <div>
          <LayoutsTablesProgrammesTable :data="[]"/>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>