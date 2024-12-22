<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
const showSideBar = computed(() => smAndUp.value)
</script>

<template>
  <VNavigationDrawer v-if="showSideBar" :permanent="showSideBar">
    <div class="text-h5 px-6 py-4">Aimee Portfolio</div>
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
  <VMain class="d-flex align-center justify-center" style="min-height: 300px">
    <VContainer>
      Welcome to my data analytics portfolio! I am a business professional with over 2 years of
      experience across diverse industries, including retail, factory, freight forwarding, and
      hotel. During this time, I discovered my true passion for data analytics. This website is a
      collection of my data analytics projects, which demonstrate how I leverage domain knowledge,
      online learning, analytical thinking, problem-solving abilities, and technical skills to solve
      business challenges, recommend solutions and present these insights through clear
      visualizations to stakeholders. Platform and Tools: Spreadsheets, SQL, Python, Pandas, Numpy,
      Jupyter Notebooks, R Programming, Tableau, Power BI, Big Query, IBM Cognos. Background:
      International trade, business and finance acumen, admin, supply chain and logistic,
      transportation, operations. Education: Bachelor and Master Degree in International Business
      (finished in 2021).
    </VContainer>
  </VMain>
</template>
