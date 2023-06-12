<script setup>
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import EditPasswordModal from '@/components/shared/EditFieldWrapper.vue'
import PasswordGroup from '@/components/my-profile/MyProfileFormPasswordGroup.vue'

import { ref, computed, inject } from 'vue'
const isSmallerDevice = computed(() => window.innerWidth < 640)
const showPasswordInput = ref(false)
const serverErrors = ref([])

const updateHandler = inject('handleUpdate')
const handleUpdate = async () => {
  serverErrors.value = []
  const errors = await updateHandler()
  if (errors) serverErrors.value = errors
}
</script>

<template>
  <div class="w-full relative">
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
  <PasswordGroup v-if="showPasswordInput" class="hidden md:block" />

  <EditPasswordModal
    v-if="showPasswordInput && isSmallerDevice"
    :modalCloser="() => (showPasswordInput = false)"
    :handleUpdate="handleUpdate"
    :errors="serverErrors"
  >
    <PasswordGroup
  /></EditPasswordModal>
</template>
