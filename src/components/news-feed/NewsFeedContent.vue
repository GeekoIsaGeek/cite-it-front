<script setup>
import PostAndSearch from '@/components/news-feed/NewsFeedPostAndSearch.vue'
import AddNewQuote from '@/components/modals/AddNewQuote.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import PostCard from '@/components/news-feed/NewsFeedPostCard.vue'
import SearchMobile from '@/components/news-feed/SearchMobile.vue'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { storeToRefs } from 'pinia'

const { quotes } = storeToRefs(useQuoteStore())
const generalStore = useGeneralStore()
</script>
<template>
  <div class="w-full md:max-w-[46vw] bg-[#191625]">
    <div class="mb-4">
      <AddNewQuote v-if="generalStore.showAddNewPostModal" />
      <PostAndSearch />
      <SearchMobile v-if="generalStore.showSearchBar" />
    </div>
    <ul class="flex flex-col gap-10">
      <PostCard v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </ul>
  </div>
</template>
