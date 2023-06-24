<script setup>
import SadEmotionIcon from '@/components/icons/TheSadEmotionIcon.vue'
</script>
<template>
  <h2 class="text-2xl flex items-center gap-3">
    {{ $t('messages.nothing_found') }}
    <SadEmotionIcon class="text-3xl" />
  </h2>
</template>
