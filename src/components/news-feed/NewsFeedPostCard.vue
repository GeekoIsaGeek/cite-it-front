<script setup>
import PostAuthor from '@/components/news-feed/NewsFeedPostCardAuthor.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import PostComments from '@/components/news-feed/NewsFeedPostCardComments.vue'
import { useI18n } from 'vue-i18n'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useRouter } from 'vue-router'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { computed } from 'vue'

const props = defineProps({
  quoteId: {
    type: Number,
    required: true
  }
})
const quoteStore = useQuoteStore()
const quoteObject = computed(() => quoteStore.quotes.find((quote) => quote.id === props.quoteId))
console.log(quoteObject.value)

const router = useRouter()
const navigateToQuoteDetails = () => {
  router.push({
    name: 'view-quote',
    params: {
      id: props.quoteId
    }
  })
}
const { locale } = useI18n()
const image = useGetImagePath(quoteObject.value.image)
</script>

<template>
  <div class="px-6 py-6 bg-almostBlack rounded-xl">
    <PostAuthor :author="quoteObject.movie.author" />
    <p class="lg:text-xl mt-4 mb-7 w-full">
      “{{ quoteObject.quote[locale] }}” -
      <span class="text-[#DDCCAA]">{{ quoteObject.movie.name[locale] }} ({{ quoteObject.movie.release_date }})</span>.
    </p>
    <img
      :src="image"
      alt="image from the movie"
      class="w-full h-[200px] xl:h-[500px] rounded-[10px] object-cover cursor-pointer"
      @click="navigateToQuoteDetails"
    />
    <PostStatistics class="text-xl" :redirectHandler="navigateToQuoteDetails" :quote="quoteObject" />
    <PostComments :quoteId="quoteObject.id" />
  </div>
</template>
