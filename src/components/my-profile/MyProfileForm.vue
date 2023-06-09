<script setup>
import { Form } from 'vee-validate'
import EmailGroup from '@/components/my-profile/MyProfileFormEmail.vue'
import UsernameGroup from '@/components/my-profile/MyProfileFormUsername.vue'
import PasswordGroup from '@/components/my-profile/MyProfileFormPassword.vue'
</script>

<template>
  <Form class="flex flex-col items-center gap-5 text-[#212529] lg:w-3/5 md:w-4/5 px-8 mt-10">
    <UsernameGroup />
    <EmailGroup />
    <PasswordGroup />
  </Form>
</template>
