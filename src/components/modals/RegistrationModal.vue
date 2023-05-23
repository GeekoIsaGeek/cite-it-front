<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
import SignUpButton from '@/components/UI/RedButton.vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const { t } = useI18n()
const credentials = reactive({
  username: null,
  email: null,
  password: null
})
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapper
        :heading="t('auth.register_heading')"
        :subHeading="t('auth.register_subheading')"
      >
        <template v-slot:default="{ isTouched, isValid }">
          <FormField
            :placeholder="t('auth.username_placeholder')"
            :label="t('auth.username')"
            type="text"
            rules="required|min:3|max:15|only_lowercase"
            name="username"
            required
            :setValue="(username) => (credentials.username = username)"
          />
          <FormField
            :placeholder="t('auth.email_placeholder')"
            :label="t('auth.email_label')"
            type="email"
            rules="required|email"
            name="email"
            required
            :setValue="(email) => (credentials.email = email)"
          />
          <FormField
            :placeholder="t('auth.password_label')"
            :label="t('auth.password_label')"
            type="password"
            rules="required|min:8|max:15|only_lowercase"
            name="password"
            required
            :setValue="(password) => (credentials.password = password)"
          />
          <FormField
            :placeholder="t('auth.confirm_password')"
            :label="t('auth.confirm_password')"
            type="password"
            rules="required|confirmed:@password"
            name="confirmation"
            required
          />
          <SignUpButton class="h-[38px]" :disabled="isTouched && !isValid">{{
            t('auth.sign_up')
          }}</SignUpButton>
          <GoogleAuthButton :action="t('auth.google_sign_up')" />

          <p class="mt-4 text-center text-darkGray">
            {{ t('auth.already_have_account') }}
            <RouterLink to="/login" class="text-blue underline">Log in</RouterLink>
          </p>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
