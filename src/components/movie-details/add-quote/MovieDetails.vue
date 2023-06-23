<script setup>
import useGetImagePath from '@/composables/useGetImagePath.js'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import genreList from '@/stores/genres.js'

const { locale } = useI18n()
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})
const imageSource = computed(() => useGetImagePath(props.movie.poster))
const name = computed(() => props.movie.name[locale.value])
const director = computed(() => props.movie.director[locale.value])

const genres = computed(() => {
  const genres = props.movie.genre.split(',')
  return genres.map((genre, index) => Object.values(genreList[locale.value])[index])
})
</script>

<template>
  <div class="flex items-center gap-3 lg:gap-[30px]">
    <div class="w-28 h-24 lg:h-40 lg:w-72">
      <img :src="imageSource" alt="movie" class="rounded-xl h-full w-full object-cover" />
    </div>
    <div class="flex flex-col gap-2 lg:gap-5">
      <h2 class="text-[#DDCCAA] lg:text-2xl font-bold">{{ name }}</h2>
      <ul class="flex items-center gap-2 flex-wrap">
        <li
          v-for="genre in genres"
          :key="genre"
          class="font-bold text-[12px] lg:text-lg py-1 px-2 lg:px-3 bg-[#6C757D] rounded"
        >
          {{ genre }}
        </li>
      </ul>
      <p class="font-medium">
        <span class="text-lightGray lg:text-lg font-bold"
          >{{ $t('movie_details.director') }}:
        </span>
        {{ director }}
      </p>
    </div>
  </div>
</template>
