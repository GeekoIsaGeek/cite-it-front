<script setup>
import TheMoreIcon from '@/components/icons/TheMoreIcon.vue'
import QuoteCardMoreOptions from '@/components/movie-details/QuoteCardMoreOptions.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import { ref, computed } from 'vue'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})
const poster = computed(() => useGetImagePath(props.quote.image))
const quote = computed(() => props.quote.quote[locale.value])
const showDropdown = ref(false)
</script>

<template>
  <div class="bg-almostBlack lg:w-[55%] px-8 rounded-[10px] relative">
    <div class="flex items-center flex-col lg:flex-row gap-8 py-6 border-b border-[#EFEFEF33]">
      <img :src="poster" alt="movie" class="rounded-sm w-full lg:w-56 h-36 object-cover" />
      <div class="flex flex-col w-full self-start">
        <TheMoreIcon
          class="hover:text-darkGray cursor-pointer text-3xl self-end absolute lg:relative bottom-5"
          @click="() => (showDropdown = !showDropdown)"
        />
        <h1 class="text-2xl italic lg:mt-7">"{{ quote }}"</h1>
      </div>
    </div>
    <PostStatistics class="text-xl" />
    <QuoteCardMoreOptions
      v-if="showDropdown"
      class="absolute bottom-16 right-8 lg:top-14 lg:left-[92%]"
    />
  </div>
</template>
