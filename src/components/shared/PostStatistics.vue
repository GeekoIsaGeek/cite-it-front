<script setup>
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'
import request from '@/config/axiosInstance.js'
import { ref, onMounted } from 'vue'
import { likesChannel } from '@/echo.js'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { computed } from 'vue'

const props = defineProps({
  navigationHandler: {
    type: Function,
    required: true
  },
  quote: {
    type: Object,
    required: true
  }
})
const quoteStore = useQuoteStore()
const likesCount = ref(props.quote.likes.length)
const comments = computed(
  () => quoteStore.quotes.find((quote) => quote.id === props.quote.id).comments
)

onMounted(() => {
  likesChannel.listen('QuoteHasBeenLiked', (data) => {
    const quote = data.quote
    likesCount.value = quote.likes.length
    quoteStore.updateQuotes(quote)
  })
})

const handleAddingLike = async () => {
  await request.post(`/api/${props.quote.id}/add-like`)
}
</script>

<template>
  <div class="py-6 flex gap-8 items-center">
    <p class="flex items-center gap-4" @click="navigationHandler">
      {{ comments.length }} <TheCommentIcon class="cursor-pointer" />
    </p>
    <p class="flex items-center gap-4">
      {{ likesCount }} <TheHeartIcon class="cursor-pointer" @click="handleAddingLike" />
    </p>
  </div>
</template>
