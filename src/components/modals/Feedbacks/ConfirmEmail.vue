<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import envelope from '@/assets/images/email-has-been-sent.svg'
import LinkButton from '@/components/UI/LinkButton.vue'
import { useUserStore } from '@/stores/userStore.js'
import { computed } from 'vue'

const userStore = useUserStore()
const mailDomain = computed(() => userStore.user.email?.split('@').pop()) || 'gmail.com'

defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <AuthFeedbackWrapper
    :heading="$t('auth_feedback.thank_you')"
    :message="$t('auth_feedback.check_email')"
  >
    <template #image>
      <img :src="envelope" alt="envelope" />
    </template>
    <LinkButton :link="`https://${mailDomain}`">
      {{ $t('auth_feedback.go_to_email') }}
    </LinkButton>
  </AuthFeedbackWrapper>
</template>
