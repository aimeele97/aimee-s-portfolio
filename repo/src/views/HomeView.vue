<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
const showSideBar = computed(() => smAndUp.value)
</script>

<template>
  <VNavigationDrawer v-if="showSideBar" :permanent="showSideBar">
    <VList>
      <VListItem title="Test item"></VListItem>
    </VList>
  </VNavigationDrawer>
  <VAppBar v-else title="Application bar"></VAppBar>
  <VMain class="d-flex align-center justify-center" style="min-height: 300px"> Main Content </VMain>
</template>
