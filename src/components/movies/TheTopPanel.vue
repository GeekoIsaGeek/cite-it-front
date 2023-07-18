<script setup>
import AddButton from '@/components/UI/RedButton.vue'
import SearchIcon from '@/components/icons/TheSearchIcon.vue'
import PlusIcon from '@/components/icons/ThePlusIcon.vue'
import { useModalStore } from '@/stores/modalStore.js'
import { useSearchStore } from '@/stores/searchStore.js'
import { computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

const { setShowAddMovieModal } = useModalStore()
const movieStore = useMovieStore()
const searchStore = useSearchStore()

const movieCount = computed(() => movieStore.movies.length)
</script>

<template>
  <div class="flex items-center self-start justify-between w-full mb-16 px-4">
    <div class="text-2xl pt-6 md:pt-0 flex gap-2 lg:gap-4 flex-col lg:flex-row">
      <p class="min-w-max">{{ $t('movies.list_of_movies') }}</p>
      <span class="text-base lg:text-2xl">({{ $t('movies.total') }} {{ movieCount }})</span>
    </div>
    <div class="flex justify-end items-center gap-12 w-full md:w-auto">
      <div class="hidden md:flex items-center gap-4">
        <SearchIcon color="white" />
        <input
          type="text"
          class="bg-transparent outline-none text-xl w-16 focus:w-36 transition-width duration-300 ease-out"
          :placeholder="$t('news_feed.search')"
          @input="(e) => searchStore.setSearchString(e.target.value)"
        />
      </div>
      <AddButton class="px-4 lg:text-xl min-w-max flex items-center gap-2" @click="() => setShowAddMovieModal(true)">
        <PlusIcon />{{ $t('movies.add_movie') }}
      </AddButton>
    </div>
  </div>
</template>
