<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TopPanel from '@/components/movies/TheTopPanel.vue'
import MovieCard from '@/components/movies/MovieCard.vue'
import AddNewMovie from '@/components/modals/AddNewMovie.vue'
</script>

<template>
  <Wrapper>
    <div class="flex flex-col lg:w-full bg-veryDarkPurple pt-4 pb-[120px] relative">
      <TopPanel />
      <div
        class="grid grid-auto-fill-sm lg:grid-auto-fill justify-items-center gap-y-32 gap-x-[10px]"
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
    <AddNewMovie><h1>misha magari ar aris</h1></AddNewMovie>
  </Wrapper>
</template>
