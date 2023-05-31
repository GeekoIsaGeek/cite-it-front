<script setup>
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormWrapper from '@/components/shared/FormWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import ResetButton from '@/components/UI/RedButton.vue'
import arrow from '@/assets/images/arrow-back.png'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
import axios from 'axios'

const route = useRoute()

const credentials = reactive({
  token: route.query?.token,
  email: route.query?.email,
  password: null,
  password_confirmation: null
})

const handlePasswordUpdate = async () => {
  const response = await axios.post('http://localhost:8000/api/reset-password', credentials)
  console.log(response)
}
</script>

<template>
  <ModalWrapper>
    <FormWrapper
      :heading="$t('forgot_password.create_new_password')"
      :subHeading="$t('forgot_password.password_update_message')"
    >
      <template v-slot:default="{ isTouched, isValid }">
        <FormField
          :placeholder="$t('auth.password_label')"
          :label="$t('auth.password_label')"
          type="password"
          rules="required|min:8|max:15|only_lowercase"
          name="password"
          required
          :setValue="(password) => (credentials.password = password)"
        />
        <FormField
          :placeholder="$t('auth.confirm_password')"
          :label="$t('auth.confirm_password')"
          type="password"
          rules="required|confirmed:@password"
          name="confirmation"
          :setValue="(password) => (credentials.password_confirmation = password)"
          required
        />
        <ResetButton class="mt-2" :disabled="isTouched && !isValid" @click="handlePasswordUpdate">{{
          $t('forgot_password.reset_password')
        }}</ResetButton>
        <p class="text-darkGray mt-5 flex items-center gap-4 justify-center">
          <img :src="arrow" alt="arrow" />
          <RouterLink :to="{ name: 'login' }">{{ $t('forgot_password.back_to_login') }}</RouterLink>
        </p>
      </template>
    </FormWrapper>
  </ModalWrapper>
</template>
