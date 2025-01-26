<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <RouterView />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<style scoped>

</style>
