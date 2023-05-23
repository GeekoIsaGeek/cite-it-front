<script setup>
import { useI18n } from 'vue-i18n'
import SignUpButton from '@/components/UI/RedButton.vue'
import LanguageSwitcher from '@/components/shared/header/LanguageSwitcher.vue'
import LoginModal from '@/components/modals/LoginModal.vue'
import RegistrationModal from '@/components/modals/RegistrationModal.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const { t } = useI18n()

const router = useRouter()
</script>

<template>
  <header class="bg-transparent flex justify-between items-center py-6 px-9 md:px-[70px]">
    <h3 class="text-sm text-offGold font-medium md:text-base">MOVIE QUOTES</h3>
    <div class="flex gap-3">
      <LanguageSwitcher />
      <SignUpButton class="px-6 py-2 hidden md:flex" @click="() => router.push('/register')">{{
        t('landing.signup')
      }}</SignUpButton>
      <button
        @click="() => router.push('/login')"
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ t('landing.login') }}
      </button>
    </div>
  </header>
</template>
