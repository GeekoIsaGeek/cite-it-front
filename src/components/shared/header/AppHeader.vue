<script setup>
import { useI18n } from 'vue-i18n'
import SignUpButton from '@/components/UI/RedButton.vue'
import LanguageSwitcher from '@/components/shared/header/LanguageSwitcher.vue'
import LoginModal from '@/components/modals/LoginModal.vue'
import RegistrationModal from '@/components/modals/RegistrationModal.vue'
import { ref } from 'vue'
const { t } = useI18n()
const showLoginModal = ref(false)
const showRegistrationModal = ref(false)
</script>

<template>
  <header class="bg-transparent flex justify-between items-center py-6 px-9 md:px-[70px]">
    <h3 class="text-sm text-offGold font-medium md:text-base">MOVIE QUOTES</h3>
    <LoginModal v-if="showLoginModal" :showLoginModal="showLoginModal" />
    <RegistrationModal v-if="showRegistrationModal" />
    <div class="flex gap-3">
      <LanguageSwitcher />
      <SignUpButton class="px-6 py-2 hidden md:flex" @click="showRegistrationModal = true">{{
        t('landing.signup')
      }}</SignUpButton>
      <button
        @click="showLoginModal = true"
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ t('landing.login') }}
      </button>
    </div>
  </header>
</template>
