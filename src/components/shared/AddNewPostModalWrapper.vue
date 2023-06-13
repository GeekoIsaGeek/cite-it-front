<script setup>
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import TopPanel from '@/components/news-feed/add-new-post-modal/ModalTopPanel.vue'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => (window.innerWidth > 960 ? (document.body.style.overflow = 'hidden') : ''))
onBeforeUnmount(() => (document.body.style.overflow = 'auto'))
</script>

<template>
  <div
    class="wrapper absolute z-50 lg:z-auto top-0 lg:top-[86px] left-0 w-full lg:min-h-[calc(100vh+60px)] flex justify-center items-start"
  >
    <div
      class="dialog bg-almostBlack overflow-y-scroll text-white lg:rounded-xl w-full md:w-[50vw] lg:mt-5 pb-[50px] lg:pb-10 py-10"
    >
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
