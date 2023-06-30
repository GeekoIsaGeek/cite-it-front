<script setup>
import GoBackIcon from '@/components/icons/TheGoBackIcon.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import { ref, watch } from 'vue'
import useSearchAndSetData from '@/composables/useSearchAndSetData.js'

const searchString = ref('')
const generalStore = useGeneralStore()
watch(searchString, (newValue) => {
  if (!newValue.startsWith('@') && !newValue.startsWith('#')) {
    searchString.value = ''
  }
})
const handleSearchAndSet = useSearchAndSetData()
const handleSubmit = () => {
  handleSearchAndSet(searchString.value)
  generalStore.setShowSearchBar(false)
}
</script>

<template>
  <div class="lg:hidden absolute z-50 w-full top-0 left-0 bg-almostBlack min-h-[70vh]">
    <div class="py-6 px-8 flex items-center gap-6 border-b border-b-gray-400">
      <GoBackIcon @click="() => generalStore.setShowSearchBar(false)" />
      <form @submit.prevent="() => handleSubmit()">
        <input
          type="text"
          :placeholder="$t('news_feed.search')"
          class="outline-none bg-transparent placeholder-white"
          v-model="searchString"
        />
      </form>
    </div>
    <div class="text-[#CED4DA] mt-6 ml-[74px]">
      <p class="mb-[22px]">{{ $t('news_feed.search_movies') }}</p>
      <p>{{ $t('news_feed.search_quotes') }}</p>
    </div>
  </div>
</template>
