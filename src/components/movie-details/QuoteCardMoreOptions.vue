<script setup>
import TheEyeIcon from '@/components/icons/TheEyeIcon.vue'
import TheEditIcon from '@/components/icons/TheEditIcon.vue'
import TheThrashIcon from '@/components/icons/TheTrashIcon.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  handleDelete: {
    type: Function,
    required: true
  },
  quote: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const navigateToViewQuoteModal = () => {
  router.push({
    name: 'view-quote',
    params: {
      id: props.quote.id
    }
  })
}

const navigateToEditQuoteModal = () => {
  router.push({
    name: 'edit-quote',
    params: {
      id: props.quote.id
    }
  })
}
</script>

<template>
  <div class="bg-[#24222F] rounded-[10px] px-10 py-8 flex flex-col gap-8 max-h-max min-w-max">
    <div class="flex items-center gap-5">
      <TheEyeIcon />
      <button class="hover:text-gray-400" @click="navigateToViewQuoteModal">
        {{ $t('movie_details.view_quote') }}
      </button>
    </div>
    <div class="flex items-center gap-5">
      <TheEditIcon />
      <button class="hover:text-gray-400" @click="navigateToEditQuoteModal">
        {{ $t('movie_details.edit') }}
      </button>
    </div>
    <div class="flex items-center gap-5">
      <TheThrashIcon />
      <button class="hover:text-gray-400" @click="handleDelete">
        {{ $t('movie_details.delete') }}
      </button>
    </div>
  </div>
</template>
