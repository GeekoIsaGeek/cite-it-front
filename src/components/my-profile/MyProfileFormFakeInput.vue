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
      class="bg-transparent w-full md:bg-lightGray outline-none h-[38px] md:pr-9 md:px-[13px] pb-4 md:pb-[unset] md:rounded flex flex-row focus:shadow-input placeholder-white md:placeholder-[#212529] border-b border-b-gray-500"
    />
  </div>
</template>
