<script setup lang="ts">
const props = defineProps(['img'])
console.log(props.img)
</script>

<template>
  <div class="carousel-item-wrapper">
    <div class="carousel-item">
      <div class="carousel-item-img"><img :src="img.url" alt=""></div>
      <div class="carousel-item-description">{{img.title}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>