<script setup>
import PencilIcon from '@/components/icons/ThePencilIcon.vue'
import SearchIcon from '@/components/icons/TheSearchIcon.vue'
import { ref } from 'vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import useSearchAndSetData from '@/composables/useSearchAndSetData.js'

const { setShowAddNewPostModal } = useGeneralStore()
const expandSearch = ref(false)
const searchString = ref('')

const handleSearch = useSearchAndSetData()
</script>

<template>
  <div class="flex items-center self-start gap-6">
    <div
      :class="{
        'lg:bg-[#24222F] pt-8 lg:pt-3 lg:hover:bg-[#2d2a3b] px-4 py-3 text-white flex min-w-max items-center gap-4 rounded-lg cursor-pointer': true,
        'w-full': !expandSearch
      }"
      @click="() => setShowAddNewPostModal(true)"
    >
      <PencilIcon />
      <p class="lg:text-xl">{{ $t('news_feed.write_new_quote') }}</p>
    </div>

    <div
      @click="() => (expandSearch = true)"
      :class="[
        'search hidden lg:flex items-center gap-4 cursor-pointer hover:text-gray-300 min-w-max',
        expandSearch && 'border-b border-b-gray-300 w-full pb-4'
      ]"
    >
      <SearchIcon :color="'#CED4DA'" />
      <form @submit.prevent="() => handleSearch(searchString)">
        <input
          type="text"
          class="w-full bg-transparent outline-none"
          :placeholder="$t('news_feed.search_guide')"
          v-model="searchString"
          v-if="expandSearch"
        />
      </form>
      <p class="text-xl" v-if="!expandSearch">{{ $t('news_feed.search_by') }}</p>
    </div>
  </div>
</template>
