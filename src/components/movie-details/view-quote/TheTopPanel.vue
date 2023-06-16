<script setup>
import TheEditIcon from '@/components/icons/TheEditIcon.vue'
import TheDeleteIcon from '@/components/icons/TheTrashIcon.vue'
import TheCloselIcon from '@/components/icons/TheCloseIcon.vue'
import { useGeneralStore } from '@/stores/generalStore.js'

const { setShowQuoteViewModal } = useGeneralStore()
</script>
<template>
  <div class="flex items-center justify-between px-8 pb-8 border-b border-b-darkGray">
    <div class="flex items-center gap-6">
      <TheEditIcon class="cursor-pointer" />
      <p class="text-darkGray">|</p>
      <TheDeleteIcon class="cursor-pointer" />
    </div>
    <h2 class="text-2xl text-white">{{ $t('movie_details.view_quote') }}</h2>
    <TheCloselIcon
      class="relative text-white top-[0]"
      @click="() => setShowQuoteViewModal(false)"
    />
  </div>
</template>
