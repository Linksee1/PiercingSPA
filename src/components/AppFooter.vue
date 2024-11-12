<script setup lang="ts">

</script>

<template>
  <footer class="footer-wrapper">
    <div class="footer">
      <div class="footer-col">
        <span class="footer-col-label">Адрес</span>
        <div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91b70ccc96ce05a38de576d56cdf276f23bd7f56b99bea3efeafaac63522b66c&amp;source=constructor" width="600" height="600" frameborder="0"></iframe>
        </div>
      </div>
      <div class="footer-col">
        <span class="footer-col-label">Время работы</span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="footer-col">
        <span class="footer-col-label">Запись</span>
        any time
        <a href="https://vk.com/club219185177">vk</a>
        <a href="https://t.me/piercingkursk">telegram</a>
        or phone
        <a href="tel:+7-777-777-777">+7-777-777-777</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    display: flex;
    width: var(--nav-width);
    justify-content: space-between;
    &-wrapper {
      background-color: var(--primary-background-color);
      width: 100%;
      display: flex;
      justify-content: center;
    }
    &-col {
      display: flex;
      width: 30%;
      margin: 20px 0;
      flex-direction: column;
      &-label {
        font-size: 24px;
        color: white;
      }
    }
  }
</style>