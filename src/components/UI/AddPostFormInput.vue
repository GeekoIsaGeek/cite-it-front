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
  },
  showLabel: {
    type: Boolean,
    required: false
  },
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex border border-inputGray rounded-[4px] px-3 py-2 gap-2 break-words">
    <Field v-slot="{ field }" :rules="rules" :name="name">
      <p v-if="showLabel" class="min-w-max text-darkGray">{{ placeholder }}:</p>
      <textarea
        v-if="isTextArea"
        v-bind="field"
        :placeholder="placeholder"
        :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
        class="w-full bg-transparent h-full outline-none resize-none lg:text-[22px] italic placeholder-white"
      />
      <input
        v-else
        v-bind="field"
        :placeholder="placeholder"
        :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
        class="w-full lg:text-xl bg-transparent h-full outline-none placeholder-white"
      />
    </Field>
    <p class="ml-8 lg:text-xl text-darkGray" v-if="language">{{ language }}</p>
  </div>
  <ErrorMessage
    :name="name"
    class="text-redFail mt-[-15px] first-letter:text-base break-words max-w-[360px] xl:max-w-none"
  />
</template>
