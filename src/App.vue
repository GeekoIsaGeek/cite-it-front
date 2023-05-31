<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'
onMounted(() => {
  const userStore = useUserStore()
  userStore.fetchUser()
})
</script>

<template>
  <RouterView />
  <RouterView name="overlay" />
</template>
