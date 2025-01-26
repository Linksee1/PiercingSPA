<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="2">
          <RouterLink to="/" class="d-flex flex-column">
            <span>Raccoon</span>
            <span>piercing</span>
          </RouterLink>
        </v-col>
        <v-col cols="10" class="align-center d-flex justify-end">
          <ul class="d-flex flex-row nav-bar">
            <li>
              <RouterLink to="/prices">Цены</RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio">Портфолио</RouterLink>
            </li>
            <li>
              <RouterLink to="/about">О нас</RouterLink>
            </li>
            <li>
              <RouterLink to="/map">Карта</RouterLink>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped lang="scss">
  .nav {
    &-bar {
      list-style: none;
      & li {
        margin-left: 10px;
      }
    }
  }
</style>