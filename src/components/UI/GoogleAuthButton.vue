<script setup>
defineProps({
  action: {
    type: String,
    required: true
  }
})
const link = `${import.meta.env.VITE_SERVER_URL}/api/auth/redirect`
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="text-white flex items-center justify-center gap-2 border border-lightGray rounded h-[38px] hover:bg-white hover:text-darkBlue transition-colors"
  >
    <i class="ri-google-fill"></i> {{ action }}
  </a>
</template>
