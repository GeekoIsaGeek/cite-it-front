<script setup>
import AuthFeedbackWrapper from '@/components/shared/AuthFeedbackWrapper.vue'
import TheEnvelopeIcon from '@/components/icons/TheEnvelopeIcon.vue'
import LinkButton from '@/components/UI/LinkButton.vue'
import { useUserStore } from '@/stores/userStore.js'
import { computed } from 'vue'

const userStore = useUserStore()
const mailDomain = computed(() => userStore.user?.email?.split('@').pop())

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
      <TheEnvelopeIcon />
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
