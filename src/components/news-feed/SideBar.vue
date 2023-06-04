<script setup>
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { RouterLink } from 'vue-router'
import TheCameraIcon from '@/components/icons/TheCameraIcon.vue'
import TheHomeIcon from '@/components/icons/TheHomeIcon.vue'
</script>

<template>
  <nav class="w-[490px] min-h-screen text-white flex flex-col gap-11">
    <div class="flex items-center gap-6 ml-[-10px]">
      <img
        :src="avatarPlaceholder"
        class="w-[60px] h-[60px] rounded-full border-2 border-redFail"
        alt="avatar"
      />
      <div class="flex flex-col">
        <h3 class="text-2xl font-normal">Name Surname</h3>
        <RouterLink to="" class="text-[#CED4DA]">{{ $t('news_feed.edit') }}</RouterLink>
      </div>
    </div>
    <div class="flex items-center gap-11">
      <TheHomeIcon class="mb-[3px]" />
      <RouterLink to="" class="text-2xl">{{ $t('news_feed.news_feed') }}</RouterLink>
    </div>
    <div class="flex items-center gap-11">
      <TheCameraIcon class="mb-[3px]" />
      <RouterLink to="" class="text-2xl">{{ $t('news_feed.movies') }}</RouterLink>
    </div>
  </nav>
</template>
