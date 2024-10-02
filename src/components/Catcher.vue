<script setup lang="ts">

</script>

<template>
  <div class="catcher-wrapper">
    <div class="catcher-glass"></div>
  </div>
</template>

<style scoped lang="scss">
  .catcher {
    &-wrapper {
      width: 100%;
      display: flex;
      height: 800px;
      background: url("/images/bg.jpg") no-repeat center;
      background-size: 100%;
    }
    &-glass {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8px);
      width: 100%;
    }
  }
</style>