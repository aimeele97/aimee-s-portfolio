import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { routes as autoRoutes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...autoRoutes,
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
