<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="2">
          <RouterLink to="/" class="d-flex flex-column">
            <v-btn height="auto"><div class="d-flex flex-column py-2"><span>Raccoon</span><span>piercing</span></div>
            </v-btn>
          </RouterLink>
        </v-col>
        <v-col cols="10" class="align-center d-flex justify-end">
          <ul class="d-flex flex-row nav-bar">
            <li>
              <RouterLink to="/prices">
                <v-btn>Цены</v-btn>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio">
                <v-btn>Портфолио</v-btn>
                </RouterLink>
            </li>
            <li>
              <RouterLink to="/about"><v-btn>О нас</v-btn></RouterLink>
            </li>
            <li>
              <RouterLink to="/map"><v-btn>Карта</v-btn></RouterLink>
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