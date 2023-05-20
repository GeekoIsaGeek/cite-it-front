<script setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <button
    class="bg-[#E31221] hover:bg-[#CC0E10] border-none active:bg-[#B80D0F] disabled:bg-[ #EC4C57] rounded text-white flex justify-center items-center transition-colors"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
