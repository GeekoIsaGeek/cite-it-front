<script setup>
import { RouterView } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore'
import { useQuoteStore } from '@/stores/quoteStore'
import { useUserStore } from '@/stores/userStore.js'
import { watchEffect } from 'vue'

const quoteStore = useQuoteStore()
const movieStore = useMovieStore()
const userStore = useUserStore()

watchEffect(() => {
  if (userStore.user.id) {
    quoteStore.fetchQuotes()
    movieStore.fetchMovies()
  }
}, userStore.user)
</script>

<template>
  <RouterView />
  <RouterView name="overlay" />
</template>
