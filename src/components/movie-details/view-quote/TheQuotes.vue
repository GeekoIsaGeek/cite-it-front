<script setup>
defineProps({
  quotes: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div>
    <div class="w-full flex justify-between border border-darkGray rounded px-4 py-2">
      <p class="text-white text-2xl italic">"{{ quotes.en }}"</p>
      <p class="text-darkGray text-xl">Eng</p>
    </div>
    <div class="w-full flex justify-between border border-darkGray rounded px-4 py-2 mt-4">
      <p class="text-white text-2xl italic">"{{ quotes.ka }}"</p>
      <p class="text-darkGray text-xl">ქარ</p>
    </div>
  </div>
</template>
