<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
import SignUpButton from '@/components/UI/RedButton.vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/config/axiosInstance.js'
import ServerErrors from '@/components/shared/ServerErrors.vue'
import { useUserStore } from '@/stores/userStore.js'
import { getServerErrorMessages } from '@/utils/getErrors.js'
import FormWrapperTransition from '@/components/shared/FormWrapperTransition.vue'

const { setUser } = useUserStore()
const { locale } = useI18n()
const router = useRouter()

const credentials = reactive({
  username: null,
  email: null,
  password: null,
  password_confirmation: null
})

const serverErrors = ref([])

const additionalHeaders = {
  'Accept-Language': locale.value
}

const handleRegistration = async () => {
  try {
    serverErrors.value = []
    await request.post('/api/register', credentials, {
      headers: additionalHeaders
    })
    setUser(credentials)
    router.push({ name: 'email-confirmation' })
  } catch (error) {
    serverErrors.value = getServerErrorMessages(error)
  }
}
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapperTransition>
        <FormWrapper :heading="$t('auth.register_heading')" :subHeading="$t('auth.register_subheading')">
          <template v-slot:default="{ isTouched, isValid }">
            <BaseInput
              :placeholder="$t('auth.username_placeholder')"
              :label="$t('auth.username')"
              type="text"
              rules="required|min:3|max:15|only_lowercase"
              name="username"
              required
              :setValue="(username) => (credentials.username = username)"
            />

            <BaseInput
              :placeholder="$t('auth.email_placeholder')"
              :label="$t('auth.email_label')"
              type="email"
              rules="required|email"
              name="email"
              required
              :setValue="(email) => (credentials.email = email)"
            />

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
            <SignUpButton class="h-[38px]" :disabled="isTouched && !isValid" @click="handleRegistration">{{
              $t('auth.sign_up')
            }}</SignUpButton>
            <GoogleAuthButton :action="$t('auth.google_sign_up')" />
            <ServerErrors :errors="serverErrors" />
            <p class="mt-4 text-center text-darkGray">
              {{ $t('auth.already_have_account') }}
              <RouterLink :to="{ name: 'login' }" class="text-blue underline">Log in</RouterLink>
            </p>
          </template>
        </FormWrapper>
      </FormWrapperTransition>
    </ModalWrapper>
  </Teleport>
</template>
