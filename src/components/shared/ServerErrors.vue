<script setup>
defineProps({
  errors: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="mt-4">
    <h4
      v-for="(error, i) in errors"
      :key="i"
      class="text-white flex items-start max-w-[360px] gap-2"
    >
      <i class="ri-error-warning-line text-redFail break-words"></i>
      {{ error }}
    </h4>
  </div>
</template>
