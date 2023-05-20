<script setup>
import { useI18n } from 'vue-i18n'
import RedButton from '@/components/UI/RedButton.vue'
import LanguageSwitcher from '@/components/shared/header/LanguageSwitcher.vue'
const { t } = useI18n()
</script>

<template>
  <header class="bg-transparent flex justify-between items-center py-6">
    <h3 class="text-sm text-offGold font-medium md:text-base">MOVIE QUOTES</h3>
    <div class="flex gap-3">
      <LanguageSwitcher />
      <RedButton class="px-6 py-2 hidden md:flex">{{ t('landing.signup') }}</RedButton>
      <button
        class="px-6 py-2 border border-white flex justify-center items-center text-white rounded hover:text-darkBlue hover:bg-white transition-colors"
      >
        {{ t('landing.login') }}
      </button>
    </div>
  </header>
</template>
