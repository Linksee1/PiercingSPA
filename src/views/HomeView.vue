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
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <h2>Даунсайз 🌸</h2>
        <p>
          Что это такое и что с ним делать?
        </p>
        <p>
          Это замена первичного украшения (которое стоит с запасом длины под отек) на более короткое.
        </p>
        <p>
          Зачем это нужно?

        </p>
        <p>
          Чтоб длинное украшение не мешало заживать, не цеплялось за волосы и одежду, было статичным и не было риска
          миграции канала.

        </p>
        <p>
          Оптимальное время для проведения даунсайза - после первичного заживления (через 1,5-2 месяца после прокола).
        </p>
      </v-col>
      <v-col cols="4">
        <h2>
          Кольца🌕
        </h2>
        <p>
          Многие хотят сделать прокол и сразу поставить в него колечко, но так можно лишь с некоторыми видами (дейс,
          септум, смайл), тогда как во многие проколы сначала ставится прямое украшение. Почему же так?
        </p>
        <ul>
          <li>
            Колечко крутится, травмируя канал и может занести в свежий прокол инфекцию.
          </li>
          <li>
            Кольцо имеет круглую форму и канал начнет формироваться по украшению, в следствие чего будут появляться
            гранулемы, которые требуют лечения.
          </li>
          <li>
            Прямое украшение имеет запас под отёк, статично, его сложней травмировать и зацепить.
          </li>
        </ul>
        <p>
          Колечко можно ставить только в полностью заживший канал - примерно через 5-7 месяцев после прокола, установка на
          более раннем сроке может привести к нежелательным последствиям.

        </p>
        <p>
          Чтобы заживление проходило приятнее и можно было наслаждаться проколом до полного заживления, мы можем ставить
          украшения с различными накрутками - топы, кластеры, опалы и так далее.

        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>