<script setup lang="ts">
import { cardColor } from '@/constants/colors'
import { projects, type ProjectNavItem } from '@/constants/projects'
import { mdiGithub, mdiOpenInNew } from '@mdi/js'

const handleProjectItemClick = (projectItem: ProjectNavItem) => {
  window.open(projectItem.linkToProject, '_blank')
}
</script>
<template>
  <VSheet class="pa-4 mt-4" rounded border>
    <div class="mb-4">
      <div class="text-h5 font-weight-bold mb-2">Personal projects</div>
    </div>
    <VRow>
      <template v-for="project in projects" :key="project.projectType">
        <VCol>
          <VCard :color="cardColor" height="280" hover>
            <VImg class="bg-grey-lighten-2" src="https://picsum.photos/350/165?random"></VImg>
            <VCardText>
              <div class="text-body-1 font-weight-medium">
                {{ project.shortName }}
              </div>
            </VCardText>
            <VCardActions>
              <VBtn color="grey-darken-3" variant="tonal" @click="handleProjectItemClick(project)">
                <template #prepend>
                  <VIcon :icon="mdiGithub"></VIcon>
                </template>
                See Github repo
                <template #append>
                  <VIcon :icon="mdiOpenInNew"></VIcon>
                </template>
              </VBtn>
            </VCardActions>
          </VCard>
        </VCol>
      </template>
    </VRow>
  </VSheet>
</template>
