<script setup lang="ts">
import CarouselItem from './CarouselItem.vue'
const props = defineProps(['images'])
console.log(props.images)
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-controls"></div>
    <div class="carousel-list">
      <CarouselItem :key="img.id" :img="img" v-for="img in images"/>
    </div>
  </div>
</template>

<style scoped>
  .carousel-wrapper {
    display: flex;
    width: 100%;
    overflow: auto;
  }
</style>