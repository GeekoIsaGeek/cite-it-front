<script setup>
import SignUpButton from '@/components/UI/RedButton.vue'
import LanguageSwitcher from '@/components/shared/header/LanguageSwitcher.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user.js'
import request from '@/config/axiosInstance.js'
import { computed } from 'vue'

const { isLoggedIn, clearUser } = useUserStore()
const isAuthorized = computed(() => isLoggedIn)

const router = useRouter()
const handleLogout = async () => {
  try {
    await request.post('/api/logout')
    clearUser()
    router.push('/login')
  } catch (e) {
    console.log(e)
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
        @click="() => router.push('/register')"
        v-if="!isAuthorized"
        >{{ $t('landing.signup') }}</SignUpButton
      >
      <button
        @click="() => router.push('/login')"
        v-if="!isAuthorized"
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ $t('landing.login') }}
      </button>
      <button
        @click="handleLogout"
        v-if="isAuthorized"
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ $t('landing.logout') }}
      </button>
    </div>
  </header>
</template>
