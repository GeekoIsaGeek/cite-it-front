<script setup>
import PostAuthor from '@/components/news-feed/NewsFeedPostCardAuthor.vue'
import CommentIcon from '@/components/icons/TheCommentIcon.vue'
import HeartIcon from '@/components/icons/TheHeartIcon.vue'
import PostComments from '@/components/news-feed/NewsFeedPostCardComments.vue'
</script>

<template>
  <div class="px-6 py-6 bg-almostBlack rounded-xl">
    <PostAuthor />
    <p class="text-xl mt-4 mb-7">
      “Follow your dream.” -
      <span class="text-[#DDCCAA]">Movie name</span>.
    </p>
    <img
      src="https://www.slashfilm.com/img/gallery/black-swan-ending-explained-a-dance-on-the-dark-side/intro-1667567351.jpg"
      alt="image from the movie"
      class="w-full xl:h-[500px] rounded-[10px] object-cover"
    />
    <div class="py-6 mb-6 flex items-center gap-6 text-xl border-b border-b-[#EFEFEF4D]">
      <div class="flex gap-4 items-center">9 <CommentIcon class="cursor-pointer" /></div>
      <div class="flex gap-4 items-center">12 <HeartIcon class="cursor-pointer" /></div>
    </div>
    <PostComments />
  </div>
</template>
