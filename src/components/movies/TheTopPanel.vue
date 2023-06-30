<script setup>
import AddButton from '@/components/UI/RedButton.vue'
import SearchIcon from '@/components/icons/TheSearchIcon.vue'
import PlusIcon from '@/components/icons/ThePlusIcon.vue'
import { useGeneralStore } from '@/stores/generalStore'
import { computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

const { setShowAddMovieModal } = useGeneralStore()
const movieStore = useMovieStore()
const generalStore = useGeneralStore()

const movieCount = computed(() => movieStore.movies.length)
</script>

<template>
  <div class="flex items-center self-start flex-wrap justify-between w-full mb-16 px-4">
    <p class="text-2xl pt-[25px] md:pt-0">
      {{ $t('movies.list_of_movies') }}
      <span class="text-base lg:text-2xl">({{ $t('movies.total') }} {{ movieCount }})</span>
    </p>
    <div class="flex items-center gap-12">
      <div class="flex items-center gap-4">
        <SearchIcon color="white" />
        <input
          type="text"
          class="bg-transparent outline-none text-xl w-16 focus:w-36 transition-width duration-300 ease-out"
          :placeholder="$t('news_feed.search')"
          @input="(e) => generalStore.setSearchString(e.target.value)"
        />
      </div>
      <AddButton
        class="px-4 lg:text-xl min-w-max flex items-center gap-2"
        @click="() => setShowAddMovieModal(true)"
      >
        <PlusIcon />{{ $t('movies.add_movie') }}
      </AddButton>
    </div>
  </div>
</template>
