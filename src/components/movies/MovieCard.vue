<script setup>
import ChatQuoteIcon from '@/components/icons/TheChatQuoteIcon.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const id = ref(2)
const destinationRoute = {
  name: 'movie-details',
  params: {
    id: id.value
  }
}
</script>

<template>
  <div class="w-[calc(100%-32px)] justify-items-center">
    <img
      src="https://images4.fanpop.com/image/polls/769000/769993_1310246958714_full.jpg?v=1310247861"
      alt="movie image"
      class="rounded-xl object-cover h-full mb-4"
    />
    <RouterLink :to="destinationRoute" class="text-2xl mt-4 mb-[18px] hover:text-[#cbbbff]"
      >Liki Malibus (2021)</RouterLink
    >
    <div class="flex items-center gap-3">
      <span class="text-xl">10</span>
      <ChatQuoteIcon />
    </div>
  </div>
</template>
