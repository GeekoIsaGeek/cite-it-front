<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import EditUsernameModal from '@/components/shared/EditFieldWrapper.vue'

import { ref } from 'vue'
import { computed } from 'vue'
const showUsernameInput = ref(false)
const isSmallerDevice = computed(() => window.innerWidth < 640)
</script>

<template>
  <div class="w-full relative">
    <MyProfileFormFakeInput
      :label="$t('my_profile.username')"
      type="text"
      placeholder="Nino Tabagari"
    />
    <button
      class="text-lightGray absolute right-0 md:left-[calc(100%+30px)] top-7 md:top-9"
      @click.prevent="showUsernameInput = !showUsernameInput"
    >
      {{ $t('my_profile.edit') }}
    </button>
  </div>

  <div class="w-full hidden md:block">
    <BaseInput
      name="username"
      :label="$t('my_profile.username')"
      :placeholder="$t('my_profile.username')"
      type="text"
      rules="required|min:3|only_lowercase"
      v-if="showUsernameInput"
    />
  </div>

  <EditUsernameModal
    v-if="showUsernameInput && isSmallerDevice"
    :modalCloser="() => (showUsernameInput = false)"
  >
    <BaseInput
      name="username"
      :label="$t('my_profile.username')"
      :placeholder="$t('my_profile.username')"
      type="text"
      rules="required|min:3|only_lowercase"
    />
  </EditUsernameModal>
</template>
