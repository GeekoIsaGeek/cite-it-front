<script setup>
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'
import request from '@/config/axiosInstance.js'
import { ref, onMounted } from 'vue'
import { likesChannel } from '@/echo.js'
import { useRouter } from 'vue-router'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { useUserStore } from '@/stores/userStore.js'
import { watch, computed } from 'vue'

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
const userStore = useUserStore()
const quoteStore = useQuoteStore()
const router = useRouter()
const likes = ref(props.quote.likes)
const likesCount = computed(() => likes.value.length)

const commentsCount = ref(props.quote.comments.length)
const isPostLikedByUser = computed(() => !!likes.value.find((liker) => liker.id === userStore.user.id))

watch(
  () => quoteStore.quotes,
  (updatedQuotes) => {
    commentsCount.value = updatedQuotes.find((quote) => quote.id === props.quote.id).comments.length
  }
)

onMounted(() => {
  likesChannel.listen('QuoteLikedEvent', (data) => {
    if (props.quote.id === data.quoteId) {
      handleLiking()
    }
  })
})

const handleLiking = () => {
  if (isPostLikedByUser.value) {
    likes.value = likes.value.filter((liker) => liker.id !== userStore.user.id)
  } else {
    likes.value.push(userStore.user)
  }
  quoteStore.updateQuotes({ ...props.quote, likes: [...likes.value] })
}

const sendRequestToLikePost = async () => {
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
      {{ likesCount }}
      <TheHeartIcon
        class="cursor-pointer"
        :color="isPostLikedByUser ? 'red' : 'white'"
        @click="sendRequestToLikePost"
      />
    </p>
  </div>
</template>
