<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import SignInButton from '@/components/UI/RedButton.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapper :heading="t('auth.login_heading')" :subHeading="`${t('auth.login_heading')}.`">
        <template v-slot:default="{ isTouched, isValid }">
          <FormField
            :placeholder="t('auth.email_placeholder')"
            :label="t('auth.email_label')"
            type="email"
            rules="required|min:3"
            name="email"
          />
          <FormField
            :placeholder="t('auth.password_placeholder')"
            :label="t('auth.password_label')"
            type="password"
            rules="required"
            name="password"
          />
          <div class="flex justify-between">
            <!-- Checkbox -->
            <div class="flex gap-2 items-center">
              <input type="checkbox" value="" name="remember" class="h-4 w-4" />
              <label for="remember" class="text-white">{{ t('auth.remember') }}</label>
            </div>
            <!-- Checkbox -->
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
            <button @click.prevent class="text-blue underline">{{ t('auth.sign_up') }}</button>
          </p>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
