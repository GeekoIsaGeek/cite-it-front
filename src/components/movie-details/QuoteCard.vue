<script setup>
import TheMoreIcon from '@/components/icons/TheMoreIcon.vue'
import QuoteCardMoreOptions from '@/components/movie-details/QuoteCardMoreOptions.vue'
import PostStatistics from '@/components/shared/PostStatistics.vue'
import { ref, computed, provide } from 'vue'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { useI18n } from 'vue-i18n'
import request from '@/config/axiosInstance.js'

const { locale } = useI18n()
const props = defineProps({
  quote: {
    type: Object,
    required: true
  },
  updateQuotes: {
    type: Function,
    required: true
  }
})

const poster = computed(() => useGetImagePath(props.quote.image))
const quoteObject = computed(() => props.quote)
const quote = computed(() => quoteObject.value.quote[locale.value])
const showDropdown = ref(false)

const handleDelete = async () => {
  const { status } = await request.delete(`/api/quotes/${props.quote.id}`)
  if (status === 200) showDropdown.value = false
}
</script>

<template>
  <div class="bg-almostBlack lg:w-[55%] px-8 rounded-[10px] relative">
    <div class="flex items-center flex-col lg:flex-row gap-8 py-6 border-b border-[#EFEFEF33]">
      <img :src="poster" alt="movie" class="rounded-sm w-full lg:w-56 h-36 object-cover" />
      <div class="flex flex-col w-full self-start">
        <TheMoreIcon
          class="hover:text-darkGray cursor-pointer text-3xl self-end absolute lg:relative bottom-5"
          @click="() => (showDropdown = !showDropdown)"
        />
        <h1 class="text-2xl italic lg:mt-7">"{{ quote }}"</h1>
      </div>
    </div>
    <PostStatistics class="text-xl" />
    <QuoteCardMoreOptions
      :handleDelete="handleDelete"
      v-if="showDropdown"
      :quote="quoteObject"
      class="absolute bottom-16 right-8 lg:top-9 lg:left-[92%]"
    />
  </div>
</template>
