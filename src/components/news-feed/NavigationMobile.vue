<script setup>
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { RouterLink } from 'vue-router'
import TheCameraIcon from '@/components/icons/TheCameraIcon.vue'
import TheHomeIcon from '@/components/icons/TheHomeIcon.vue'
import Close from '@/components/icons/TheCloseIcon.vue'
import { useGeneralStore } from '@/stores/generalStore'

const generalStore = useGeneralStore()
const closeNavigationMenu = () => generalStore.setShowMobileNavigation(false)
</script>

<template>
  <nav
    v-if="generalStore.showMobileNavigation"
    class="left-0 top-0 bg-veryDarkPurple absolute z-30 md:hidden pr-[10vw] pl-12 pt-12 h-[60vh] w-[90vw] text-white rounded-lg flex flex-col gap-11"
  >
    <Close class="block md:hidden" @click="closeNavigationMenu" />
    <div class="flex items-center gap-6 ml-[-10px]">
      <img
        :src="avatarPlaceholder"
        class="w-[50px] h-[50px] rounded-full border-2 border-redFail"
        alt="avatar"
      />
      <div class="flex flex-col">
        <h3 class="text-lg font-normal">Name Surname</h3>
        <RouterLink
          :to="{ name: 'my-profile' }"
          @click="closeNavigationMenu"
          class="text-[#CED4DA]"
          >{{ $t('news_feed.edit') }}</RouterLink
        >
      </div>
    </div>

    <div class="flex items-center gap-6">
      <TheHomeIcon class="mb-[3px] w-6 h-6" />
      <RouterLink to="" @click="closeNavigationMenu" class="text-lg">{{
        $t('news_feed.news_feed')
      }}</RouterLink>
    </div>

    <div class="flex items-center gap-6">
      <TheCameraIcon class="mb-[3px] h-6 w-6" />
      <RouterLink to="" @click="closeNavigationMenu" class="text-lg">{{
        $t('news_feed.movies')
      }}</RouterLink>
    </div>
  </nav>
</template>
