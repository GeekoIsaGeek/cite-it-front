<script setup>
import { onBeforeUnmount } from 'vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => (document.body.style.overflow = 'hidden'))
onBeforeUnmount(() => (document.body.style.overflow = 'auto'))
const router = useRouter()
</script>

<template>
  <Teleport to="body">
    <div
      @click="() => router.back()"
      class="fixed top-0 left-0 w-full h-screen bg-semiOpaqueBlack backdrop-blur-sm flex justify-center items-center cursor-pointer"
    >
      <slot />
    </div>
  </Teleport>
</template>
