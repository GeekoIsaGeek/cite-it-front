<script setup>
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { RouterLink } from 'vue-router'
import TheCameraIcon from '@/components/icons/TheCameraIcon.vue'
import TheHomeIcon from '@/components/icons/TheHomeIcon.vue'
</script>

<template>
  <nav
    class="hidden pr-[5vw] lg:pr-[10vw] pl-12 md:pl-0 pt-0 h-[60vh] w-auto text-white rounded-lg md:flex flex-col gap-11 min-h-screen"
  >
    <div class="flex items-center gap-4 xl:gap-6 ml-[-10px]">
      <img
        :src="avatarPlaceholder"
        class="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-full border-2 border-redFail"
        alt="avatar"
      />
      <div class="flex flex-col">
        <h3 class="text-xl lg:text-2xl font-normal">Name Surname</h3>
        <RouterLink to="" class="text-[#CED4DA]">{{ $t('news_feed.edit') }}</RouterLink>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <TheHomeIcon class="lg:mb-[3px] w-6 h-6" />
      <RouterLink to="" class="text-xl lg:text-2xl">{{ $t('news_feed.news_feed') }}</RouterLink>
    </div>
    <div class="flex items-center gap-4">
      <TheCameraIcon class="mb-[3px] h-6 w-6" />
      <RouterLink to="" class="text-xl lg:text-2xl">{{ $t('news_feed.movies') }}</RouterLink>
    </div>
  </nav>
</template>
