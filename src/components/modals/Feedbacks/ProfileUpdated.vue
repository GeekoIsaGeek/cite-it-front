<script setup>
import TheSuccessIcon from '@/components/icons/TheSuccessIconGreen.vue'
import CloseIcon from '@/components/icons/TheCloseIcon.vue'

defineProps({
  modalCloser: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      class="h-screen w-full md:flex md:justify-center fixed top-0 left-0 pt-10 px-4 bg-[#181623e6] z-[50]"
    >
      <div
        class="bg-[#D1E7DD] py-4 md:w-max h-max md:gap-10 rounded flex items-center justify-between"
      >
        <div class="flex pl-5">
          <TheSuccessIcon />
          <p class="text-[#0F5132] ml-2">{{ $t('my_profile.profile_updated') }}</p>
        </div>
        <CloseIcon
          @click="modalCloser()"
          class="pr-3 md:block relative mt-[-14px] text-gray-600 hover:text-gray-700"
        />
      </div>
    </div>
  </Teleport>
</template>
