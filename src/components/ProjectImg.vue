<script setup lang="ts">
import CyclisticImgSrc from '@/assets/projects/cyclistic.jpg'
import HousingImgSrc from '@/assets/projects/housing-prices.jpg'
import MintClassicsImgSrc from '@/assets/projects/mint-classics.jpg'
import NetflixReviewsImgSrc from '@/assets/projects/netflix-reviews.jpg'
import { ProjectType } from '@/constants/projects'

const { projectType } = defineProps<{
  projectType: ProjectType
}>()
</script>

<template>
  <template v-if="projectType == ProjectType.Cyclistic">
    <VImg :src="CyclisticImgSrc"></VImg>
  </template>
  <template v-else-if="projectType == ProjectType.Housing">
    <VImg :src="HousingImgSrc"></VImg>
  </template>
  <template v-else-if="projectType == ProjectType.MintClassics">
    <VImg :src="MintClassicsImgSrc"></VImg>
  </template>
  <template v-else>
    <VImg :src="NetflixReviewsImgSrc"></VImg>
  </template>
</template>
