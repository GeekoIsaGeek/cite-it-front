<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
userStore.fetchUser()
</script>

<template>
  <RouterView />
  <RouterView name="overlay" />
</template>
