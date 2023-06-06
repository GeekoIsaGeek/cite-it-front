<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col w-full gap-2">
    <label class="text-base text-white"> {{ label }} </label>
    <input
      :placeholder="placeholder"
      :type="type"
      disabled
      class="w-full bg-lightGray outline-none h-[38px] pr-9 px-[13px] rounded flex flex-row focus:shadow-input placeholder-[#212529]"
    />
  </div>
</template>
