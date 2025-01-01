<script setup lang="ts">
import introPic from '@/assets/intro-avatar.jpg'
import { projects, type ProjectNavItem } from '@/constants/projects'

const open = defineModel()
open.value = ['projects']

const handleProjectItemClick = (projectItem: ProjectNavItem) => {
  window.open(projectItem.githubLink, '_blank')
}
</script>
<template>
  <div class="d-flex justify-center px-6 py-4">
    <div>
      <VImg :src="introPic" rounded="circle" width="200"></VImg>
    </div>
  </div>
  <VDivider></VDivider>
  <div class="px-2">
    <VList v-model:opened="open">
      <VListItem title="Home" value="home" rounded></VListItem>
      <VListGroup value="projects">
        <template #activator="{ props }">
          <VListItem v-bind="props" title="Projects" rounded></VListItem>
        </template>
        <VListItem
          v-for="project in projects"
          :key="project.projectType"
          :title="project.shortName"
          :value="project.projectType"
          rounded
          @click="handleProjectItemClick(project)"
        ></VListItem>
      </VListGroup>
      <VListItem title="Contact" value="contact" rounded></VListItem>
    </VList>
  </div>
</template>
