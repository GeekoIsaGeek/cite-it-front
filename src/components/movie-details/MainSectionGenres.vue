<script setup>
import { getLocalizedGenres } from '@/utils/localizationUtils.js'
import { useI18n } from 'vue-i18n'
import { watchEffect } from 'vue'
import { ref } from 'vue'

import { toRef } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const movie = toRef(props.movie)
const { locale } = useI18n()
const genres = ref([])

watchEffect(() => {
  genres.value = getLocalizedGenres(movie.value.genre.split(','), locale.value)
  console.log(genres.value)
}, locale.value)
</script>

<template>
  <ul class="flex items-center gap-2 pt-1 pb-5 flex-wrap">
    <li v-for="genre in genres" :key="genre" class="text-lg font-bold py-[6px] px-3 bg-darkGray text-white rounded">
      {{ genre }}
    </li>
  </ul>
</template>
