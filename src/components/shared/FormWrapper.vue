<script setup>
import { Form } from 'vee-validate'
defineProps({
  heading: {
    type: String,
    required: true
  },
  subHeading: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Form
    v-slot="{ meta }"
    class="flex sm:justify-center items-center flex-col bg-darkPurple sm:rounded-[10px] py-18 px-9 sm:py-13 sm:px-30 w-screen h-screen sm:w-auto sm:h-auto select-none"
  >
    <h2 class="text-white md:text-[32px] text-2xl text-center">{{ heading }}</h2>
    <h3 class="text-darkGray mt-3 text-center">{{ subHeading }}</h3>
    <div class="flex flex-col w-full gap-4 mt-6 sm:min-w-[360px]">
      <slot :isValid="meta.valid" :isTouched="meta.touched" />
    </div>
  </Form>
</template>
