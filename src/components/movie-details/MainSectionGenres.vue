<script setup>
import { ref } from 'vue'

const genres = ref(['Drama', 'Thriller'])
</script>

<template>
  <ul class="flex items-center gap-2 pt-1 pb-5 flex-wrap">
    <li
      v-for="genre in genres"
      :key="genre"
      class="text-lg font-bold py-[6px] px-3 bg-darkGray text-white rounded"
    >
      {{ genre }}
    </li>
  </ul>
</template>
