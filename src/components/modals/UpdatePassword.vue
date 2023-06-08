<script setup>
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormWrapper from '@/components/shared/FormWrapper.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import ResetButton from '@/components/UI/RedButton.vue'
import GoBackIcon from '@/components/icons/TheGoBackIcon.vue'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import axios from 'axios'
import FormError from '@/components/shared/FormError.vue'
import { ref } from 'vue'

const route = useRoute()

const credentials = reactive({
  token: route.query?.token,
  email: route.query?.email,
  password: null,
  password_confirmation: null
})

const errorMessage = ref(null)

const handlePasswordUpdate = async () => {
  const url = `${import.meta.env.VITE_SERVER_URL}/api/reset-password`
  try {
    axios.defaults.withCredentials = true
    await axios.post(url, credentials)
  } catch (error) {
    errorMessage.value = error.response.data.message
  }
}
</script>

<template>
  <ModalWrapper>
    <FormWrapper
      :heading="$t('forgot_password.create_new_password')"
      :subHeading="$t('forgot_password.password_update_message')"
    >
      <template v-slot:default="{ isTouched, isValid }">
        <BaseInput
          :placeholder="$t('auth.password_label')"
          :label="$t('auth.password_label')"
          type="password"
          rules="required|min:8|max:15|only_lowercase"
          name="password"
          required
          :setValue="(password) => (credentials.password = password)"
        />
        <BaseInput
          :placeholder="$t('auth.confirm_password')"
          :label="$t('auth.confirm_password')"
          type="password"
          rules="required|confirmed:@password"
          name="confirmation"
          :setValue="(password) => (credentials.password_confirmation = password)"
          required
        />
        <FormError>{{ errorMessage }}</FormError>
        <ResetButton class="mt-2" :disabled="isTouched && !isValid" @click="handlePasswordUpdate">{{
          $t('forgot_password.reset_password')
        }}</ResetButton>

        <p class="text-darkGray mt-5 flex items-center gap-4 justify-center">
          <GoBackIcon />
          <RouterLink :to="{ name: 'login' }">{{ $t('forgot_password.back_to_login') }}</RouterLink>
        </p>
      </template>
    </FormWrapper>
  </ModalWrapper>
</template>
