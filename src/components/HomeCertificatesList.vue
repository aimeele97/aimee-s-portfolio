<script setup lang="ts">
import { certiItems } from '@/constants/certificates'
</script>

<template>
  <VSheet class="pa-4 mt-4" rounded border>
    <div class="text-center mb-4">
      <div class="text-h5 font-weight-bold mb-2">My certifications</div>
      <div class="text-h6">
        <span class="text-indigo-lighten-1 font-weight-bold">Tools and techniques: </span>
        Speadsheets, SQL, Tableau, Python.
      </div>
    </div>
    <VRow>
      <template v-for="certiItem in certiItems" :key="certiItem.certiType">
        <VCol>
          <VCard height="280" hover link target="_blank" :href="certiItem.linkToCerti">
            <VImg :src="certiItem.certiImgSrc"></VImg>
            <VCardText class="text-justify">
              {{ certiItem.certiName }}
            </VCardText>
          </VCard>
        </VCol>
      </template>
    </VRow>
  </VSheet>
</template>
