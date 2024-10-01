<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <ul class="header-list">
        <li class="header-list-item">Main</li>
        <li class="header-list-item">Prices</li>
        <li class="header-list-item">Portfolio</li>
        <li class="header-list-item">About</li>
      </ul>
    </div>

  </header>
</template>

<style scoped lang="scss">
  $headerHeight: 100px;
  $headerWidth: 1800px;

  .header {
    height: $headerHeight;
    display: flex;
    width: 100%;
    position: relative;
    &-wrapper {
      display: flex;
      justify-content: center;
      background-color: #27374D;
      position: absolute;
      top: 0;
      width: 100%;
      height: $headerHeight;
    }
    &-list {
      width: $headerWidth;
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      &-item {
        color: white;
        font-size: 20px;
      }

    }
  }
</style>