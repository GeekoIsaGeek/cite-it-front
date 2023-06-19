<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import QuoteAuthor from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import Quotes from '@/components/movie-details/view-quote/TheQuotes.vue'
import Comments from '@/components/news-feed/NewsFeedPostCardComments.vue'
import TopPanel from '@/components/movie-details/view-quote/TheTopPanel.vue'
</script>

<template>
  <QuoteModalWrapper>
    <div class="dialog bg-almostBlack w-1/2 pt-10 pb-8 overflow-y-scroll rounded-xl">
      <TopPanel :heading="$t('movie_details.view_quote')" />
      <div class="flex flex-col px-8 gap-11">
        <QuoteAuthor class="text-white mt-8" />
        <Quotes />
        <img
          src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="movie"
          class="rounded-[10px] w-full h-[30vw]"
        />
        <PostStatistics class="text-white text-xl py-0" />
        <Comments class="text-white" />
      </div>
    </div>
  </QuoteModalWrapper>
</template>
