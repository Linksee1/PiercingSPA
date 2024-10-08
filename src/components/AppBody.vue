<script setup lang="ts">

</script>

<template>
  <div class="body-background">
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.body {
  width: 100%;
}

.body-background {
  width: 100%;
  background-color: var(--secondary-background-color);
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>