import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import Login from '@/components/modals/LoginModal.vue'
import Register from '@/components/modals/RegistrationModal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/login',
      components: {
        default: Login,
        overlay: LandingView
      }
    },
    {
      path: '/register',
      components: {
        default: Register,
        overlay: LandingView
      }
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
