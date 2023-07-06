<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TopPanel from '@/components/movies/TheTopPanel.vue'
import MovieCard from '@/components/movies/MovieCard.vue'
import AddNewMovie from '@/components/modals/AddNewMovie.vue'
import { useModalStore } from '@/stores/modalStore.js'
import { useSearchStore } from '@/stores/searchStore.js'

import { useMovieStore } from '@/stores/movieStore'
import { ref } from 'vue'
import { watch, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'

import NothingFoundMessage from '@/components/shared/NothingFoundMessage.vue'

const { searchString } = storeToRefs(useSearchStore())
const { showAddMovieModal } = storeToRefs(useModalStore())
const { movies: movieList } = storeToRefs(useMovieStore())
const movies = ref([...movieList.value])

watchEffect(() => (movies.value = movieList.value), movieList.value)

watch(searchString, (updatedSearchString) => {
  if (updatedSearchString === '') {
    movies.value = movieList.value
  } else {
    updatedSearchString = updatedSearchString.toLowerCase()
    movies.value = movieList.value.filter(
      (movie) =>
        movie.name.en.toLowerCase().startsWith(updatedSearchString) ||
        movie.name.ka.toLowerCase().startsWith(updatedSearchString)
    )
  }
})
console.log(movies.value)
</script>

<template>
  <Wrapper>
    <div class="flex flex-col min-h-[100vh] lg:w-full bg-veryDarkPurple pt-4 pb-[120px] relative">
      <TopPanel />
      <div
        class="grid grid-auto-fill-sm lg:grid-auto-fill justify-items-center gap-y-10 gap-x-[10px]"
        v-if="movies.length > 0"
      >
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
      <NothingFoundMessage class="pl-5" v-else />
    </div>
    <AddNewMovie v-if="showAddMovieModal" />
  </Wrapper>
</template>
