<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
const transitionClasses = computed(() => {
  const type = props.type
  if (type === 'edit') {
    return 'translate-x-[100%]'
  } else if (type === 'view') {
    return 'translate-x-[-100%]'
  } else return 'scale-0'
})
</script>

<template>
  <Transition
    appear
    :enter-from-class="transitionClasses"
    enter-active-class="transition-all duration-500 ease-out"
  >
    <slot />
  </Transition>
</template>
