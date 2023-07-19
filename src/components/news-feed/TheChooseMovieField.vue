<script setup>
import CameraIcon from '@/components/icons/TheCameraIcon.vue'
import TheArrowDownIcon from '@/components/icons/TheArrowDownIcon.vue'
import { ref } from 'vue'
import { useMovieStore } from '@/stores/movieStore.js'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/userStore.js'

const props = defineProps({
  setMovie: {
    type: Function,
    required: true
  }
})
const showMovieList = ref(false)
const selectedMovie = ref(null)
const movieStore = useMovieStore()
const userStore = useUserStore()
const { locale } = useI18n()

const handleSelect = (selectedMovieName) => {
  selectedMovie.value = selectedMovieName
  props.setMovie(selectedMovieName)
}
const movieNames = computed(() => {
  return Object.values(movieStore.userMovies).map((movie) => {
    if (movie.author.id === userStore.user.id) {
      return movie.name[locale.value]
    }
  })
})
</script>

<template>
  <div
    @click="() => (showMovieList = !showMovieList)"
    class="bg-black flex justify-between px-[18px] relative py-6 cursor-pointer hover:bg-[#161423] rounded-[4px]"
  >
    <div class="flex items-center gap-3 lg:text-xl">
      <CameraIcon color="white" class="mt-[-7px]" />
      {{ selectedMovie || $t('news_feed.choose_movie') }}
    </div>

    <TheArrowDownIcon :class="`text-3xl ${showMovieList && 'rotate-180'}`" />
    <div class="absolute top-full left-0 pb-4 bg-[#1c192c] w-full border-t border-t-[#9686e8]" v-if="showMovieList">
      <ul class="rounded-b-[4px]">
        <li
          v-for="(movie, index) in movieNames"
          :key="index"
          class="w-full px-4 lg:text-xl py-4 hover:bg-[#1c192c]"
          @click="(e) => handleSelect(e.target.innerText)"
        >
          {{ movie }}
        </li>
      </ul>
    </div>
  </div>
</template>
