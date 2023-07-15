import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([])

  const fetchMovies = async () => {
    const response = await request.get('/api/movies')
    movies.value = response.data
  }
  const setMovies = (movies) => {
    movies.value = movies
  }
  const addNewMovie = (movie) => {
    movies.value = [...movies.value, movie]
  }
  const updateMovies = (updatedMovie) => {
    const movieId = updatedMovie.id
    movies.value = movies.value.map((movie) => {
      if (movie.id === movieId) {
        return updatedMovie
      }
      return movie
    })
  }

  return {
    movies,
    fetchMovies,
    setMovies,
    addNewMovie,
    updateMovies
  }
})
