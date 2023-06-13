<script setup>
import AppHeader from '@/components/shared/header/AppHeader.vue'
import SideBar from '@/components/news-feed/SideBar.vue'
import NavigationMobile from '@/components/news-feed/NavigationMobile.vue'
</script>

<template>
  <div class="bg-[#181624] min-h-screen">
    <AppHeader class="header" :showNotifications="true" />
    <main
      class="md:px-[40px] mt-[86px] xl:px-[70px] pb-8 md:py-8 text-white bg-[#25222e] md:bg-veryDarkPurple flex"
    >
      <SideBar />
      <NavigationMobile />

      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  background-color: #25222e;
}
</style>
