<script setup lang="ts">
import { cardColor } from '@/constants/colors'
import { projects, type ProjectNavItem } from '@/constants/projects'
import { mdiGithub, mdiOpenInNew } from '@mdi/js'
import ProjectImg from './ProjectImg.vue'
import { sectionId, SectionType } from '@/constants/sections'

const handleProjectItemClick = (projectItem: ProjectNavItem) => {
  window.open(projectItem.githubLink, '_blank')
}
</script>
<template>
  <VSheet :id="sectionId(SectionType.Projects)" class="pa-4 mt-4" rounded border>
    <div class="mb-4">
      <div class="text-h5 font-weight-bold mb-2">Personal projects</div>
    </div>
    <VRow>
      <template v-for="project in projects" :key="project.projectType">
        <VCol>
          <VCard class="h-100" :color="cardColor" hover>
            <ProjectImg :project-type="project.projectType"></ProjectImg>
            <VCardText class="d-flex flex-column ga-2">
              <div class="text-body-1 font-weight-medium">
                {{ project.shortName }}
              </div>
              <div>
                <VBtn size="x-small" variant="outlined" @click="handleProjectItemClick(project)">
                  <template #prepend>
                    <VIcon :icon="mdiGithub"></VIcon>
                  </template>
                  See Github repo
                  <template #append>
                    <VIcon :icon="mdiOpenInNew"></VIcon>
                  </template>
                </VBtn>
              </div>
              <div class="d-flex flex-wrap ga-1 pt-2">
                <span class="text-orange-darken-2">Tools:</span>
                <VChip
                  v-for="tool in project.tools"
                  :key="tool"
                  label
                  size="small"
                  density="compact"
                  >{{ tool }}</VChip
                >
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </template>
    </VRow>
  </VSheet>
</template>
