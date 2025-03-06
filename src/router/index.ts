import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurPackages from '@/views/OurPackages.vue'
import BookNow from '@/views/BookNow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/packages',
      name: 'packages',
      component: OurPackages,
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookNow,
    },
  ],
})

export default router
