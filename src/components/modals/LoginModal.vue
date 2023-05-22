<script setup>
import FormWrapper from '@/components/shared/FormWrapper.vue'
import ModalWrapper from '@/components/shared/ModalWrapper.vue'
import FormField from '@/components/shared/FormField.vue'
import SignInButton from '@/components/UI/RedButton.vue'
import GoogleAuthButton from '@/components/UI/GoogleAuthButton.vue'
</script>

<template>
  <Teleport to="body">
    <ModalWrapper>
      <FormWrapper
        heading="Log in to your account"
        subHeading="Welcome back! Please enter your details."
      >
        <template v-slot:default="{ isTouched, isValid }">
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
          <div class="flex justify-between">
            <!-- Checkbox -->
            <div class="flex gap-2 items-center">
              <input type="checkbox" value="" name="remember" class="h-4 w-4" />
              <label for="remember" class="text-white">Remember me</label>
            </div>
            <!-- Checkbox -->
            <button @click.prevent class="text-blue underline">Forgot password</button>
          </div>
          <SignInButton class="h-[38px]" :disabled="isTouched && !isValid">Sign in</SignInButton>
          <GoogleAuthButton action="Sign in" />

          <p class="mt-4 text-center text-darkGray">
            Don't have an account?
            <button @click.prevent class="text-blue underline">Sign up</button>
          </p>
        </template>
      </FormWrapper>
    </ModalWrapper>
  </Teleport>
</template>
