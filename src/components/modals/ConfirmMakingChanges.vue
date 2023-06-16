<script setup>
import ConfirmButton from '@/components/UI/RedButton.vue'

const props = defineProps({
  modalCloser: {
    type: Function,
    required: true
  },
  handleUpdate: {
    type: Function,
    required: false
  }
})

const handleConfirm = async () => {
  if (props.handleUpdate) {
    await props.handleUpdate()
    props.modalCloser()
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      class="modal-bg-gradient md:hidden fixed text-white h-screen px-[5vw] w-full top-0 left-0 z-50 backdrop-blur-[2px]"
    >
      <div
        class="rounded-lg mt-32 bg-[#24222F] shadow-md bg-gradient-to-br from-veryDarkPurple via-darkPurple to-[#EFEFEF0D]"
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
