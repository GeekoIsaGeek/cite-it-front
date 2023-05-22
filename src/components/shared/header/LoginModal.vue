<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import SignInButton from '@/components/UI/RedButton.vue'
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapper
        heading="Log in to your account"
        subHeading="Welcome back! Please enter your details."
      >
        <template v-slot:default="slotProps">
          <FormField
            placeholder="Enter your email"
            label="Email"
            type="email"
            rules="required|min:3"
            name="email"
          />
          <FormField
            placeholder="Password"
            label="Password"
            type="password"
            rules="required"
            name="password"
          />
          <SignInButton class="py-[7px]" :disabled="!slotProps.isValid">sdsda</SignInButton>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
