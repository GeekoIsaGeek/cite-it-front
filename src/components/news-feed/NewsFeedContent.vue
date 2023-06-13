<script setup>
import PostAndSearch from '@/components/news-feed/NewsFeedPostAndSearch.vue'
import AddNewQuote from '@/components/modals/AddNewQuote.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import PostCard from '@/components/news-feed/NewsFeedPostCard.vue'
const generalStore = useGeneralStore()
</script>
<template>
  <div class="w-full md:max-w-[46vw]">
    <div class="mb-4">
      <AddNewQuote v-if="generalStore.showAddNewPostModal" />
      <PostAndSearch />
    </div>
    <ul class="flex flex-col gap-10">
      <PostCard v-for="(_, index) in 2" :key="index" />
    </ul>
  </div>
</template>
