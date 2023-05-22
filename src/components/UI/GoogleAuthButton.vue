<script setup>
defineProps({
  action: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button
    class="text-white flex items-center justify-center gap-2 border border-lightGray rounded h-[38px] hover:bg-white hover:text-darkBlue transition-colors"
  >
    <i class="ri-google-fill" /> {{ action }} with Google
  </button>
</template>
