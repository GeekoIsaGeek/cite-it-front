<script setup>
import TheMoreIcon from '@/components/icons/TheMoreIcon.vue'
import QuoteCardMoreOptions from '@/components/movie-details/QuoteCardMoreOptions.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import { ref, computed } from 'vue'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useI18n } from 'vue-i18n'
import request from '@/config/axiosInstance.js'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { useMovieStore } from '@/stores/movieStore.js'

import { toRef } from 'vue'

const { locale } = useI18n()
const props = defineProps({
  quote: {
    type: Object,
    required: true
  },
  movie: {
    type: Object,
    required: true
  }
})

const movie = toRef(props.movie)
const poster = computed(() => useGetImagePath(props.quote.image))
const quoteObject = computed(() => props.quote)
const quoteText = computed(() => quoteObject.value.quote[locale.value])
const showDropdown = ref(false)
const quoteStore = useQuoteStore()
const movieStore = useMovieStore()

const handleDelete = async () => {
  const { status } = await request.delete(`/api/quotes/${props.quote.id}`)
  if (status === 200) showDropdown.value = false
  quoteStore.removeQuote(props.quote.id)
  movieStore.updateMovies({
    ...movie.value,
    quotes: [...movie.value.quotes.filter((quote) => quote.id !== props.quote.id)]
  })
}
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
        <h1 class="text-2xl italic lg:mt-7 break-all">"{{ quoteText }}"</h1>
      </div>
    </div>
    <PostStatistics class="text-xl" :quote="quote" />
    <QuoteCardMoreOptions
      :handleDelete="handleDelete"
      v-if="showDropdown"
      :quote="quoteObject"
      class="absolute bottom-16 right-8 lg:top-9 lg:left-[92%]"
    />
  </div>
</template>
