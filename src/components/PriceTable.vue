<script setup lang="ts">
import { ref } from 'vue'

const pricesTable = ref([
  {
    name: "Пирсинг",
    price: "от 1000"
  },
  {
    name: "Прокол ушей",
    price: "от 2000"
  },
  {
    name: "Хеликс-пирсинг",
    price: "от 1200"
  },
  {
    name: "Септум-пирсинг",
    price: "от 1200"
  },
  {
    name: "Индастриал-пирсинг",
    price: "от 1400"
  },
  {
    name: "Прокол пупка",
    price: "от 1200"
  },
  {
    name: "Прокол языка",
    price: "от 1200"
  },
  {
    name: "Прокол брови",
    price: "от 1200"
  },
  {
    name: "Даунсайз",
    price: "от 200"
  },
  {
    name: "Замена украшения",
    price: "от 100"
  }
  ,
  {
    name: "Пирсинг интимной зоны",
    price: "от 2000"
  }
  ,
  {
    name: "Трагус-пирсинг",
    price: "от 1200"
  }
  ,
  {
    name: "Украшения",
    price: "от 200 до 1800"
  }
])
</script>

<template>
  <v-row justify="center">
    <v-col cols="6" >
      <v-table>
        <thead>
        <tr>
          <th class="text-left">Наименование услуги</th>
          <th class="text-right">Цена (₽)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in pricesTable" :key="item.name">
          <td>{{item.name}}</td>
          <td class="text-right">{{item.price}}</td>
        </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>

</template>

<style scoped>

</style>