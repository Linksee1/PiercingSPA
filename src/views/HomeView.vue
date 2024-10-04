<script setup lang="ts">
  import AppBody from '../components/AppBody.vue'
  import AppFooter from '../components/AppFooter.vue'
  import CatcherComponent from '../components/CatcherComponent.vue'
  import AppHeader from '../components/AppHeader.vue'
</script>

<template>
  <AppHeader/>
  <AppBody>
      <h1>test</h1>
      <CatcherComponent/>
      <PorfolioCarousel/>
      <Prices/>
      <NoGun/>
  </AppBody>
  <AppFooter/>
</template>

<style scoped>

</style>