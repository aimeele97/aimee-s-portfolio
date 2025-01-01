<script setup lang="ts">
import introPic from '@/assets/intro-avatar.jpg'
import { contactItems, type ContactItem } from '@/constants/contacts'
import { projects, type ProjectNavItem } from '@/constants/projects'
import { querySelectorSectionId, SectionType } from '@/constants/sections'
import { useGoTo } from 'vuetify'

const open = defineModel()
open.value = ['projects']

const handleProjectItemClick = (projectItem: ProjectNavItem) => {
  window.open(projectItem.githubLink, '_blank')
}

const handleContactItemClick = (contactItem: ContactItem) => {
  window.open(contactItem.link, '_blank')
}

const goTo = useGoTo()
const goToSection = (sectionType: SectionType) => {
  goTo(querySelectorSectionId(sectionType))
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
      <VListItem
        title="Introduction"
        value="Introduction"
        rounded
        @click="goToSection(SectionType.Introduction)"
      ></VListItem>
      <VListGroup value="projects">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Personal Projects"
            rounded
            @click.prevent="goToSection(SectionType.Projects)"
          ></VListItem>
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
      <VListItem
        title="Certifications"
        value="certifications"
        rounded
        @click="goToSection(SectionType.Certifications)"
      ></VListItem>
      <VListItem
        title="Contact"
        value="contact"
        rounded
        @click="goToSection(SectionType.Contact)"
      ></VListItem>
    </VList>
  </div>
  <div class="px-6 d-flex gc-2">
    <div
      v-for="contactItem in contactItems"
      :key="contactItem.contactType"
      class="d-flex justify-center align-center"
      @click="handleContactItemClick(contactItem)"
      style="cursor: pointer"
    >
      <ContactIcon :contact-type="contactItem.contactType"></ContactIcon>
    </div>
  </div>
</template>
