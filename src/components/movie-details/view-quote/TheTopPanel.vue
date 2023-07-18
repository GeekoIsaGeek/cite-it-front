<script setup>
import TheEditIcon from '@/components/icons/TheEditIcon.vue'
import TheDeleteIcon from '@/components/icons/TheTrashIcon.vue'
import TheCloselIcon from '@/components/icons/TheCloseIcon.vue'
import { useRouter, useRoute } from 'vue-router'
import request from '@/config/axiosInstance.js'
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore.js'

const props = defineProps({
  heading: {
    type: String,
    required: true
  },

  movie: {
    type: Object,
    required: false
  }
})

const route = useRoute()
const quoteId = route.params.id
const router = useRouter()
const userStore = useUserStore()
const isUserCreator = computed(() => props.movie.author.id === userStore.user.id)

const handleDelete = async () => {
  const response = await request.delete(`/api/quotes/${quoteId}`)
  if (response.status === 200) {
    router.back()
  }
}
</script>
<template>
  <div class="flex items-center justify-between px-8 pb-8 border-b border-b-darkGray">
    <div class="flex items-center gap-6" v-if="route.name === 'view-quote' && isUserCreator">
      <TheEditIcon
        class="cursor-pointer"
        @click="
          router.push({
            name: 'edit-quote',
            params: { id: quoteId }
          })
        "
      />
      <p class="text-darkGray">|</p>
      <TheDeleteIcon class="cursor-pointer" @click="handleDelete" />
    </div>
    <button class="flex items-center gap-2" @click="handleDelete" v-if="route.name === 'edit-quote' && isUserCreator">
      <TheDeleteIcon />{{ $t('movie_details.delete') }}
    </button>
    <h2 class="hidden lg:block text-2xl text-white">{{ heading }}</h2>
    <TheCloselIcon class="relative text-white top-[0]" @click="() => router.push({ name: 'news-feed' })" />
  </div>
</template>
