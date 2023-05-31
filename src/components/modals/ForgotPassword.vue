<script setup>
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormWrapper from '@/components/shared/FormWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import SendButton from '@/components/UI/RedButton.vue'
import arrow from '@/assets/images/arrow-back.png'
import { RouterLink, useRouter } from 'vue-router'
import request from '@/config/axiosInstance.js'

import { ref } from 'vue'
const router = useRouter()
const email = ref(null)

const sendEmail = async () => {
  const response = await request.post('/api/forgot-password', { email: email.value })
  if (response.status === 200) {
    router.push({ name: 'password-reset-email-confirmation' })
  }
}
</script>

<template>
  <ModalWrapper>
    <FormWrapper
      :heading="$t('forgot_password.heading')"
      :subHeading="$t('forgot_password.subHeading')"
    >
      <FormField
        name="email"
        :label="$t('auth.email_label')"
        :placeholder="$t('auth.email_placeholder')"
        rules="required|email"
        type="email"
        :setValue="(receivedEmail) => (email = receivedEmail)"
      />
      <SendButton @click="sendEmail">{{ $t('forgot_password.send') }}</SendButton>
      <p class="text-darkGray mt-5 flex items-center gap-4 justify-center">
        <img :src="arrow" alt="arrow" />
        <RouterLink :to="{ name: 'login' }">{{ $t('forgot_password.back_to_login') }}</RouterLink>
      </p>
    </FormWrapper>
  </ModalWrapper>
</template>
