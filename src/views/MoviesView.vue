<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TopPanel from '@/components/movies/TheTopPanel.vue'
import MovieCard from '@/components/movies/MovieCard.vue'
import AddNewMovie from '@/components/modals/AddNewMovie.vue'
import { useGeneralStore } from '@/stores/generalStore'
import { useMovieStore } from '@/stores/movieStore'
import { ref } from 'vue'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'

const { searchString, showAddMovieModal } = storeToRefs(useGeneralStore())
const { movies: movieList } = storeToRefs(useMovieStore())
const movies = ref([...movieList.value])

watch(searchString, (updatedSearchString) => {
  if (updatedSearchString === '') {
    movies.value = movieList.value
  } else {
    movies.value = movieList.value.filter(
      (movie) =>
        movie.name.en.startsWith(updatedSearchString) ||
        movie.name.ka.startsWith(updatedSearchString)
    )
  }
})
</script>

<template>
  <Wrapper>
    <div class="flex flex-col min-h-[100vh] lg:w-full bg-veryDarkPurple pt-4 pb-[120px] relative">
      <TopPanel />
      <div
        class="grid grid-auto-fill-sm lg:grid-auto-fill justify-items-center gap-y-10 gap-x-[10px]"
      >
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
    <AddNewMovie v-if="showAddMovieModal" />
  </Wrapper>
</template>
