<script setup>
import { useI18n } from 'vue-i18n'
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import success from '@/assets/images/success.svg'
import GoToNewsFeed from '@/components/UI/RedButton.vue'
const { t } = useI18n()
</script>

<template>
  <AuthFeedbackWrapper
    :heading="t('auth_feedback.thank_you')"
    :message="t('auth_feedback.activated')"
  >
    <template #image>
      <img :src="success" alt="success sign" />
    </template>
    <GoToNewsFeed class="py-[7px] w-full">
      {{ t('auth_feedback.news_feed') }}
    </GoToNewsFeed>
  </AuthFeedbackWrapper>
</template>
