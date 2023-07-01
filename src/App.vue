<script setup>
import { RouterView } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import { useQuoteStore } from '@/stores/quoteStore'
import { onMounted } from 'vue'

const quoteStore = useQuoteStore()
const movieStore = useMovieStore()

onMounted(() => {
  quoteStore.fetchQuotes()
  movieStore.fetchMovies()
})
</script>

<template>
  <RouterView />
  <RouterView name="overlay" />
</template>
