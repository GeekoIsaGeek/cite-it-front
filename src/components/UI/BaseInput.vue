<script setup>
import { ErrorMessage, Field, useIsFieldTouched, useIsFieldValid } from 'vee-validate'
import ThePreviewIcon from '@/components/icons/ThePreviewIcon.vue'
import TheInvalidIcon from '@/components/icons/TheInvalidIcon.vue'
import TheValidIcon from '@/components/icons/TheValidIcon.vue'
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: false
  },
  setValue: {
    type: Function,
    required: false
  },
  styles: {
    type: String,
    required: false
  }
})

const variableType = ref(props.type)
const isValid = useIsFieldValid(props.name)
const isTouched = useIsFieldTouched(props.name)

const handleInput = (event) => {
  if (props.setValue) {
    props.setValue(event.target.value)
  }
  return
}
</script>

<template>
  <div class="flex flex-col w-full gap-2 relative">
    <label class="text-base text-white">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>

    <Field
      v-slot="{ field, meta }"
      :rules="rules"
      :name="name"
      @input="(event) => handleInput(event)"
    >
      <input
        :placeholder="placeholder"
        :type="variableType"
        v-bind="field"
        :class="{
          [styles]: true,
          'border-2 border-greenSuccess': meta.valid && meta.touched,
          'border-2 border-redFail': !meta.valid && meta.touched,
          'w-full bg-lightGray outline-none h-[38px] pr-9 px-[13px] rounded flex flex-row focus:shadow-input': true,
          'pr-16': type === 'password'
        }"
      />
    </Field>
    <TheValidIcon v-if="isValid && isTouched" />
    <TheInvalidIcon v-if="!isValid && isTouched" />
    <ThePreviewIcon
      v-if="type === 'password'"
      :class="`right-[${isTouched ? 40 : 13}px]`"
      @click="variableType = variableType === 'password' ? 'text' : 'password'"
    />
  </div>
  <ErrorMessage :name="name" class="text-redFail text-base mt-[-10px] break-words max-w-[360px]" />
</template>
