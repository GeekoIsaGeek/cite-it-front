<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import LinkButton from '@/components/UI/LinkButton.vue'
import expired from '@/assets/images/flat-color-icons_expired.svg'
</script>

<template>
  <AuthFeedbackWrapper
    :heading="$t('forgot_password.link_expired_heading')"
    :message="$t('forgot_password.link_expired_message')"
  >
    <template #image>
      <img :src="expired" alt="warning" />
    </template>
    <LinkButton link="">
      {{ $t('forgot_password.request_another_link') }}
    </LinkButton>
  </AuthFeedbackWrapper>
</template>
