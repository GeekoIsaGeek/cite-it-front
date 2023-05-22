<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
import SignUpButton from '@/components/UI/RedButton.vue'
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapper heading="Create an account" subHeading="Start your journey!">
        <template v-slot:default="{ isTouched, isValid }">
          <FormField
            placeholder="At least 3 & max.15 lower case characters  "
            label="Name"
            type="text"
            rules="required|min:3|max:15|only_lowercase"
            name="username"
            required
          />
          <FormField
            placeholder="Enter your email"
            label="Email"
            type="email"
            rules="required|email"
            name="email"
            required
          />
          <FormField
            placeholder="Password"
            label="Password"
            type="password"
            rules="required|min:8|max:15|only_lowercase"
            name="password"
            required
          />
          <FormField
            placeholder="Confirm password"
            label="Confirm password"
            type="password"
            rules="required|confirmed:@password"
            name="confirmation"
            required
          />
          <SignUpButton class="h-[38px]" :disabled="isTouched && !isValid">Sign up</SignUpButton>
          <GoogleAuthButton action="Sign up" />

          <p class="mt-4 text-center text-darkGray">
            Already have an account?
            <button @click.prevent class="text-blue underline">Log in</button>
          </p>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
