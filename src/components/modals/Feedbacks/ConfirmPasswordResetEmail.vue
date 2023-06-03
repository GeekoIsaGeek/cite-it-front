<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import envelope from '@/assets/images/email-has-been-sent.svg'
import LinkButton from '@/components/UI/LinkButton.vue'
const mailDomain = 'gio@gmail.com'.split('@').pop()
defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <AuthFeedbackWrapper
    :heading="$t('forgot_password.check_email')"
    :message="$t('forgot_password.email_sent_message')"
  >
    <template #image>
      <img :src="envelope" alt="envelope" />
    </template>
    <LinkButton :link="`https://${mailDomain}`">
      {{ $t('auth_feedback.go_to_email') }}
    </LinkButton>
    <p class="text-center mt-7">
      <RouterLink :to="{ name: 'home' }" class="text-darkGray">{{
        $t('forgot_password.skip')
      }}</RouterLink>
    </p>
  </AuthFeedbackWrapper>
</template>
