<script setup>
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import EditPasswordModal from '@/components/shared/EditFieldWrapper.vue'
import PasswordGroup from '@/components/my-profile/MyProfileFormPasswordGroup.vue'

import { ref } from 'vue'
import { computed } from 'vue'
const showPasswordInput = ref(false)
const isSmallerDevice = computed(() => window.innerWidth < 640)
</script>

<template>
  <div class="md:max-w-[30vw] relative">
    <MyProfileFormFakeInput
      :label="$t('auth.password_label')"
      type="password"
      placeholder="••••••••••••"
    />
    <button
      class="text-lightGray absolute right-0 md:left-[calc(100%+30px)] top-7 md:top-9"
      @click.prevent="showPasswordInput = !showPasswordInput"
    >
      {{ $t('my_profile.edit') }}
    </button>
  </div>
  <PasswordGroup v-if="showPasswordInput" />

  <EditPasswordModal
    v-if="showPasswordInput && isSmallerDevice"
    :modalCloser="() => (showPasswordInput = false)"
  >
    <PasswordGroup
  /></EditPasswordModal>
</template>
