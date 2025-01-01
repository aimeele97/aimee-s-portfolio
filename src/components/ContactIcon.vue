<script setup lang="ts">
import { ContactType } from '@/constants/contacts'
import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js'
import TableauIcon from '@/assets/contact/tableau-icon.svg'

defineProps<{
  contactType: ContactType
}>()
</script>

<template>
  <template v-if="contactType == ContactType.Email">
    <VIcon :icon="mdiEmail"></VIcon>
  </template>
  <template v-else-if="contactType == ContactType.Github">
    <VIcon :icon="mdiGithub"></VIcon>
  </template>
  <template v-else-if="contactType == ContactType.Linkedin">
    <VIcon :icon="mdiLinkedin"></VIcon>
  </template>
  <template v-else>
    <div class="d-inline-block">
      <VImg :src="TableauIcon" width="20" height="20"></VImg>
    </div>
  </template>
</template>
