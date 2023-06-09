<script setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import MovieWrapper from '@/components/landing/MovieWrapper.vue'
import AppHeader from '@/components/shared/header/AppHeader.vue'
import NavigationMobile from '@/components/news-feed/NavigationMobile.vue'
</script>

<template>
  <div class="bg-darkBlue min-h-screen">
    <NavigationMobile />
    <AppHeader />
    <HeroSection />
    <div class="relative">
      <div class="bg-gradient-to-r from-black z-0 absolute top-0 left-0 h-full w-full"></div>
      <MovieWrapper
        quote="You have to leave something behind to go forward"
        movie="Interstellar, 2014"
        class="pt-[40%] lg:pt-[30vh] bg-[url('@/assets/images/image-1.png')] bg-local"
      />
      <MovieWrapper
        quote="I think we’re just gonna have
  to be secretly in love with earch other
  and leave it that"
        movie="The Royal Tenenbaums,2001"
        class="pt-[40%] lg:pt-[45vh] bg-[url('@/assets/images/image-3.png')]"
      />
      <MovieWrapper
        quote="You have to leave somethig behind to go forward"
        movie="Interstellar, 2014"
        class="pt-[40%] lg:pt-[60vh] bg-[url('@/assets/images/image-2.png')]"
      />
    </div>
    <p
      class="text-offGold text-[8px] md:font-medium md:text-sm py-[10px] md:py-4 px-9 md:px-[70px]"
    >
      © 2022 movie quotes. {{ $t('landing.footer_text') }}.
    </p>
  </div>
</template>
