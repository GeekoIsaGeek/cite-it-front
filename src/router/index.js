import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import NewsFeedView from '@/views/NewsFeedView.vue'
import authRoutes from '@/router/authRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/news-feed',
      name: 'news-feed',
      component: NewsFeedView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
