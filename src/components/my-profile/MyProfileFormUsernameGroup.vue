<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import { ref } from 'vue'
const showUsernameInput = ref(false)
</script>

<template>
  <div class="w-[30vw] relative">
    <MyProfileFormFakeInput
      :label="$t('my_profile.username')"
      type="text"
      placeholder="Nino Tabagari"
    />
    <button
      class="text-lightGray absolute left-[calc(100%+30px)] top-9"
      @click.prevent="showUsernameInput = !showUsernameInput"
    >
      {{ $t('my_profile.edit') }}
    </button>
  </div>
  <div class="max-w-[30vw]">
    <BaseInput
      name="username"
      :label="$t('my_profile.username')"
      :placeholder="'Enter your username'"
      type="text"
      rules="required|min:3|only_lowercase"
      v-if="showUsernameInput"
    />
  </div>
</template>
