<script setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/shared/header/AppHeader.vue'

const { t } = useI18n()
</script>

<template>
  <div class="bg-darkBlue min-h-screen">
    <AppHeader />
    <HeroSection />
    <p
      class="text-offGold text-[8px] md:font-medium md:text-sm py-[10px] md:py-4 px-9 md:px-[70px]"
    >
      © 2022 movie quotes. {{ t('landing.footer_text') }}.
    </p>
  </div>
</template>
