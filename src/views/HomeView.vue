<script setup lang="ts">
import { projects } from '@/constants/projects'
import { mdiOpenInNew } from '@mdi/js'
</script>

<template>
  <VSheet class="pa-4 mt-2" rounded border>
    <div class="text-h4 mb-4">Hi. I'm <span class="font-weight-bold">Aimee Le.</span></div>
    <div class="text-h5 mb-4">Welcome to my data analytics portfolio!</div>
    <div class="text-justify">
      I am a business professional with over 2 years of experience across diverse industries,
      including retail, factory, freight forwarding, and hotel. During this time, I discovered my
      true passion for data analytics. This website is a collection of my data analytics projects,
      which demonstrate how I leverage domain knowledge, online learning, analytical thinking,
      problem-solving abilities, and technical skills to solve business challenges, recommend
      solutions and present these insights through clear visualizations to stakeholders.
    </div>
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
      <template v-for="project in projects" :key="project.projectType">
        <VCol>
          <VCard
            color="indigo-darken-1"
            height="280"
            hover
            link
            :href="project.linkToProject"
            target="_blank"
          >
            <VImg class="bg-grey-lighten-2" src="https://picsum.photos/350/165?random"></VImg>
            <VCardItem>
              <VCardTitle class="text-h6"> {{ project.shortName }} </VCardTitle>
              <template #append>
                <VIcon :icon="mdiOpenInNew"></VIcon>
              </template>
            </VCardItem>
            <VCardText class="text-justify">
              {{ project.shortDesc }}
            </VCardText>
          </VCard>
        </VCol>
      </template>
    </VRow>
  </VSheet>
  <VSheet></VSheet>
</template>
