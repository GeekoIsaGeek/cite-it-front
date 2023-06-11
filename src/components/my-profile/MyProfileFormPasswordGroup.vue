<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const newPassword = ref(null)

const handlePasswordUpdate = (passwordConfirm) => {
  if (passwordConfirm === newPassword.value) {
    userStore.updatePassword(newPassword.value, passwordConfirm)
  }
}
</script>

<template>
  <div class="flex flex-col w-full gap-5">
    <div
      class="hidden md:block my-4 py-6 mb-8 px-6 border border-[#CED4DA33] rounded-[4px] text-white"
    >
      <p class="text-white mb-4">{{ $t('my_profile.should_contain') }}:</p>
      <p class="text-[14px] mb-1"><span>・</span> {{ $t('my_profile.min_chars') }}</p>
      <p class="text-[14px]"><span>・</span> {{ $t('my_profile.max_chars') }}</p>
    </div>

    <div class="md:mb-5">
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
        :setValue="(passwordConfirm) => handlePasswordUpdate(passwordConfirm)"
      />
    </div>
  </div>
</template>
