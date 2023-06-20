<script setup>
import MainSectionHeading from '@/components/movie-details/MainSectionHeading.vue'
import MainSectionGenres from '@/components/movie-details/MainSectionGenres.vue'
import { useI18n } from 'vue-i18n'
import { inject } from 'vue'

const movie = inject('movie')
const { locale } = useI18n()
</script>

<template>
  <div class="flex items-start flex-col lg:flex-row gap-5 mt-8 w-full px-9 lg:px-0">
    <div class="w-full full h-[300px] lg:h-[440px]">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80"
        alt="movie"
        class="h-full w-full rounded-xl object-cover"
      />
    </div>
    <div class="w-full flex flex-col gap-5 text-lightGray">
      <MainSectionHeading />
      <MainSectionGenres />
      <p class="text-lg font-bold">
        {{ $t('movie_details.director') }}:
        <span class="text-white font-medium">{{ movie.director[locale] }}</span>
      </p>
      <p class="text-lg">
        {{ movie.description[locale] }}
      </p>
    </div>
  </div>
</template>
