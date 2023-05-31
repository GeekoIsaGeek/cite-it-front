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
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()
const { setUser } = useUserStore()
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
    await request.post(
      '/api/login',
      {
        ...credentials,
        username: credentials.usernameOrEmail
      },
      {
        headers: additionalHeaders
      }
    )
    const response = await request.get('/api/user')
    setUser(response.data)
    router.push({ name: 'home' })
  } catch (e) {
    console.log(e)
    if (e.response.data.error) {
      serverErrors.value = [e.response.data.error]
    } else {
      serverErrors.value = Object.values(e.response.data.errors)?.map((error) => error[0])
    }
  }
}
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
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
            <RouterLink :to="{ name: 'register' }" class="text-blue underline">{{
              $t('auth.sign_up')
            }}</RouterLink>
          </p>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
