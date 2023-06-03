<script setup>
defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="bg-[#E31221] hover:bg-[#CC0E10] border-none active:bg-[#B80D0F] disabled:bg-[#EC4C57] rounded text-white flex justify-center items-center transition-colors py-[7px]"
  >
    <slot />
  </a>
</template>
