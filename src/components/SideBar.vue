<script setup lang="ts">
import introPic from '@/assets/intro-avatar.jpg'

const open = defineModel()
open.value = ['projects']
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
        <VListItem title="Project 1" value="project1" rounded></VListItem>
        <VListItem title="Project 2" value="project2" rounded></VListItem>
        <VListItem title="Project 3" value="project3" rounded></VListItem>
        <VListItem title="Project 4" value="project4" rounded></VListItem>
      </VListGroup>
      <VListItem title="Contact" value="contact" rounded></VListItem>
    </VList>
  </div>
</template>
