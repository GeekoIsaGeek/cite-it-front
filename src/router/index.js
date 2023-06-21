import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import NewsFeedView from '@/views/NewsFeedView.vue'
import authRoutes from '@/router/authRoutes'
import { useUserStore } from '@/stores/userStore'
import MyProfile from '@/components/my-profile/MyProfile.vue'
import EmailChanged from '@/components/modals/Feedbacks/EmailChanged.vue'
import MoviesView from '@/views/MoviesView.vue'
import MovieDetails from '@/views/MovieDetailsView.vue'
import ViewQuote from '@/components/modals/ViewQuote.vue'
import NewsFeedWrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import EditQuote from '@/components/modals/EditQuote.vue'
import AddNewQuote from '@/components/modals/AddQuoteFromMovie.vue'
import EditMovie from '@/components/modals/EditMovie.vue'

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
      path: '/email-updated',
      name: 'email-updated',
      components: {
        default: LandingView,
        overlay: EmailChanged
      }
    },
    {
      path: '/quote/:id',
      name: 'view-quote',
      components: {
        default: NewsFeedWrapper,
        overlay: ViewQuote
      }
    },
    {
      path: '/quote/:id/edit',
      name: 'edit-quote',
      components: {
        default: NewsFeedWrapper,
        overlay: EditQuote
      }
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/movie/:id',
      name: 'movie-details',
      component: MovieDetails
    },
    {
      path: '/movie/:id/edit',
      name: 'edit-movie',
      components: {
        overlay: EditMovie,
        default: MoviesView
      }
    },
    {
      path: '/movie/:id/add-quote',
      name: 'add-quote',
      components: {
        default: NewsFeedWrapper,
        overlay: AddNewQuote
      }
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()

  if (!Object.keys(userStore.user).length > 0) {
    await userStore.fetchUser()
  }

  if (
    userStore.isLoggedIn &&
    to.path.startsWith('/auth') &&
    !to.path.startsWith('/auth/verification-succeed') &&
    !to.path.startsWith('/auth/email-confirmation')
  ) {
    return { name: 'my-profile' }
  }
  if (!userStore.isLoggedIn && to.name !== 'home' && !to.path.startsWith('/auth')) {
    return { name: 'login' }
  }
})

export default router
