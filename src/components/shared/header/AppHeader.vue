<script setup>
import SignUpButton from '@/components/UI/RedButton.vue'
import LanguageSwitcher from '@/components/shared/header/LanguageSwitcher.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore.js'
import request from '@/config/axiosInstance.js'

const userStore = useUserStore()
userStore.fetchUser()
const { clearUser } = userStore

const router = useRouter()
const handleLogout = async () => {
  try {
    await request.post('/api/logout')
    clearUser()
    router.push('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <header class="bg-transparent flex justify-between items-center py-6 px-9 md:px-[70px]">
    <h3 class="text-sm text-offGold font-medium md:text-base">MOVIE QUOTES</h3>

    <div class="flex gap-3">
      <LanguageSwitcher />
      <SignUpButton
        class="px-6 py-2 hidden md:flex"
        @click="() => router.push({ name: 'register' })"
        v-if="!userStore.isLoggedIn"
        >{{ $t('landing.signup') }}
      </SignUpButton>
      <button
        @click="() => router.push({ name: 'login' })"
        v-if="!userStore.isLoggedIn"
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ $t('landing.login') }}
      </button>
      <button
        @click="handleLogout"
        v-if="userStore.isLoggedIn"
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ $t('landing.logout') }}
      </button>
    </div>
  </header>
</template>
