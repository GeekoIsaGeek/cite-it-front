<script setup>
import TheBellIcon from '@/components/icons/TheBellIcon.vue'
</script>

<template>
  <div class="relative flex mr-9 cursor-pointer">
    <TheBellIcon />
    <div
      class="text-white font-medium w-6 h-6 bg-[#E33812] flex justify-center items-center rounded-full absolute right-[-12px] top-[-2px]"
    >
      0
    </div>
  </div>
</template>
