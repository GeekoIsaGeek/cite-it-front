<script setup>
import useGetImagePath from '@/composables/useGetImagePath.js'
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { capitalize, computed } from 'vue'

const props = defineProps({
  author: {
    type: Object,
    required: true
  }
})

const username = computed(() => capitalize(props.author?.username || ''))
const avatar = useGetImagePath(props.author?.profile_picture)
</script>
<template>
  <div class="flex gap-4 items-center">
    <img :src="avatar || avatarPlaceholder" alt="avatar" class="w-[52px] h-[52px] rounded-full" />
    <p class="lg:text-xl font-medium">{{ username }}</p>
  </div>
</template>
