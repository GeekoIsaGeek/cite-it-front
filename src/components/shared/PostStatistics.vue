<script setup>
import TheHeartIcon from '@/components/icons/TheHeartIcon.vue'
import TheCommentIcon from '@/components/icons/TheCommentIcon.vue'

defineProps({
  navigationHandler: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="py-6 flex gap-8 items-center">
    <p class="flex items-center gap-4" @click="navigationHandler">
      10 <TheCommentIcon class="cursor-pointer" />
    </p>
    <p class="flex items-center gap-4">3 <TheHeartIcon class="cursor-pointer" /></p>
  </div>
</template>
