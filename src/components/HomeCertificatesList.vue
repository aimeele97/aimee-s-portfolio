<script setup lang="ts">
import { certiItems } from '@/constants/certificates'
import { cardColor } from '@/constants/colors'
import { mdiOpenInNew } from '@mdi/js'
</script>

<template>
  <VSheet class="pa-4 mt-4" rounded border>
    <div class="mb-4">
      <div class="text-h5 font-weight-bold mb-2">My certifications</div>
    </div>
    <VRow>
      <template v-for="certiItem in certiItems" :key="certiItem.certiType">
        <VCol>
          <VCard :color="cardColor" hover link target="_blank" :href="certiItem.linkToCerti">
            <VImg :src="certiItem.certiImgSrc"></VImg>

            <VCardItem>
              <VCardTitle>
                {{ certiItem.certiName }}
              </VCardTitle>
              <template #append>
                <VIcon :icon="mdiOpenInNew" size="x-small"></VIcon>
              </template>
            </VCardItem>
          </VCard>
        </VCol>
      </template>
    </VRow>
  </VSheet>
</template>
