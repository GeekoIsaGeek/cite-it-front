<script setup>
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { RouterLink } from 'vue-router'
import TheCameraIcon from '@/components/icons/TheCameraIcon.vue'
import TheHomeIcon from '@/components/icons/TheHomeIcon.vue'
import Close from '@/components/icons/TheCloseIcon.vue'
import { useModalStore } from '@/stores/modalStore.js'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useUserStore } from '@/stores/userStore.js'
import { capitalize, computed } from 'vue'
import { useRoute } from 'vue-router'

const modalStore = useModalStore()
const userStore = useUserStore()
const route = useRoute()
const avatar = useGetImagePath(userStore.user.profile_picture)
const username = computed(() => capitalize(userStore.user?.username || ''))
const closeNavigationMenu = () => modalStore.setShowMobileNavigation(false)
const isMoviesRoute = computed(() => route.name === 'movies' || route.name === 'movie-details')
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-x-[-100%]"
    leave-active-class="transition-all duration-300 ease-out"
    leave-to-class="opacity-0 translate-x-[-50%]"
  >
    <nav
      v-if="modalStore.showMobileNavigation"
      class="left-0 top-0 bg-veryDarkPurple fixed z-[100] md:hidden pr-[10vw] pl-12 pt-12 h-[60vh] w-[90vw] text-white rounded-lg flex flex-col gap-11"
    >
      <Close class="block md:hidden" @click="closeNavigationMenu" />
      <div class="flex items-center gap-6 ml-[-10px]">
        <img
          :src="avatar || avatarPlaceholder"
          :class="`w-[50px] h-[50px] rounded-full  ${
            route.name === 'my-profile' && 'border-2 border-redFail'
          }`"
          alt="avatar"
        />
        <div class="flex flex-col">
          <h3 class="text-lg font-normal">{{ username }}</h3>
          <RouterLink
            :to="{ name: 'my-profile' }"
            @click="closeNavigationMenu"
            class="text-[#CED4DA]"
            >{{ $t('news_feed.edit') }}</RouterLink
          >
        </div>
      </div>

      <div class="flex items-center gap-6">
        <TheHomeIcon
          class="mb-[3px] w-6 h-6"
          :color="`${route.name === 'news-feed' ? 'red' : 'white'}`"
        />
        <RouterLink :to="{ name: 'news-feed' }" @click="closeNavigationMenu" class="text-lg">{{
          $t('news_feed.news_feed')
        }}</RouterLink>
      </div>

      <div class="flex items-center gap-6">
        <TheCameraIcon class="mb-[3px] h-6 w-6" :color="`${isMoviesRoute ? 'red' : 'white'}`" />
        <RouterLink :to="{ name: 'movies' }" @click="closeNavigationMenu" class="text-lg">{{
          $t('news_feed.movies')
        }}</RouterLink>
      </div>
    </nav>
  </Transition>
</template>
