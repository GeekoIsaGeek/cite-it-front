import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import Login from '@/components/modals/LoginModal.vue'
import Register from '@/components/modals/RegistrationModal.vue'
import ConfirmEmail from '@/components/modals/Feedbacks/ConfirmEmail.vue'
import AccountActivated from '@/components/modals/Feedbacks/AccountActivated.vue'
import ForgotPassword from '@/components/modals/ForgotPassword.vue'
import ConfirmPasswordResetEmail from '@/components/modals/Feedbacks/ConfirmPasswordResetEmail.vue'
import PasswordUpdated from '@/components/modals/Feedbacks/PasswordUpdated.vue'
import LinkExpired from '@/components/modals/Feedbacks/LinkExpired.vue'
import UpdatePassword from '@/components/modals/UpdatePassword.vue'

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
      name: 'login',
      components: {
        default: Login,
        overlay: LandingView
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: Register,
        overlay: LandingView
      }
    },
    {
      path: '/email-confirmation',
      name: 'email-confirmation',
      components: {
        default: ConfirmEmail,
        overlay: LandingView
      }
    },
    {
      path: '/verification-succeed',

      components: {
        default: AccountActivated,
        overlay: LandingView
      },
      name: 'verification-succeed'
    },
    {
      path: '/forgot-password',
      components: {
        default: ForgotPassword,
        overlay: LandingView
      },
      name: 'forgot-password'
    },
    {
      path: '/password-reset-email-confirmation',
      components: {
        default: ConfirmPasswordResetEmail,
        overlay: LandingView
      },
      name: 'password-reset-email-confirmation'
    },
    {
      path: '/password-updated',
      components: {
        default: PasswordUpdated,
        overlay: LandingView
      },
      name: 'password-updated'
    },
    {
      path: '/link-expired',
      components: {
        default: LinkExpired,
        overlay: LandingView
      },
      name: 'link-expired'
    },
    {
      path: '/update-password',
      name: 'update-password',
      components: {
        default: UpdatePassword,
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
