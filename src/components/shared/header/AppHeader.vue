<script setup>
import SignUpButton from '@/components/UI/RedButton.vue'
import LanguageSwitcher from '@/components/shared/header/LanguageSwitcher.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'
import request from '@/config/axiosInstance.js'
import NotificationsButton from '@/components/shared/header/NotificationsButton.vue'
import HamburgerMenu from '@/components/icons/TheHamburgerMenuIcon.vue'
import { useModalStore } from '@/stores/modalStore.js'
import { useSearchStore } from '@/stores/searchStore.js'
import SearchIcon from '@/components/icons/TheSearchIcon.vue'
import Notifications from '@/components/notifications/NotificationsWrapper.vue'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, provide } from 'vue'
import { useNotificationStore } from '@/stores/notificationStore'
import { echo } from '@/echo.js'

defineProps({
  showNotificationsButton: {
    type: Boolean,
    required: false
  }
})

onMounted(() => {
  echo.private(`notifications.${userStore.user.id}`).listen('QuoteNotificationEvent', (data) => {
    if (userStore.user.id === data.receiverId) {
      useNotificationStore().addNewNotification(data.notification)
    }
  })
})

const searchStore = useSearchStore()
const modalStore = useModalStore()
const userStore = useUserStore()
const { name: routeName } = useRoute()
userStore.fetchUser()
const { clearUser } = userStore
const showNotifications = ref(false)
provide('showNotifications', showNotifications)
const router = useRouter()
const currentRoute = computed(() => router.currentRoute.value.path)

const handleLogout = async () => {
  try {
    await request.post('/api/logout')
    clearUser()
    router.push({ name: 'login' })
  } catch (error) {
    console.error(error)
  }
}
const newNotificationsCount = computed(() => useNotificationStore().newNotificationsCount)
</script>

<template>
  <header
    class="fixed select-none top-0 z-50 w-full bg-transparent h-[86px] flex justify-between items-center py-6 px-4 md:px-[40px] xl:px-[70px]"
  >
    <h3 class="hidden md:block text-sm text-offGold font-medium md:text-base">MOVIE QUOTES</h3>
    <HamburgerMenu
      class="cursor-pointer md:hidden text-white text-2xl"
      @click="modalStore.setShowMobileNavigation(true)"
    />
    <div class="flex items-center gap-3">
      <SearchIcon
        class="lg:hidden cursor-pointer mr-5 h-6 w-6"
        color="white"
        @click="() => searchStore.setShowSearchBar(true)"
        v-if="routeName === 'news-feed'"
      />
      <NotificationsButton
        :count="newNotificationsCount"
        v-if="showNotificationsButton"
        @click="() => (showNotifications = !showNotifications)"
      />
      <LanguageSwitcher />
      <SignUpButton
        class="px-6 py-2 hidden md:flex"
        @click="() => router.push({ name: 'register' })"
        v-if="!userStore.isLoggedIn"
        >{{ $t('landing.signup') }}
      </SignUpButton>
      <button
        @click="() => router.push({ name: 'login' })"
        v-if="!userStore.isLoggedIn && !currentRoute.startsWith('/auth')"
        class="px-4 py-1.5 md:px-6 md:py-[6px] border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ $t('landing.login') }}
      </button>
      <button
        @click="handleLogout"
        v-if="userStore.isLoggedIn"
        class="px-4 py-1.5 md:px-6 md:py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ $t('landing.logout') }}
      </button>
      <Notifications v-if="showNotifications && !currentRoute.startsWith('/auth') && currentRoute !== '/'" />
    </div>
  </header>
</template>
