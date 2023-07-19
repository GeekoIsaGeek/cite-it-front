<script setup>
import TheBellIcon from '@/components/icons/TheBellIcon.vue'
import TheTriangleIcon from '@/components/icons/TheTriangleIcon.vue'

defineProps({
  count: {
    type: Number,
    required: true
  },
  showNotifications: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="relative flex mr-9 cursor-pointer">
    <TheBellIcon />
    <div
      v-if="count > 0"
      class="text-white font-medium w-6 h-6 bg-[#E33812] flex justify-center items-center rounded-full absolute right-[-12px] top-[-2px]"
    >
      {{ count }}
    </div>
    <Transition enter-from-class="opacity-0" enter-active-class="transition-opacity delay-150 duration-500 ease-in-out">
      <TheTriangleIcon class="absolute top-[45px] left-[-5px]" v-show="showNotifications" />
    </Transition>
  </div>
</template>
