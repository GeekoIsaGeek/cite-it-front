<script setup>
import AddButton from '@/components/UI/RedButton.vue'
import SearchIcon from '@/components/icons/TheSearchIcon.vue'
import PlusIcon from '@/components/icons/ThePlusIcon.vue'
import { useGeneralStore } from '@/stores/generalStore'

const movieCount = 27
const { setShowAddMovieModal } = useGeneralStore()
</script>

<template>
  <div class="flex items-center self-start justify-between w-full mb-16 px-4">
    <p class="text-2xl pt-[25px] md:pt-0">
      {{ $t('movies.list_of_my_movies') }}
      <span class="text-base lg:text-2xl">({{ $t('movies.total') }} {{ movieCount }})</span>
    </p>
    <div class="flex items-center gap-12">
      <div class="hidden lg:flex items-center gap-4">
        <SearchIcon color="white" />
        <input
          type="text"
          class="bg-transparent outline-none text-xl w-16 focus:w-36 transition-width duration-300 ease-out"
          :placeholder="$t('news_feed.search')"
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
