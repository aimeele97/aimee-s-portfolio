<script setup lang="ts">
import { sectionId, SectionType } from '@/constants/sections'
</script>

<template>
  <VSheet :id="sectionId(SectionType.Introduction)" class="pa-4 mt-2" rounded border>
    <div class="mb-4">
      <div class="text-h5 font-weight-bold mb-2">Introduction</div>
    </div>
    <div class="text-justify mb-2">
      Hello! I’m <span class="font-weight-bold">Aimee (Thi Cam Tien) Le</span>, an enthusiastic
      <span class="font-weight-bold">Associate Analyst </span> with hands-on experience in data
      cleaning, analysis, and visualization. I specialize in transforming complex datasets into
      actionable insights that support strategic decision-making and business improvement. With a
      strong foundation in tools like
      <span class="font-weight-bold"> SQL, Excel, Python, R, Tableau</span>, I am adept at using
      statistical and financial models to drive analysis and problem-solving across various business
      domains.
    </div>

    <div class="text-justify mb-2">
      I thrive in collaborative environments, working alongside cross-functional teams to provide
      clear, data-driven recommendations that help organizations optimize performance. I am always
      eager to grow my skill set, contribute to impactful projects, and support continuous
      improvement through data-driven solutions.
    </div>
    <div>
      Take a look at my portfolio to explore the work I've done and the value I can bring to your
      organization.
    </div>
  </VSheet>
</template>
