<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import TheExpiredIcon from '@/components/icons/TheExpiredIcon.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <AuthFeedbackWrapper
    :heading="$t('forgot_password.link_expired_heading')"
    :message="$t('forgot_password.link_expired_message')"
  >
    <template #image>
      <TheExpiredIcon />
    </template>
    <RouterLink
      :to="{ name: 'link-expired' }"
      class="bg-[#E31221] hover:bg-[#CC0E10] border-none active:bg-[#B80D0F] disabled:bg-[#EC4C57] rounded text-white flex justify-center items-center transition-colors py-[7px]"
    >
      {{ $t('forgot_password.request_another_link') }}
    </RouterLink>
  </AuthFeedbackWrapper>
</template>
