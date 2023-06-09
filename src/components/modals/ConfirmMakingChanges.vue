<script setup>
import ConfirmButton from '@/components/UI/RedButton.vue'
import { inject } from 'vue'

const props = defineProps({
  modalCloser: {
    type: Function,
    required: true
  }
})

const showSuccessMessage = inject('showSuccessMessage')
const handleConfirm = () => {
  showSuccessMessage.value = true
  props.modalCloser()
}
</script>

<template>
  <Teleport to="body">
    <div
      class="wrapper md:hidden fixed text-white h-screen px-[10vw] w-full top-0 left-0 z-50 backdrop-blur-[2px]"
    >
      <div
        class="rounded-lg mt-32 bg-[#24222F] shadow-md bg-gradient-to-br from-darkPurple to-[#EFEFEF0D]"
      >
        <p class="py-20 pt-20 text-center pb-11 text-base border-b border-b-[#CED4DA33]">
          {{ $t('my_profile.confirm_changes') }}
        </p>
        <div class="flex justify-between px-8 py-5">
          <button @click="modalCloser()" class="hover:text-gray-400">
            {{ $t('my_profile.cancel') }}
          </button>
          <ConfirmButton @click="handleConfirm" class="px-[6px]">{{
            $t('my_profile.confirm')
          }}</ConfirmButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.wrapper {
  background: linear-gradient(187.16deg, #181623f0 0.07%, #191725eb 51.65%, #0d0b14f1 98.75%);
}
</style>
