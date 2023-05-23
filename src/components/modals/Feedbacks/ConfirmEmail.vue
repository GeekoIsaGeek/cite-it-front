<script setup>
import { useI18n } from 'vue-i18n'
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import envelope from '@/assets/images/email-has-been-sent.svg'
import GoToEmailButton from '@/components/UI/RedButton.vue'
const { t } = useI18n()
</script>

<template>
  <AuthFeedbackWrapper
    :heading="t('auth_feedback.thank_you')"
    :message="t('auth_feedback.check_email')"
  >
    <template #image>
      <img :src="envelope" alt="envelope" />
    </template>
    <GoToEmailButton class="py-[7px] w-full">
      {{ t('auth_feedback.go_to_email') }}
    </GoToEmailButton>
  </AuthFeedbackWrapper>
</template>
