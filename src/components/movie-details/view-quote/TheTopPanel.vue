<script setup>
import TheEditIcon from '@/components/icons/TheEditIcon.vue'
import TheDeleteIcon from '@/components/icons/TheTrashIcon.vue'
import TheCloselIcon from '@/components/icons/TheCloseIcon.vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'

defineProps({
  heading: {
    type: String,
    required: true
  }
})

const route = useRoute()
const router = useRouter()
const handleClose = () => {
  router.push({
    name: 'movie-details',
    params: {
      id: route.params.id
    }
  })
}
</script>
<template>
  <div class="flex items-center justify-between px-8 pb-8 border-b border-b-darkGray">
    <div class="flex items-center gap-6" v-if="route.name === 'view-quote'">
      <TheEditIcon class="cursor-pointer" />
      <p class="text-darkGray">|</p>
      <TheDeleteIcon class="cursor-pointer" />
    </div>
    <button class="flex items-center gap-2" v-else>
      <TheDeleteIcon />{{ $t('movie_details.delete') }}
    </button>
    <h2 class="text-2xl text-white">{{ heading }}</h2>
    <TheCloselIcon class="relative text-white top-[0]" @click="handleClose" />
  </div>
</template>
