<script setup>
import PostAndSearch from '@/components/news-feed/NewsFeedPostAndSearch.vue'
import AddNewQuote from '@/components/modals/AddNewQuote.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import PostCard from '@/components/news-feed/NewsFeedPostCard.vue'
import SearchMobile from '@/components/news-feed/SearchMobile.vue'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { storeToRefs } from 'pinia'
import MovieCard from '@/components/movies/MovieCard.vue'
import NothingFoundMessage from '@/components/shared/NothingFoundMessage.vue'
import { watch } from 'vue'

const { quotes } = storeToRefs(useQuoteStore())
const generalStore = useGeneralStore()
const { searchedData, typeOfSearchedData } = storeToRefs(generalStore)

watch(typeOfSearchedData, (updatedTypeOfSearchedData) => {
  if (updatedTypeOfSearchedData === 'quote') {
    quotes.value = searchedData
  }
})
</script>
<template>
  <div class="w-full md:max-w-[46vw] bg-[#191625]">
    <div class="mb-4">
      <AddNewQuote v-if="generalStore.showAddNewPostModal" />
      <PostAndSearch />
      <SearchMobile v-if="generalStore.showSearchBar" />
    </div>
    <ul class="flex flex-col gap-10" v-if="typeOfSearchedData !== 'movie' && quotes.length > 0">
      <PostCard v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </ul>
    <ul
      class="flex flex-col gap-10"
      v-else-if="searchedData.length > 0 && typeOfSearchedData === 'movie'"
    >
      <MovieCard
        v-for="movie in searchedData"
        :key="movie.id"
        :movie="movie"
        class="w-full bg-almostBlack rounded-2xl px-6 py-6"
      />
    </ul>
    <NothingFoundMessage v-else />
  </div>
</template>
