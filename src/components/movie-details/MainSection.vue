<script setup>
import MainSectionHeading from '@/components/movie-details/MainSectionHeading.vue'
import MainSectionGenres from '@/components/movie-details/MainSectionGenres.vue'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useI18n } from 'vue-i18n'
import { toRef, computed } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const movie = toRef(props.movie)
const image = computed(() => useGetImagePath(movie.value.poster))
const { locale } = useI18n()
</script>

<template>
  <div class="flex items-start flex-col lg:flex-row gap-5 mt-8 w-full px-9 lg:px-0">
    <div class="w-full full h-[300px] lg:h-[440px]">
      <img :src="image" alt="movie" class="h-full w-full rounded-xl object-cover" />
    </div>
    <div class="w-full flex flex-col gap-5 text-lightGray">
      <MainSectionHeading :movie="movie" />
      <MainSectionGenres :movie="movie" />
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
