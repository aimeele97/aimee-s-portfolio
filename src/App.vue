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

<style lang="sass">
.markdown-body
  a:not(:hover)
    text-decoration: none

  p
    margin-bottom: 1rem
    line-height: 1.8

    a, a:visited
      color: rgb(var(--v-theme-primary))

  h1
    + p
      font-size: 1.25rem
      font-weight: 300

  ul:not([class]),
  ol:not([class])
    padding-left: 28px
    margin-bottom: 16px
    li
      margin-bottom: 4px
</style>
