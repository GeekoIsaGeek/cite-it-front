<script setup>
import CameraIcon from '@/components/icons/TheCameraIcon.vue'
import TheArrowDownIcon from '@/components/icons/TheArrowDownIcon.vue'
import { ref } from 'vue'

const showMovieList = ref(false)
const selectedMovie = ref(null)
const movies = ['kai filmi', 'ufro kargi filmi', 'rac umfro kargs gaaketeben']
</script>

<template>
  <div
    @click="() => (showMovieList = !showMovieList)"
    class="bg-black flex justify-between px-[18px] relative py-6 cursor-pointer hover:bg-[#161423] rounded-[4px]"
  >
    <div class="flex items-center gap-3 text-xl">
      <CameraIcon color="white" class="mt-[-7px]" />
      {{ selectedMovie || $t('news_feed.choose_movie') }}
    </div>

    <TheArrowDownIcon :class="`text-3xl ${showMovieList && 'rotate-180'}`" />
    <div
      class="absolute top-full left-0 pb-4 bg-[#161423] w-full border-t border-t-[#9686e8]"
      v-if="showMovieList"
    >
      <ul class="rounded-b-[4px]">
        <li
          v-for="(movie, index) in movies"
          :key="index"
          class="w-full px-4 text-xl py-4 hover:bg-[#12101d]"
          @click="(e) => (selectedMovie = e.target.innerText)"
        >
          {{ movie }}
        </li>
      </ul>
    </div>
  </div>
</template>
