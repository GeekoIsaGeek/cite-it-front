<script setup>
import AppHeader from '@/components/shared/header/AppHeader.vue'
import SideBar from '@/components/news-feed/SideBar.vue'
</script>

<template>
  <div class="bg-[#181624] min-h-screen">
    <AppHeader class="header" :showNotifications="true" />
    <main class="px-[70px] py-8 text-white bg-veryDarkPurple flex">
      <SideBar />

      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  background-color: rgb(37, 34, 46);
}
</style>
