<script setup>
import Wrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import MainSection from '@/components/movie-details/MainSection.vue'
import AddButton from '@/components/UI/RedButton.vue'
import PlusIcon from '@/components/icons/ThePlusIcon.vue'
import QuoteCard from '@/components/movie-details/QuoteCard.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import { provide } from 'vue'

const router = useRouter()
const movieId = computed(() => router.currentRoute.value.params.id)
const movieStore = useMovieStore()
const movie = movieStore.movies[movieId.value]

const navigateToAddQuoteModal = () => {
  router.push({
    name: 'add-quote',
    params: {
      id: movieId.value
    }
  })
}
provide('movie', movie)
</script>

<template>
  <Wrapper>
    <div class="flex flex-col w-full">
      <h2 class="hidden lg:block text-2xl">{{ $t('movie_details.movie_description') }}</h2>
      <MainSection />
      <div
        class="flex items-start px-9 lg:px-0 lg:items-center flex-col-reverse lg:flex-row mt-11 gap-9 lg:gap-4"
      >
        <div class="lg:flex gap-2 text-2xl lg:border-r border-darkGray pr-4">
          <p>{{ $t('movie_details.quotes') }}</p>
          <p>({{ $t('movies.total') }} {{ movieStore.count }})</p>
        </div>
        <div class="lg:hidden w-full h-[1px] bg-[#54535A]"></div>
        <AddButton class="px-4 text-xl flex items-center gap-2" @click="navigateToAddQuoteModal">
          <PlusIcon />
          {{ $t('movie_details.add_quote') }}
        </AddButton>
      </div>
      <ul class="mt-14">
        <QuoteCard />
      </ul>
    </div>
  </Wrapper>
</template>
