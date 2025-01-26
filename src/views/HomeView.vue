<script setup lang="ts">
import CatcherComponent from '../components/CatcherComponent.vue'
import PriceTable from '@/components/PriceTable.vue'
import PortfolioShort from '@/components/PortfolioShort.vue'
</script>

<template>
  <CatcherComponent />
  <v-container>
    <v-row>
      <v-col>
        <v-row class="d-flex justify-center">
          <h1 class="text-center my-10">Цены</h1>
        </v-row>
        <v-row>
          <v-col>
            <PriceTable></PriceTable>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row class="d-flex justify-center">
          <h1 class="text-center my-10">Портфолио</h1>
        </v-row>
        <v-row>
          <PortfolioShort></PortfolioShort>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>