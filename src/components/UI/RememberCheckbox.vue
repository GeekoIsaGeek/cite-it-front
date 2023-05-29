<script setup>
import { useI18n } from 'vue-i18n'
defineProps({
  value: {
    type: Boolean,
    required: true
  },
  setValue: {
    type: Function,
    required: true
  }
})

const { t } = useI18n()
</script>

<template>
  <div class="flex gap-2 items-center">
    <input type="checkbox" :value="value" name="remember" class="h-4 w-4" @change="setValue" />
    <label for="remember" class="text-white">{{ t('auth.remember') }}</label>
  </div>
</template>
