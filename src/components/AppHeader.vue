<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-container">
        <RouterLink to="/" class="header-logo">
          <span>Raccoon</span>
          <span>piercing</span>
        </RouterLink >
        <ul class="header-list">
          <li class="header-list-item">
            <RouterLink to="#">Main</RouterLink>
          </li>
          <li class="header-list-item">
            <RouterLink to="#">Prices</RouterLink>
          </li>
          <li class="header-list-item">
            <RouterLink to="#">Portfolio</RouterLink>
          </li>
          <li class="header-list-item">
            <RouterLink to="#">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
$headerHeight: 100px;

.header {
  display: flex;
  width: 100%;
  background: black;
  position: relative;

  &-logo {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 30px;
    margin: 0;
    padding: 0;
    line-height: 30px;
  }

  &-container {
    width: var(--nav-width);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  &-wrapper {
    display: flex;
    background-color: rgba(0, 0, 0, 0.40);
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: $headerHeight;
    justify-content: center;
  }

  &-list {
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