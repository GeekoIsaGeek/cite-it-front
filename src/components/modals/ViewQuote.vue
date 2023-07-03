<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import QuoteAuthor from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import Quotes from '@/components/movie-details/view-quote/TheQuotes.vue'
import Comments from '@/components/news-feed/NewsFeedPostCardComments.vue'
import TopPanel from '@/components/movie-details/view-quote/TheTopPanel.vue'
import { useRoute } from 'vue-router'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { computed } from 'vue'
import useGetImagePath from '@/composables/useGetImagePath.js'

const route = useRoute()
const quoteStore = useQuoteStore()
const quote = computed(() =>
  quoteStore.quotes.find((quote) => quote.id === parseInt(route.params.id))
)
const image = useGetImagePath(quote.value.image)
const movieId = computed(() => quote.value.movie.id)
</script>

<template>
  <QuoteModalWrapper>
    <div class="dialog bg-almostBlack lg:w-1/2 pt-10 pb-8 overflow-y-scroll rounded-xl">
      <TopPanel :heading="$t('movie_details.view_quote')" :movieId="movieId" />
      <div class="flex flex-col px-8 gap-11">
        <QuoteAuthor class="text-white mt-8" />
        <Quotes :quotes="quote.quote" />
        <img
          :src="image"
          alt="movie"
          class="rounded-[10px] w-full h-[300px] lg:h-[30vw] object-cover"
        />
        <PostStatistics class="text-white text-xl py-0" :quote="quote" />
        <Comments class="text-white" :quote="quote" />
      </div>
    </div>
  </QuoteModalWrapper>
</template>
