<script setup>
import { Form } from 'vee-validate'
import EmailGroup from '@/components/my-profile/MyProfileFormEmail.vue'
import UsernameGroup from '@/components/my-profile/MyProfileFormUsername.vue'
import PasswordGroup from '@/components/my-profile/MyProfileFormPassword.vue'
</script>

<template>
  <Form class="flex flex-col gap-5 text-[#212529] w-full px-8 mt-10">
    <UsernameGroup />
    <EmailGroup />
    <PasswordGroup />
  </Form>
</template>
