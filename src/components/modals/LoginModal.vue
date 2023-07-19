<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import SignInButton from '@/components/UI/RedButton.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
import RememberCheckbox from '@/components/UI/RememberCheckbox.vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { reactive, ref } from 'vue'
import request from '@/config/axiosInstance.js'
import ServerErrors from '@/components/shared/ServerErrors.vue'
import { useUserStore } from '@/stores/userStore.js'
import { useRouter } from 'vue-router'
import { getServerErrorMessages } from '@/utils/getErrors.js'
import FormWrapperTransition from '@/components/shared/FormWrapperTransition.vue'

const { locale } = useI18n()
const router = useRouter()
const { fetchUser } = useUserStore()
const credentials = reactive({
  usernameOrEmail: null,
  password: null,
  remember: false
})
const serverErrors = ref([])

const handleLogin = async () => {
  try {
    const additionalHeaders = {
      'Accept-Language': locale.value
    }
    const updatedCredentials = {
      ...credentials,
      username: credentials.usernameOrEmail
    }
    await request.post('/api/login', updatedCredentials, {
      headers: additionalHeaders
    })
    await request.get('/api/user')
    fetchUser()
    router.push({ name: 'news-feed' })
  } catch (error) {
    console.log(error)
    serverErrors.value = getServerErrorMessages(error) || []
  }
}
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapperTransition>
        <FormWrapper :heading="$t('auth.login_heading')" :subHeading="`${$t('auth.login_heading')}.`">
          <template v-slot:default="{ isTouched, isValid }">
            <BaseInput
              :placeholder="$t('auth.email_placeholder')"
              :label="$t('auth.email_label')"
              type="email"
              rules="required|min:3"
              name="email"
              :setValue="(email) => (credentials.usernameOrEmail = email)"
            />

            <BaseInput
              :placeholder="$t('auth.password_label')"
              :label="$t('auth.password_label')"
              type="password"
              rules="required"
              name="password"
              :setValue="(password) => (credentials.password = password)"
            />
            <div class="flex justify-between">
              <RememberCheckbox
                :setValue="() => (credentials.remember = !credentials.remember)"
                :value="credentials.remember"
              />
              <RouterLink :to="{ name: 'forgot-password' }" class="text-blue underline">
                {{ $t('auth.forgot_password') }}
              </RouterLink>
            </div>
            <SignInButton class="h-[38px]" :disabled="isTouched && !isValid" @click="handleLogin">{{
              $t('auth.sign_in')
            }}</SignInButton>

            <GoogleAuthButton :action="$t('auth.google_sign_in')" />
            <ServerErrors :errors="serverErrors" />

            <p class="mt-4 text-center text-darkGray">
              {{ $t('auth.dont_have_account') }}
              <RouterLink :to="{ name: 'register' }" class="text-blue underline">{{ $t('auth.sign_up') }}</RouterLink>
            </p>
          </template>
        </FormWrapper>
      </FormWrapperTransition>
    </ModalWrapper>
  </Teleport>
</template>
