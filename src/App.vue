<script setup lang="ts">
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import SideBar from '@/components/SideBar.vue'

const { smAndUp } = useDisplay()
const showSideBar = computed(() => smAndUp.value)
</script>

<template>
  <VLayout>
    <VNavigationDrawer v-if="showSideBar" :permanent="showSideBar">
      <SideBar></SideBar>
    </VNavigationDrawer>
    <VAppBar v-else title="Application bar"></VAppBar>
    <VMain>
      <VContainer>
        <RouterView></RouterView>
      </VContainer>
    </VMain>
  </VLayout>
</template>
