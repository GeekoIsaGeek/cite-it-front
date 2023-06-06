<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import { ref } from 'vue'
const showPasswordInput = ref(false)
const newPassword = ref(null)
const confirmPassword = ref(null)
</script>

<template>
  <div class="max-w-[30vw] relative">
    <MyProfileFormFakeInput
      :label="$t('auth.password_label')"
      type="password"
      placeholder="••••••••••••"
    />
    <button
      class="text-lightGray absolute left-[calc(100%+30px)] top-9"
      @click.prevent="showPasswordInput = !showPasswordInput"
    >
      {{ $t('my_profile.edit') }}
    </button>
  </div>

  <div
    class="my-4 py-6 px-6 border border-[#CED4DA33] rounded-[4px] text-white"
    v-if="showPasswordInput"
  >
    <p class="text-white mb-4">{{ $t('my_profile.should_contain') }}:</p>
    <p class="text-[14px] mb-1"><span>・</span> {{ $t('my_profile.min_chars') }}</p>
    <p class="text-[14px]"><span>・</span> {{ $t('my_profile.max_chars') }}</p>
  </div>

  <div class="max-w-[30vw]">
    <BaseInput
      name="new_password"
      :label="$t('auth.password_label')"
      placeholder="Enter new password"
      type="password"
      rules="required|min:8|max:15|only_lowercase"
      v-if="showPasswordInput"
      :setValue="(password) => (newPassword = password)"
    />
  </div>
  <div class="max-w-[30vw]">
    <BaseInput
      name="confirmation"
      :label="$t('auth.password_label')"
      :placeholder="$t('auth.confirm_password')"
      type="password"
      rules="required|confirmed:@new_password"
      v-if="showPasswordInput"
      :setValue="(password) => (confirmPassword = password)"
    />
  </div>
</template>
