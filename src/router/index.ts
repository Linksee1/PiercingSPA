import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MapView from '../views/MapView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PricesView from '../views/PricesView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/prices',
      name: 'prices',
      component: PricesView
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

export default router
