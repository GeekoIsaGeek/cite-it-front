<script setup>
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'
import request from '@/config/axiosInstance.js'
import { ref, onMounted } from 'vue'
import { likesChannel } from '@/echo.js'
import { useRouter } from 'vue-router'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { watch } from 'vue'

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
const router = useRouter()
const likesCount = ref(props.quote.likes.length)

const commentsCount = ref(props.quote.comments.length)

watch(
  () => quoteStore.quotes,
  (updatedQuotes) => {
    commentsCount.value = updatedQuotes.find((quote) => quote.id === props.quote.id).comments.length
  }
)

onMounted(() => {
  likesChannel.listen('QuoteLikedEvent', (data) => {
    if (props.quote.id === data.quoteId) {
      likesCount.value += 1
    }
  })
})

const handleAddingLike = async () => {
  await request.post(`/api/${props.quote.id}/add-like`)
}
</script>

<template>
  <div class="py-6 flex gap-8 items-center">
    <p class="flex items-center gap-4" @click="navigationHandler">
      {{ commentsCount }}
      <TheCommentIcon
        class="cursor-pointer"
        @click="
          router.push({
            name: 'view-quote',
            params: {
              id: quote.id
            }
          })
        "
      />
    </p>
    <p class="flex items-center gap-4">
      {{ likesCount }} <TheHeartIcon class="cursor-pointer" @click="handleAddingLike" />
    </p>
  </div>
</template>
