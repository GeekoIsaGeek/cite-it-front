<script setup>
import RemoveIcon from '@/components/icons/TheCloseIcon.vue'

defineProps({
  handleRemove: {
    type: Function,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-darkGray text-white text-sm py-[2px] px-[6px] flex items-center gap-2 rounded-sm">
    {{ genre }}
    <RemoveIcon class="relative text-sm top-[0] left-[0]" @click="() => handleRemove(genre)" />
  </div>
</template>
