import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'

export const useMovieStore = defineStore('movie', {
  state: () => {
    return {
      movies: []
    }
  },
  getters: {
    count(state) {
      return state.movies.length
    }
  },
  actions: {
    setMovies(movies) {
      this.movies = movies
    },
    addNewMovie(movie) {
      this.movies.push(movie)
    },
    async fetchMovies() {
      const response = await request.get('/api/movies')
      this.movies = response.data
    }
  }
})
