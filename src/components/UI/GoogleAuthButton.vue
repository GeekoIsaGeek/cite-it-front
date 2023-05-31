<script setup>
defineProps({
  action: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a
    href="http://localhost:8000/api/auth/redirect"
    target="_blank"
    class="text-white flex items-center justify-center gap-2 border border-lightGray rounded h-[38px] hover:bg-white hover:text-darkBlue transition-colors"
  >
    <i class="ri-google-fill" /> {{ action }}
  </a>
</template>
