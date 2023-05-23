<script setup>
import ModalWrapper from '@/components/shared/ModalWrapper.vue'

defineProps({
  heading: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <ModalWrapper>
    <div
      @click.stop
      class="flex cursor-auto sm:justify-center items-center flex-col bg-darkPurple sm:rounded-[10px] py-18 px-9 sm:py-13 sm:px-24 w-screen h-screen sm:w-auto sm:h-auto select-none text-white"
    >
      <slot name="image" />
      <h2 class="text-[32px] font-medium mt-5">{{ heading }}</h2>
      <p class="mt-8 max-w-[384px] text-center">{{ message }}</p>
      <div class="mt-10 w-90">
        <slot />
      </div>
    </div>
  </ModalWrapper>
</template>
