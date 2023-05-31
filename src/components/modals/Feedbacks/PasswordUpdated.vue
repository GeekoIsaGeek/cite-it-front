<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import success from '@/assets/images/success.svg'
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
      <img :src="success" alt="success sign" />
    </template>
    <GoToNewsFeed @click="router.push({ name: 'login' })" class="py-[7px] w-full">
      {{ $t('landing.login') }}
    </GoToNewsFeed>
  </AuthFeedbackWrapper>
</template>
