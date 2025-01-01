<script setup lang="ts">
import { contactItems } from '@/constants/contacts'
</script>

<template>
  <VSheet class="pa-4 mt-4" rounded border>
    <div class="mb-4">
      <div class="text-h5 font-weight-bold mb-2">Contact</div>
      <div>Connect with me via:</div>
    </div>
    <div
      class="mb-2 d-flex gc-2"
      v-for="contactItem in contactItems"
      :key="contactItem.contactType"
    >
      <div style="width: 30px" class="d-flex justify-center align-center">
        <ContactIcon :contact-type="contactItem.contactType"></ContactIcon>
      </div>
      <div class="text-body-1">{{ contactItem.contactType }}</div>
    </div>
  </VSheet>
</template>
