<script setup>
import CommentAuthor from '@/components/news-feed/NewsFeedPostCardAuthor.vue'
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useUserStore } from '@/stores/userStore.js'
import { ref } from 'vue'
import request from '@/config/axiosInstance.js'
import { computed } from 'vue'
import { useQuoteStore } from '@/stores/quoteStore.js'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { commentsChannel } from '@/echo.js'

const props = defineProps({
  quoteId: {
    type: Number,
    required: true
  }
})

const userStore = useUserStore()
const quoteStore = useQuoteStore()
const route = useRoute()
const avatar = computed(() => useGetImagePath(userStore.user.profile_picture))
const comment = ref('')
const shouldLimitCommentsCount = computed(() => route.name === 'news-feed')
const quote = ref(quoteStore.quotes.find((quote) => quote.id === props.quoteId))

onMounted(() => {
  commentsChannel.listen('CommentAddedEvent', (data) => {
    if (props.quoteId === data.comment.quote_id) {
      const updatedQuote = {
        ...quote.value,
        comments: [...quote.value.comments, data.comment]
      }
      quote.value = updatedQuote
      quoteStore.updateQuotes(updatedQuote)
    }
  })
})

const comments = computed(() => {
  const comments = [...quote.value.comments]
  if (shouldLimitCommentsCount.value && comments.length > 2) {
    return comments.splice(comments.length - 2, comments.length - 1)
  }
  return comments
})

const handleSubmit = async (event) => {
  event.preventDefault()
  await request.post(`/api/${props.quoteId}/add-comment`, {
    comment: comment.value
  })
  comment.value = ''
}
</script>

<template>
  <div>
    <ul class="flex flex-col gap-6">
      <li class="flex flex-col" v-for="commentObject in comments" :key="commentObject.id">
        <CommentAuthor :author="commentObject.author" />
        <p class="lg:text-xl pb-6 border-b border-b-[#EFEFEF4D] lg:ml-20 pt-3 break-words">
          {{ commentObject.comment }}
        </p>
      </li>
    </ul>
    <div class="mt-6 flex items-center gap-6">
      <img :src="avatar || avatarPlaceholder" alt="avatar" class="w-[52px] h-[52px] rounded-full" />
      <form @submit="handleSubmit" class="w-full">
        <input
          type="text"
          class="w-full rounded-[10px] lg:text-xl px-7 py-3 outline-none bg-[#24222F] resize-none"
          :placeholder="$t('news_feed.write_comment')"
          v-model="comment"
        />
      </form>
    </div>
  </div>
</template>
