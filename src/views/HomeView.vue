<script setup lang="ts">
  import AppBody from '../components/AppBody.vue'
  import AppFooter from '../components/AppFooter.vue'
  import Catcher from '../components/Catcher.vue'
  import AppHeader from '../components/AppHeader.vue'
</script>

<template>
  <AppHeader/>
  <AppBody>
      <h1>test</h1>
      <Catcher/>
      <PorfolioCarousel/>
      <Prices/>
      <NoGun/>
  </AppBody>
  <AppFooter/>
</template>

<style scoped>

</style>