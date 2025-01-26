<script setup lang="ts">
import { ref } from 'vue'

const imageList = ref([
  {
    description: 'blah',
    link: '/images/portfolio/bb1.jpg'
  }, {
    description: 'blah',
    link: '/images/portfolio/brow1.jpg'
  }, {
    description: 'blah',
    link: '/images/portfolio/conch1.jpg'
  }, {
    description: 'blah',
    link: '/images/portfolio/daith1.jpg'
  }, {
    description: 'blah',
    link: '/images/portfolio/earlobe1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/fhelix1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/helix1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/industrial1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/lip1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/nosewing1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/rook1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/septum1.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/tongue.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/tragus.jpg'
  }, {
    description: 'fhelix1',
    link: '/images/portfolio/vlabret1.jpg'
  }
])
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel
          show-arrows="hover"
          cycle
          height="800"
          hide-delimiter-background>
          <v-carousel-item v-for="item in imageList" :key="item.link"
                           :src="item.link"

          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="justify-center d-flex">
          <RouterLink to="/portfolio">
            <v-btn>
            Больше примеров наших работ
            </v-btn>
          </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>