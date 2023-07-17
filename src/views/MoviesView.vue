<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TopPanel from '@/components/movies/TheTopPanel.vue'
import MovieCard from '@/components/movies/MovieCard.vue'
import AddNewMovie from '@/components/modals/AddNewMovie.vue'
import { useModalStore } from '@/stores/modalStore.js'
import { useSearchStore } from '@/stores/searchStore.js'
import { useMovieStore } from '@/stores/movieStore'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import NothingFoundMessage from '@/components/shared/NothingFoundMessage.vue'
import useInfiniteScroll from '@/composables/useInfiniteScroll.js'
import { onMounted } from 'vue'
import { onBeforeUnmount } from 'vue'

const { searchString } = storeToRefs(useSearchStore())
const { showAddMovieModal } = storeToRefs(useModalStore())
const { movies: movieList } = storeToRefs(useMovieStore())
const { fetchData, handleScroll, items: movies, isLoading } = useInfiniteScroll('movies/paginate')

onMounted(() => {
  fetchData()
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

watch([searchString, movieList], ([updatedSearchString, updatedMovieList]) => {
  if (isLoading) {
    return
  }
  if (updatedSearchString === '') {
    movies.value = updatedMovieList
  } else {
    updatedSearchString = updatedSearchString.toLowerCase()
    movies.value = updatedMovieList.value.filter(
      (movie) =>
        movie.name.en.toLowerCase().startsWith(updatedSearchString) ||
        movie.name.ka.toLowerCase().startsWith(updatedSearchString)
    )
  }
})
</script>

<template>
  <Wrapper>
    <div class="flex flex-col lg:w-full bg-veryDarkPurple pt-4 relative">
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
