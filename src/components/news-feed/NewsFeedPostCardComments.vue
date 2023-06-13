<script setup>
import CommentAuthor from '@/components/news-feed/NewsFeedPostCardAuthor.vue'
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import useGetAvatar from '@/composables/useGetAvatar.js'
const comments = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nunc vel massa  facilisis consequat elit morbi convallis convallis. Volutpat vitae et nisl et. Adipiscing enim integer mi leo nisl. Arcu vitae mauris odio eget.',
  'Lorem ipsum dolor sit amet, consectetur adipiscin'
]
const avatar = useGetAvatar()
</script>

<template>
  <div>
    <ul class="flex flex-col gap-6">
      <li class="flex flex-col" v-for="(comment, index) in comments" :key="index">
        <CommentAuthor />
        <p class="text-xl pb-6 border-b border-b-[#EFEFEF4D] ml-20">{{ comment }}</p>
      </li>
    </ul>
    <div class="mt-6 flex items-center gap-6">
      <img :src="avatar || avatarPlaceholder" alt="avatar" class="w-[52px] h-[52px] rounded-full" />
      <textarea
        rows="1"
        class="w-full rounded-[10px] text-xl px-7 py-3 outline-none bg-[#24222F] resize-none"
        :placeholder="$t('news_feed.write_comment')"
      />
    </div>
  </div>
</template>
