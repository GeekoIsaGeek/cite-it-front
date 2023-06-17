<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
onMounted(() => (document.body.style.overflow = 'hidden'))
onBeforeUnmount(() => (document.body.style.overflow = 'auto'))
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 h-screen w-full pt-20 flex justify-center modal-bg-gradient z-50"
    >
      <slot />
    </div>
  </Teleport>
</template>
