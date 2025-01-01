<script setup lang="ts">
import { ContactType } from '@/constants/contacts'
import { mdiGithub } from '@mdi/js'
import GmailIcon from '@/assets/contact/gmail-icon.svg'
import LinkedinIcon from '@/assets/contact/linkedin-icon.svg'
import TableauIcon from '@/assets/contact/tableau-icon.svg'

defineProps<{
  contactType: ContactType
}>()
</script>

<template>
  <template v-if="contactType == ContactType.Email">
    <div class="d-inline-block">
      <VImg :src="GmailIcon" width="24" height="24"></VImg>
    </div>
  </template>
  <template v-else-if="contactType == ContactType.Github">
    <VIcon :icon="mdiGithub"></VIcon>
  </template>
  <template v-else-if="contactType == ContactType.Linkedin">
    <div class="d-inline-block">
      <VImg :src="LinkedinIcon" width="24" height="24"></VImg>
    </div>
  </template>
  <template v-else>
    <div class="d-inline-block">
      <VImg :src="TableauIcon" width="20" height="20"></VImg>
    </div>
  </template>
</template>
