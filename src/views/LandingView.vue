<script setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/shared/header/AppHeader.vue'

const { t } = useI18n()
</script>

<template>
  <AppHeader />
  <HeroSection />
  <div></div>
  <p class="text-offGold text-[8px] md:font-medium md:text-sm py-[10px] md:py-4 absolute bottom-0">
    © 2022 movie quotes. {{ t('landing.footer_text') }}.
  </p>
</template>
