<script setup>
import { Form } from 'vee-validate'
import EmailField from '@/components/my-profile/MyProfileFormEmail.vue'
import UsernameField from '@/components/my-profile/MyProfileFormUsername.vue'
import PasswordField from '@/components/my-profile/MyProfileFormPassword.vue'
import { useUserStore } from '@/stores/userStore.js'

const userStore = useUserStore()
</script>

<template>
  <Form class="flex flex-col items-center gap-5 text-[#212529] lg:w-3/5 md:w-4/5 px-8 mt-10">
    <UsernameField />
    <EmailField />
    <PasswordField v-if="!userStore.user.google_id" />
  </Form>
</template>
