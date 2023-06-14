<script setup>
import CloseIcon from '@/components/icons/TheCloseIcon.vue'
import { useGeneralStore } from '@/stores/generalStore.js'

const { setShowAddNewPostModal } = useGeneralStore()
</script>

<template>
  <div class="flex items-center justify-center text-white px-8 relative">
    <p class="text-2xl">{{ $t('news_feed.write_new_quote') }}</p>
    <CloseIcon
      class="text-white hover:text-gray-300 top-[-2px] right-[32px]"
      @click="() => setShowAddNewPostModal(false)"
    />
  </div>
  <div class="w-full h-[1px] bg-[#EFEFEF33] mt-6 mb-8"></div>
</template>
