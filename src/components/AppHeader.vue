<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-container">
        <a href="/" class="header-logo">
          <span>Raccoon</span>
          <span>piercing</span>
        </a>
        <ul class="header-list">
          <li class="header-list-item">
            <a href="#">Main</a>
          </li>
          <li class="header-list-item">
            <a href="#">Prices</a>
          </li>
          <li class="header-list-item">
            <a href="#">Portfolio</a>
          </li>
          <li class="header-list-item">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>

  </header>
</template>

<style scoped lang="scss">
$headerHeight: 100px;

.header {
  height: $headerHeight;
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