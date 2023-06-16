<script setup>
import TheMoreIcon from '@/components/icons/TheMoreIcon.vue'
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'
import QuoteCardMoreOptions from '@/components/movie-details/QuoteCardMoreOptions.vue'
import { ref } from 'vue'

const showDropdown = ref(false)
</script>

<template>
  <div class="bg-almostBlack w-[55%] px-8 rounded-[10px] relative">
    <div class="flex items-center gap-8 py-6 border-b border-[#EFEFEF33]">
      <img
        src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg"
        alt="movie"
        class="rounded-sm w-56 h-36"
      />
      <div class="flex flex-col w-full self-start">
        <TheMoreIcon
          class="hover:text-darkGray cursor-pointer text-3xl self-end"
          @click="() => (showDropdown = !showDropdown)"
        />
        <h1 class="text-2xl italic mt-7">"Frankly, my dear, I don't give a damn."</h1>
      </div>
    </div>
    <div class="py-6 flex gap-8 items-center">
      <p class="flex items-center gap-4">10 <TheCommentIcon class="cursor-pointer" /></p>
      <p class="flex items-center gap-4">3 <TheHeartIcon class="cursor-pointer" /></p>
    </div>
    <QuoteCardMoreOptions v-if="showDropdown" class="absolute top-14 left-[92%]" />
  </div>
</template>
