<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TopPanel from '@/components/movies/TheTopPanel.vue'
import MovieCard from '@/components/movies/MovieCard.vue'
</script>

<template>
  <Wrapper>
    <div class="flex flex-col lg:w-full bg-veryDarkPurple pt-4 pb-[120px]">
      <TopPanel />
      <div
        class="grid grid-auto-fill-sm lg:grid-auto-fill justify-items-center gap-y-40 gap-x-[50px]"
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  </Wrapper>
</template>
