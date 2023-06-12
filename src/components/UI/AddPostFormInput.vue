<script setup>
import { Field } from 'vee-validate'
import { ErrorMessage } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true
  },
  rules: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: false
  },
  isTextArea: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <div class="flex border border-inputGray rounded-[4px] px-3 py-2 break-words">
    <Field v-slot="{ field, meta }" :rules="rules" :name="name">
      <textarea
        v-if="isTextArea"
        v-bind="field"
        :placeholder="placeholder"
        class="w-full bg-transparent h-full outline-none resize-none text-[22px] italic"
      />
      <input
        v-else
        v-bind="field"
        :placeholder="placeholder"
        class="w-full bg-transparent h-full outline-none"
      />
    </Field>
    <p class="ml-8 text-xl">{{ language }}</p>
  </div>
  <ErrorMessage
    :name="name"
    class="text-redFail mt-[-15px] first-letter:text-base break-words max-w-[360px] xl:max-w-none"
  />
</template>
