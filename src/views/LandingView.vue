<script setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import MovieWrapper from '@/components/landing/MovieWrapper.vue'
import AppHeader from '@/components/shared/header/AppHeader.vue'
import NavigationMobile from '@/components/news-feed/NavigationMobile.vue'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore.js'
import { useRouter } from 'vue-router'

onMounted(() => {
  if (useUserStore().user.id) {
    useRouter().push('news-feed')
  }
})
</script>

<template>
  <div class="bg-darkBlue min-h-screen">
    <NavigationMobile />
    <AppHeader />
    <HeroSection />
    <div class="relative">
      <div class="bg-gradient-to-r from-black z-0 absolute top-0 left-0 h-full w-full"></div>
      <MovieWrapper
        :quote="$t('landing_movies.interstellar')"
        :movie="$t('landing_movies.interstellar_movie')"
        class="pt-[40%] lg:pt-[30vh] bg-[url('@/assets/images/image-1.png')] bg-local"
        id="first-movie"
      />
      <MovieWrapper
        :quote="$t('landing_movies.tenenbaums')"
        :movie="$t('landing_movies.tenenbaums_movie')"
        class="pt-[40%] lg:pt-[45vh] bg-[url('@/assets/images/image-3.png')] bg-local lg:bg-fixed"
      />
      <MovieWrapper
        :quote="$t('landing_movies.lord_of_the_rings')"
        :movie="$t('landing_movies.lord_of_the_rings_movie')"
        class="pt-[40%] lg:pt-[60vh] bg-[url('@/assets/images/image-2.png')] bg-local lg:bg-fixed"
      />
    </div>
    <p class="text-offGold text-[8px] md:font-medium md:text-sm py-[10px] md:py-4 px-9 md:px-[70px]">
      © 2022 movie quotes. {{ $t('landing.footer_text') }}.
    </p>
  </div>
</template>
