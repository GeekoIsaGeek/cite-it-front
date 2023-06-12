<script setup>
import PostAndSearch from '@/components/news-feed/NewsFeedPostAndSearch.vue'
import AddNewQuote from '@/components/modals/AddNewQuote.vue'
import { useGeneralStore } from '@/stores/generalStore.js'

const generalStore = useGeneralStore()
</script>
<template>
  <AddNewQuote v-if="generalStore.showAddNewPostModal" />
  <PostAndSearch />
</template>
