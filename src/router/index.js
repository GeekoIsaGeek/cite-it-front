import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import NewsFeedView from '@/views/NewsFeedView.vue'
import authRoutes from '@/router/authRoutes'
import { useUserStore } from '@/stores/userStore'
import MyProfile from '@/components/my-profile/MyProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/auth',
      children: [...authRoutes]
    },

    {
      path: '/news-feed',
      name: 'news-feed',
      component: NewsFeedView
    },
    {
      path: '/my-profile',
      name: 'my-profile',
      component: MyProfile
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.beforeEach(async (to, from) => {
  const userStore = useUserStore()

  if (!Object.keys(userStore.user).length > 0) {
    await userStore.fetchUser()
  }

  if (userStore.isLoggedIn && to.path.startsWith('/auth')) {
    return { name: 'my-profile' }
  }
  if (!userStore.isLoggedIn && to.name !== 'home' && !to.path.startsWith('/auth')) {
    return { name: 'login' }
  }
})

export default router
