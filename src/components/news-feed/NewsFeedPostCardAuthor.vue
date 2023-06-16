<script setup>
import { useUserStore } from '@/stores/userStore.js'
import useGetAvatar from '@/composables/useGetAvatar.js'
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { capitalize, computed } from 'vue'

const userStore = useUserStore()
const username = computed(() => capitalize(userStore.user.username || ''))
const avatar = useGetAvatar()
const username = computed(() => capitalize(userStore.user.username || ''))
</script>
<template>
  <div class="flex gap-4 items-center">
    <img :src="avatar || avatarPlaceholder" alt="avatar" class="w-[52px] h-[52px] rounded-full" />
    <p class="lg:text-xl font-medium">{{ username }}</p>
  </div>
</template>
