<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import TheSuccessIconPurple from '@/components/icons/TheSuccessIconPurple.vue'

import GoToNewsFeed from '@/components/UI/RedButton.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <AuthFeedbackWrapper
    :heading="$t('auth_feedback.thank_you')"
    :message="$t('forgot_password.success')"
  >
    <template #image>
      <TheSuccessIconPurple />
    </template>
    <GoToNewsFeed @click="router.push({ name: 'login' })" class="py-[7px] w-full">
      {{ $t('landing.login') }}
    </GoToNewsFeed>
  </AuthFeedbackWrapper>
</template>
