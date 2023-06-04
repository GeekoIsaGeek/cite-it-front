<script setup>
import AppHeader from '@/components/shared/header/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-[#181624] min-h-screen">
    <AppHeader class="header" :showNotifications="true" />
    <main class="px-[70px] py-8 text-white">
      <div></div>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>
.header {
  background-color: rgb(37, 34, 46);
}
</style>
