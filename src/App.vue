<script setup>
import { RouterView } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
const movieStore = useMovieStore()
movieStore.fetchMovies()
</script>

<template>
  <RouterView />
  <RouterView name="overlay" />
</template>
