<script setup>
import GoBackIcon from '@/components/icons/TheGoBackIcon.vue'
import { useGeneralStore } from '@/stores/generalStore.js'

const generalStore = useGeneralStore()
</script>

<template>
  <div class="md:hidden absolute z-50 w-full top-0 left-0 bg-almostBlack min-h-[70vh]">
    <div class="py-6 px-8 flex items-center gap-6 border-b border-b-gray-400">
      <GoBackIcon @click="() => generalStore.setShowSearchBar(false)" />
      <input
        type="text"
        :placeholder="$t('news_feed.search')"
        class="outline-none bg-transparent placeholder-white"
      />
    </div>
    <div class="text-[#CED4DA] mt-6 ml-[74px]">
      <p class="mb-[22px]">{{ $t('news_feed.search_movies') }}</p>
      <p>{{ $t('news_feed.search_quotes') }}</p>
    </div>
  </div>
</template>
