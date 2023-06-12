<script setup>
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import TopPanel from '@/components/news-feed/add-new-post-modal/ModalTopPanel.vue'
</script>

<template>
  <div
    class="wrapper absolute top-[90px] left-0 w-full min-h-[calc(100vh+60px)] flex justify-center items-start"
  >
    <div class="bg-almostBlack text-white rounded-xl w-[46vw] mt-5 py-10">
      <TopPanel />
      <div class="px-8">
        <Author class="mb-8" />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: linear-gradient(187.16deg, #181623b3 0.07%, #191725b3 51.65%, #0d0b14bd 98.75%);
}
</style>
