<script setup>
import SuccessSign from '@/assets/images/success-green.svg'
import CloseIcon from '@/components/icons/TheCloseIcon.vue'
</script>

<template>
  <Teleport to="body">
    <div class="md:hidden h-screen w-full fixed top-0 left-0 pt-10 px-4 bg-[#181623e6] z-[50]">
      <div class="bg-[#D1E7DD] py-4 rounded flex items-center justify-between">
        <div class="flex pl-5">
          <img :src="SuccessSign" alt="succes sign" />
          <p class="text-[#0F5132] ml-2">{{ $t('my_profile.profile_updated') }}</p>
        </div>
        <CloseIcon class="pr-3 relative mt-[-14px] text-gray-500 hover:text-gray-600" />
      </div>
    </div>
  </Teleport>
</template>
