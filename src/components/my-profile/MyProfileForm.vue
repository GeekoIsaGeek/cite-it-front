<script setup>
import { Form } from 'vee-validate'
import EmailGroup from '@/components/my-profile/MyProfileFormEmailGroup.vue'
import UsernameGroup from '@/components/my-profile/MyProfileFormUsernameGroup.vue'
import PasswordGroup from '@/components/my-profile/MyProfileFormPasswordGroup.vue'
</script>

<template>
  <Form class="flex flex-col gap-5 text-[#212529] mt-10">
    <UsernameGroup />
    <EmailGroup />
    <PasswordGroup />
  </Form>
</template>
