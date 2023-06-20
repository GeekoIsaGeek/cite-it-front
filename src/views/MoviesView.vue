<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TopPanel from '@/components/movies/TheTopPanel.vue'
import MovieCard from '@/components/movies/MovieCard.vue'
import AddNewMovie from '@/components/modals/AddNewMovie.vue'
import { useGeneralStore } from '@/stores/generalStore'
import { useMovieStore } from '@/stores/movieStore'

const generalStore = useGeneralStore()
const movieStore = useMovieStore()
</script>

<template>
  <Wrapper>
    <div class="flex flex-col min-h-[100vh] lg:w-full bg-veryDarkPurple pt-4 pb-[120px] relative">
      <TopPanel />
      <div
        class="grid grid-auto-fill-sm lg:grid-auto-fill justify-items-center gap-y-10 gap-x-[10px]"
      >
        <MovieCard v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
    <AddNewMovie v-if="generalStore.showAddMovieModal" />
  </Wrapper>
</template>
