<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import { ref } from 'vue'
const showEmailInput = ref(false)
</script>

<template>
  <div class="w-[30vw] relative">
    <MyProfileFormFakeInput
      :label="$t('auth.email_label')"
      type="email"
      placeholder="John.joley@gmail.com"
    />
    <button
      class="text-lightGray absolute left-[calc(100%+30px)] top-9"
      @click.prevent="showEmailInput = !showEmailInput"
    >
      {{ $t('my_profile.edit') }}
    </button>
  </div>

  <div class="max-w-[30vw]">
    <BaseInput
      name="email"
      :label="$t('auth.email_label')"
      :placeholder="'username'"
      type="email"
      rules="required|email"
      v-if="showEmailInput"
    />
  </div>
</template>
