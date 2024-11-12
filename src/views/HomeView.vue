<script setup lang="ts">
  import AppBody from '../components/AppBody.vue'
  import AppFooter from '../components/AppFooter.vue'
  import CatcherComponent from '../components/CatcherComponent.vue'
  import AppHeader from '../components/AppHeader.vue'
  import Prices from '../components/PriceTable.vue'
</script>

<template>
  <AppHeader/>
  <AppBody>
      <CatcherComponent/>
      <PorfolioCarousel/>
      <Prices/>
      <NoGun/>
  </AppBody>
  <AppFooter/>
</template>

<style scoped>

</style>