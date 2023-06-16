<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import MainSection from '@/components/movie-details/MainSection.vue'
import AddButton from '@/components/UI/RedButton.vue'
import PlusIcon from '@/components/icons/ThePlusIcon.vue'
import QuoteCard from '@/components/movie-details/QuoteCard.vue'
import ViewQuote from '@/components/modals/ViewQuote.vue'
import { useGeneralStore } from '@/stores/generalStore.js'

const generalStore = useGeneralStore()
</script>

<template>
  <Wrapper>
    <div class="flex flex-col w-full">
      <h2 class="text-2xl">{{ $t('movie_details.movie_description') }}</h2>
      <MainSection />
      <div class="flex items-center mt-11 gap-4">
        <div class="lg:flex gap-2 text-2xl border-r border-darkGray pr-4">
          <p>{{ $t('movie_details.quotes') }}</p>
          <p>({{ $t('movies.total') }} 25)</p>
        </div>
        <AddButton class="px-4 text-xl flex items-center gap-2">
          <PlusIcon />
          {{ $t('movie_details.add_quote') }}</AddButton
        >
      </div>
      <ul class="mt-14">
        <QuoteCard />
      </ul>
    </div>
    <ViewQuote v-if="generalStore.showQuoteViewModal" />
  </Wrapper>
</template>
