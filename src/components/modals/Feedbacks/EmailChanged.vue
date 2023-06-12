<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import SuccessIcon from '@/components/icons/TheSuccessIconPurple.vue'
import GoToNewsFeed from '@/components/UI/RedButton.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <AuthFeedbackWrapper
    :heading="$t('my_profile.success')"
    :message="$t('my_profile.email_changed')"
  >
    <template #image>
      <SuccessIcon />
    </template>

    <GoToNewsFeed @click="router.push({ name: 'login' })" class="py-[7px] w-full">
      {{ $t('auth_feedback.go_to_login') }}
    </GoToNewsFeed>
  </AuthFeedbackWrapper>
</template>
