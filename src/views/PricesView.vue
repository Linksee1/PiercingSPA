<script setup lang="ts">

import PriceTable from '@/components/PriceTable.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Цены</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PriceTable></PriceTable>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-h6 text-center mb-2">
          Узнать подробности, уточнить цены и записаться вы можете воспользовавшись контактами ниже
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>