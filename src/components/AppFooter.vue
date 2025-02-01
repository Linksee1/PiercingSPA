<script setup lang="ts">

</script>

<template>
  <v-footer class="flex-0-0" border height="250px">
  <v-container>
    <v-row>
      <v-col cols="6" class="flex-column justify-start">
        <span class="footer-col-label">Адрес</span>
        <div>
          г.Курск ул. Гоголя 47
        </div>
        <v-btn>Показать на карте</v-btn>
      </v-col>
      <v-col class="flex-column justify-end align-content-end" cols="6">
        <v-row class="justify-end">
          <span class="footer-col-label">Запись через:</span>
        </v-row>
        <v-row class="justify-end">
          <v-list-item target="_blank" href="https://vk.com/club219185177" title="Группу vk"></v-list-item>
        </v-row>
        <v-row class="justify-end">
          <v-list-item target="_blank" href="https://t.me/piercingkursk" title="Telegram"></v-list-item>
        </v-row>
        <v-row class="justify-end">
          <v-list-item href="tel:+7-777-777-777" title="+7-777-777-777"></v-list-item>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        2025
      </v-col>
    </v-row>
  </v-container>

  </v-footer>
</template>

<style scoped lang="scss">

</style>