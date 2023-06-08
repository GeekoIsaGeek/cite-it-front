<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import { ref } from 'vue'
const newPassword = ref(null)
const confirmPassword = ref(null)
</script>

<template>
  <div class="flex flex-col w-full gap-10">
    <div class="my-4 py-6 px-6 border border-[#CED4DA33] rounded-[4px] text-white">
      <p class="text-white mb-4">{{ $t('my_profile.should_contain') }}:</p>
      <p class="text-[14px] mb-1"><span>・</span> {{ $t('my_profile.min_chars') }}</p>
      <p class="text-[14px]"><span>・</span> {{ $t('my_profile.max_chars') }}</p>
    </div>

    <div>
      <BaseInput
        name="new_password"
        :label="$t('my_profile.new_password')"
        :placeholder="$t('my_profile.new_password')"
        type="password"
        rules="required|min:8|max:15|only_lowercase"
        :setValue="(password) => (newPassword = password)"
      />
    </div>
    <div>
      <BaseInput
        name="confirmation"
        :label="$t('auth.confirm_password')"
        :placeholder="$t('auth.confirm_password')"
        type="password"
        rules="required|confirmed:@new_password"
        :setValue="(password) => (confirmPassword = password)"
      />
    </div>
  </div>
</template>
