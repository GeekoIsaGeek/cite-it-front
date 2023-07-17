<script setup>
import PostAndSearch from '@/components/news-feed/NewsFeedPostAndSearch.vue'
import AddNewQuote from '@/components/modals/AddNewQuote.vue'
import { useSearchStore } from '@/stores/searchStore.js'
import { useModalStore } from '@/stores/modalStore.js'
import PostCard from '@/components/news-feed/NewsFeedPostCard.vue'
import SearchMobile from '@/components/news-feed/SearchMobile.vue'
import { storeToRefs } from 'pinia'
import MovieCard from '@/components/movies/MovieCard.vue'
import NothingFoundMessage from '@/components/shared/NothingFoundMessage.vue'
import useInfiniteScroll from '@/composables/useInfiniteScroll'
import { watch, onMounted, onBeforeUnmount } from 'vue'

const searchStore = useSearchStore()
const modalStore = useModalStore()
const { searchedData, typeOfSearchedData } = storeToRefs(searchStore)
const { fetchData, handleScroll, items: quotes } = useInfiniteScroll('quotes/paginate')

onMounted(() => {
  fetchData()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(searchedData, (updatedSearchedData) => {
  if (typeOfSearchedData.value === 'quote') {
    quotes.value = updatedSearchedData
  }
})

const addNewQuote = (quote) => {
  quotes.value = [quote, ...quotes.value]
}
</script>
<template>
  <div class="news-feed w-full md:max-w-[46vw] bg-[#191625]">
    <div class="mb-4">
      <AddNewQuote v-if="modalStore.showAddNewPostModal" :addQuoteHandler="addNewQuote" />
      <PostAndSearch />
      <SearchMobile v-if="searchStore.showSearchBar" />
    </div>
    <ul class="flex flex-col gap-10" v-if="typeOfSearchedData !== 'movie' && quotes.length > 0">
      <PostCard v-for="quote in quotes" :key="quote.id" :quoteId="quote.id" />
    </ul>
    <ul class="flex flex-col gap-10" v-else-if="searchedData.length > 0 && typeOfSearchedData === 'movie'">
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
