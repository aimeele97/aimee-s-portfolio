<script setup lang="ts">
import { contactItems } from '@/constants/contacts'
import { sectionId, SectionType } from '@/constants/sections'
</script>

<template>
  <VSheet :id="sectionId(SectionType.Contact)" class="pa-4 mt-4" rounded border>
    <div class="mb-4">
      <div class="text-h5 font-weight-bold mb-2">Contact</div>
    </div>
    <div
      class="mb-2 d-flex gc-2"
      v-for="contactItem in contactItems"
      :key="contactItem.contactType"
    >
      <div style="width: 30px" class="d-flex justify-center align-center">
        <ContactIcon :contact-type="contactItem.contactType"></ContactIcon>
      </div>
      <a :href="contactItem.link" target="_blank">{{ contactItem.contactType }}</a>
    </div>
  </VSheet>
</template>
