<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import SignInButton from '@/components/UI/RedButton.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
import RememberCheckbox from '@/components/UI/RememberCheckbox.vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const { t } = useI18n()
const credentials = reactive({
  email: null,
  password: null,
  remember: false
})
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapper :heading="t('auth.login_heading')" :subHeading="`${t('auth.login_heading')}.`">
        <template v-slot:default="{ isTouched, isValid }">
          <BaseInput
            :placeholder="t('auth.email_placeholder')"
            :label="t('auth.email_label')"
            type="email"
            rules="required|min:3"
            name="email"
            :setValue="(email) => (credentials.email = email)"
          />
          <BaseInput
            :placeholder="t('auth.password_label')"
            :label="t('auth.password_label')"
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
            <button @click.prevent class="text-blue underline">
              {{ t('auth.forgot_password') }}
            </button>
          </div>
          <SignInButton class="h-[38px]" :disabled="isTouched && !isValid">{{
            t('auth.sign_in')
          }}</SignInButton>
          <GoogleAuthButton :action="t('auth.google_sign_in')" />

          <p class="mt-4 text-center text-darkGray">
            {{ t('auth.dont_have_account') }}
            <RouterLink :to="{ name: 'register' }" class="text-blue underline">{{
              t('auth.sign_up')
            }}</RouterLink>
          </p>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
