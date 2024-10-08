<script setup lang="ts">

</script>

<template>
  <div class="catcher-wrapper">
    <div class="catcher-glass">
      <div class="catcher-glass-wrapper">
        <div class="catcher-glass-block">
          <div class="catcher-glass-block-title">
            <h1>Пирсинг</h1>
            <h2>в Курске</h2>
          </div>
          <div class="catcher-glass-block-description">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.           </div>
        </div>
        <div class="catcher-glass-block">
          <ul class="catcher-glass-block-table">
            <li>Pos ______ 1000руб</li>
            <li>Pos ______ 1000руб</li>
            <li>Pos ______ 1000руб</li>
            <li>Pos ______ 1000руб</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catcher {
  &-wrapper {
    width: 100%;
    display: flex;
    height: calc(100vh);
    background: url("/images/bg.jpg") no-repeat center;
    background-size: 100%;
    justify-content: center;
  }

  &-glass {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    width: 50%;
    margin: 150px 0;
    display: flex;
    &-block{
      &-title {
        & h1 {
          font-size: 64px;
          line-height: 64px;
        }
        & h2 {
          font-size: 50px;
          line-height: 50px;
        }
      }
      &-description {
        margin-top: 30px;
        width: 400px;
      }
    }
    &-wrapper {
      display: flex;
      margin: 50px;
      align-items: center;
      justify-content: space-between;
      color: white;
      width: 100%;
    }
  }
}
</style>