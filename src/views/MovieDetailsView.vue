<script setup>
import { useRoute } from 'vue-router'
import MovieDetails from '@/components/movie-details/MovieDetails.vue'

const { params } = useRoute()
</script>

<template>
  <MovieDetails />
</template>
