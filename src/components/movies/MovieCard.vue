<script setup>
import ChatQuoteIcon from '@/components/icons/TheChatQuoteIcon.vue'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const quoteCount = computed(() => props.movie.quotes.length)
const image = useGetImagePath(props.movie.poster)
const { locale } = useI18n()

const destinationRoute = {
  name: 'movie-details',
  params: {
    id: props.movie.id
  }
}
</script>

<template>
  <div class="w-[calc(100%-32px)] justify-items-center">
    <img :src="image" alt="movie image" class="rounded-xl object-cover mb-4 h-[302px] w-full md:h-[370px]" />
    <RouterLink :to="destinationRoute" class="text-2xl mt-4 mb-[18px] hover:text-[#cbbbff]">
      {{ props.movie.name[locale] }}
    </RouterLink>
    <div class="flex items-center gap-3">
      <span class="text-xl">{{ quoteCount }}</span>
      <ChatQuoteIcon />
    </div>
  </div>
</template>
