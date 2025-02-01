<script setup lang="ts">

</script>

<template>
  <div class="catcher-wrapper">
    <div class="catcher-glass">
      <div class="catcher-glass-wrapper">
        <v-container>
          <v-row>
            <v-col class="d-flex align-center">
              <h1 class="text-h1">
                <span>
                  Пирсинг
                </span>
                <span>
                   в Курске
                </span>
              </h1>
            </v-col>
            <v-col class="text-body-1">
              <p>
                Делаем пирсинг любой сложности с использованием одноразовых игл и стерильных инструментов.
              </p>
              <v-divider class="my-2"></v-divider>
              <p>
                Большой выбор
                качественных украшений в любой прокол.
              </p>
              <v-divider class="my-2"></v-divider>
              <p>
                Сопровождение до полного заживления, бесплатный даунсайз проколов, сделанных у нас.
              </p>
              <v-divider class="my-2"></v-divider>
              <p>
                Опыт работы больше 6 лет, медицинское образование.
              </p>
              <v-divider class="my-2"></v-divider>
              <p>
                Чай, кофе и вкусняшки в студии.
              </p>
              <v-divider class="my-2"></v-divider>
              <p>
                Адрес: г. Курск ул.Гоголя 47
              </p>
              <v-divider class="my-2"></v-divider>
              <p>
                Телефон для связи: 89103190255
              </p>
            </v-col>
          </v-row>
        </v-container>
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

    &-block {
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