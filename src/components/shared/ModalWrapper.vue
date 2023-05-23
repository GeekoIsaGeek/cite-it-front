<script setup>
const props = defineProps({
  showLoginModal: {
    type: Boolean,
    required: true
  }
})
</script>
<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-full h-screen bg-semiOpaqueBlack backdrop-blur-sm flex justify-center items-center cursor-pointer"
    >
      <slot />
    </div>
  </Teleport>
</template>
