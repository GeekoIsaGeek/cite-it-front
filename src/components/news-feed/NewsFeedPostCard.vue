<script setup>
import PostAuthor from '@/components/news-feed/NewsFeedPostCardAuthor.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'

import PostComments from '@/components/news-feed/NewsFeedPostCardComments.vue'
</script>

<template>
  <div class="px-6 py-6 bg-almostBlack rounded-xl">
    <PostAuthor />
    <p class="lg:text-xl mt-4 mb-7">
      “Follow your dream.” -
      <span class="text-[#DDCCAA]">Movie name</span>.
    </p>
    <img
      src="https://www.slashfilm.com/img/gallery/black-swan-ending-explained-a-dance-on-the-dark-side/intro-1667567351.jpg"
      alt="image from the movie"
      class="w-full h-[200px] xl:h-[500px] rounded-[10px] object-cover"
    />
    <PostStatistics class="text-xl" />
    <PostComments />
  </div>
</template>
