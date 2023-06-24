<script setup>
import { inject } from 'vue'
import { getLocalizedGenres } from '@/utils/localizationUtils.js'
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'
import { ref } from 'vue'

const movie = inject('movie')
const { locale } = useI18n()
const genres = ref([])

watchEffect(() => {
  genres.value = getLocalizedGenres(movie.genre.split(','), locale.value)
}, locale.value)
</script>

<template>
  <ul class="flex items-center gap-2 pt-1 pb-5 flex-wrap">
    <li
      v-for="genre in genres"
      :key="genre"
      class="text-lg font-bold py-[6px] px-3 bg-darkGray text-white rounded"
    >
      {{ genre }}
    </li>
  </ul>
</template>
