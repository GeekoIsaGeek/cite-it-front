<script setup>
import TrashIcon from '@/components/icons/TheTrashIcon.vue'
import PencilIcon from '@/components/icons/TheEditIcon.vue'
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import request from '@/config/axiosInstance.js'
import { useMovieStore } from '@/stores/movieStore.js'
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore.js'

const router = useRouter()
const { locale } = useI18n()
const movie = inject('movie')
const movieStore = useMovieStore()
const userStore = useUserStore()
const userOwnsThePost = computed(() => movie.value.author.id === userStore.user.id)

const navigateToEditMoviePage = () => {
  router.push({
    name: 'edit-movie',
    params: {
      id: movie.value.id
    }
  })
}

const handleDelete = async () => {
  const response = await request.delete(`/api/movies/${movie.value.id}`)
  if (response.status === 200) {
    const updatedMovies = movieStore.movies.filter(
      (currentMovie) => currentMovie.id !== movie.value.id
    )
    movieStore.setMovies(updatedMovies)
    router.push({ name: 'movies' })
  }
}
</script>

<template>
  <div class="w-full flex lg:items-center justify-between gap-3 flex-col lg:flex-row">
    <h2 class="text-[#DDCCAA] font-bold text-2xl">
      {{ movie.name[locale] }} ({{ movie.release_date }})
    </h2>
    <div
      class="bg-[#24222F] flex min-w-max self-start lg:self-auto items-center py-[10px] gap-7 rounded-[10px] px-7"
      v-if="userOwnsThePost"
    >
      <PencilIcon class="cursor-pointer" @click="navigateToEditMoviePage" />
      <div class="h-[24px] w-[1px] bg-darkGray"></div>
      <TrashIcon class="cursor-pointer" @click="handleDelete" />
    </div>
  </div>
</template>
