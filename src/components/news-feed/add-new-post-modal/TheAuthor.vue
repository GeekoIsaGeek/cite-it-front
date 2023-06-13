<script setup>
import { useUserStore } from '@/stores/userStore.js'
import useGetAvatar from '@/composables/useGetAvatar.js'
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { capitalize } from 'vue'

const userStore = useUserStore()
const avatar = useGetAvatar()
</script>
<template>
  <div class="flex gap-4 items-center">
    <img :src="avatar || avatarPlaceholder" alt="avatar" class="w-[60px] h-[60px] rounded-full" />
    <p class="text-xl">{{ capitalize(userStore.user.username) || '' }}</p>
  </div>
</template>
