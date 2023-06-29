<script setup>
import PostAuthor from '@/components/news-feed/NewsFeedPostCardAuthor.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import PostComments from '@/components/news-feed/NewsFeedPostCardComments.vue'
import { useI18n } from 'vue-i18n'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useRouter } from 'vue-router'

const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToQuoteDetails = () => {
  router.push({
    name: 'view-quote',
    params: {
      id: props.quote.id
    }
  })
}
console.log(props.quote)
const { locale } = useI18n()
const image = useGetImagePath(props.quote.image)
</script>

<template>
  <div class="px-6 py-6 bg-almostBlack rounded-xl">
    <PostAuthor :author="quote.movie.author" />
    <p class="lg:text-xl mt-4 mb-7">
      “{{ quote.quote[locale] }}” -
      <span class="text-[#DDCCAA]"
        >{{ quote.movie.name[locale] }} ({{ quote.movie.release_date }})</span
      >.
    </p>
    <img
      :src="image"
      alt="image from the movie"
      class="w-full h-[200px] xl:h-[500px] rounded-[10px] object-cover cursor-pointer"
      @click="navigateToQuoteDetails"
    />
    <PostStatistics class="text-xl" :redirectHandler="navigateToQuoteDetails" />
    <PostComments :comments="quote.comments" />
  </div>
</template>
