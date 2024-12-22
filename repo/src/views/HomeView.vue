<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import introPic from '@/assets/intro-avatar.jpg'

const { smAndUp } = useDisplay()
const showSideBar = computed(() => smAndUp.value)
</script>

<template>
  <VNavigationDrawer v-if="showSideBar" :permanent="showSideBar">
    <div class="d-flex justify-center px-6 py-4">
      <div>
        <VImg :src="introPic" rounded="circle" width="200"></VImg>
      </div>
    </div>
    <VDivider></VDivider>
    <div class="px-2">
      <VList>
        <VListItem title="Introduction" value="introduction" rounded></VListItem>
        <VListGroup>
          <template #activator="{ props }">
            <VListItem v-bind="props" title="Projects" value="projects" rounded></VListItem>
          </template>
          <VListItem title="Project 1" value="project1" rounded></VListItem>
          <VListItem title="Project 2" value="project2" rounded></VListItem>
          <VListItem title="Project 3" value="project3" rounded></VListItem>
          <VListItem title="Project 4" value="project4" rounded></VListItem>
        </VListGroup>
        <VListItem title="Contact" value="contact" rounded></VListItem>
      </VList>
    </div>
  </VNavigationDrawer>
  <VAppBar v-else title="Application bar"></VAppBar>
  <VMain>
    <VContainer>
      <VSheet class="pa-4 mt-2" rounded border>
        <div class="text-h4 mb-4">Hi. I'm <span class="font-weight-bold">Aimee Le.</span></div>
        <div class="text-h5 mb-4">Welcome to my data analytics portfolio!</div>
        <div class="text-justify">
          I am a business professional with over 2 years of experience across diverse industries,
          including retail, factory, freight forwarding, and hotel. During this time, I discovered
          my true passion for data analytics. This website is a collection of my data analytics
          projects, which demonstrate how I leverage domain knowledge, online learning, analytical
          thinking, problem-solving abilities, and technical skills to solve business challenges,
          recommend solutions and present these insights through clear visualizations to
          stakeholders.
        </div>
        <!-- <div class="mt-4">
              <span class="text-indigo-lighten-1 font-weight-bold">Platform and Tools:</span>
              Spreadsheets, SQL, Python, Pandas, Numpy, Jupyter Notebooks, R Programming, Tableau,
              Power BI, Big Query, IBM Cognos.
            </div>
            <div class="mt-4">
              <span class="text-indigo-lighten-1 font-weight-bold">Background:</span> International
              trade, business and finance acumen, admin, supply chain and logistic, transportation,
              operations.
            </div>

            <div class="mt-4">
              <span class="text-indigo-lighten-1 font-weight-bold">Education:</span> Bachelor and
              Master Degree in International Business (finished in 2021).
            </div> -->
      </VSheet>

      <VSheet class="pa-4 mt-4" rounded border>
        <div class="text-center mb-4">
          <div class="text-h5 font-weight-bold mb-2">My personal projects.</div>
          <div class="text-h6">
            <span class="text-indigo-lighten-1 font-weight-bold">Tools and techniques: </span>
            Speadsheets, SQL, Tableau, Python.
          </div>
        </div>
        <VRow>
          <VCol>
            <VCard color="indigo-darken-1" hover>
              <VImg class="bg-grey-lighten-2" src="https://picsum.photos/350/165?random"></VImg>
              <VCardTitle class="text-h6"> Project 1 </VCardTitle>
              <VCardText
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis
                quis est labore voluptatibus!</VCardText
              >
            </VCard>
          </VCol>
          <VCol>
            <VCard color="indigo-darken-1" hover>
              <VImg class="bg-grey-lighten-2" src="https://picsum.photos/350/165?random"></VImg>
              <VCardTitle class="text-h6"> Project 2 </VCardTitle>
              <VCardText
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis
                quis est labore voluptatibus!</VCardText
              >
            </VCard>
          </VCol>
          <VCol>
            <VCard color="indigo-darken-1" hover>
              <VImg class="bg-grey-lighten-2" src="https://picsum.photos/350/165?random"></VImg>
              <VCardTitle class="text-h6"> Project 3 </VCardTitle>
              <VCardText
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis
                quis est labore voluptatibus!</VCardText
              >
            </VCard>
          </VCol>
          <VCol>
            <VCard color="indigo-darken-1" hover>
              <VImg class="bg-grey-lighten-2" src="https://picsum.photos/350/165?random"></VImg>
              <VCardTitle class="text-h6"> Project 4 </VCardTitle>
              <VCardText
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis
                quis est labore voluptatibus!</VCardText
              >
            </VCard>
          </VCol>
        </VRow>
      </VSheet>
    </VContainer>
  </VMain>
</template>
