<script setup>
import { ErrorMessage, Field, useIsFieldTouched, useIsFieldValid } from 'vee-validate'
import preview from '@/assets/images/preview.svg'
import valid from '@/assets/images/valid-icon.svg'
import invalid from '@/assets/images/invalid-icon.svg'
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
  }
})

const variableType = ref(props.type)
const isValid = useIsFieldValid(props.name)
const isTouched = useIsFieldTouched(props.name)

const handleInput = (e) => {
  if (props.setValue) {
    props.setValue(e.target.value)
  }
  return
}
</script>

<template>
  <div class="flex flex-col w-full gap-2 relative">
    <label class="text-base text-white">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <Field v-slot="{ field, meta }" :rules="rules" :name="name" :type="variableType">
      <input
        v-bind="field"
        :placeholder="placeholder"
        @input="handleInput"
        :class="{
          'border-2 border-greenSuccess': meta.touched && meta.valid,
          'border-2 border-redFail': meta.touched && !meta.valid,
          'w-full bg-lightGray outline-none h-[38px] pr-9 px-[13px] rounded flex flex-row focus:shadow-input': true
        }"
      />
    </Field>
    <img
      :src="isValid ? valid : invalid"
      alt="validation status sign"
      v-if="isTouched && type !== 'password'"
      class="absolute bottom-[10px] right-[13px] cursor-pointer"
    />
    <img
      :src="preview"
      alt="preview"
      v-if="type === 'password'"
      class="absolute bottom-[13px] right-[13px] cursor-pointer"
      @click="variableType = variableType === 'password' ? 'text' : 'password'"
    />
  </div>
  <ErrorMessage :name="name" class="text-redFail mt-[-10px] break-words max-w-[360px]" />
</template>