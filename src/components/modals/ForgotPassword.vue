<script setup>
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormWrapper from '@/components/shared/FormWrapper.vue'
import SendButton from '@/components/UI/RedButton.vue'
import arrow from '@/assets/images/arrow-back.svg'
import { RouterLink, useRouter } from 'vue-router'
import BaseInput from '@/components/UI/BaseInput.vue'
import request from '@/config/axiosInstance.js'
import FormError from '@/components/shared/FormError.vue'
import { ref } from 'vue'

const router = useRouter()
const email = ref(null)
const errorMessage = ref(null)

const sendEmail = async () => {
  try {
    await request.post('/api/forgot-password', { email: email.value })
    router.push({ name: 'password-reset-email-confirmation' })
  } catch (error) {
    errorMessage.value = error.response.data.message
  }
}
</script>

<template>
  <ModalWrapper>
    <FormWrapper
      :heading="$t('forgot_password.heading')"
      :subHeading="$t('forgot_password.subHeading')"
    >
      <BaseInput
        name="email"
        :label="$t('auth.email_label')"
        :placeholder="$t('auth.email_placeholder')"
        rules="required|email"
        type="email"
        :setValue="(receivedEmail) => (email = receivedEmail)"
      />
      <FormError>{{ errorMessage }}</FormError>
      <SendButton @click="sendEmail">{{ $t('forgot_password.send') }}</SendButton>
      <p class="text-darkGray mt-5 flex items-center gap-4 justify-center">
        <img :src="arrow" alt="arrow" />
        <RouterLink :to="{ name: 'login' }">{{ $t('forgot_password.back_to_login') }}</RouterLink>
      </p>
    </FormWrapper>
  </ModalWrapper>
</template>
