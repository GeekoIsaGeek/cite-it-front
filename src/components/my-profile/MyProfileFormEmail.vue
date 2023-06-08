<script setup>
import BaseInput from '@/components/UI/BaseInput.vue'
import MyProfileFormFakeInput from '@/components/my-profile/MyProfileFormFakeInput.vue'
import EditEmailModal from '@/components/shared/EditFieldWrapper.vue'
import { ref } from 'vue'
import { computed } from 'vue'

const showEmailInput = ref(false)
const isSmallerDevice = computed(() => window.innerWidth < 640)
</script>

<template>
  <div class="w-full relative">
    <MyProfileFormFakeInput
      :label="$t('auth.email_label')"
      type="email"
      placeholder="John.joley@gmail.com"
    />
    <button
      class="text-lightGray absolute right-0 md:left-[calc(100%+30px)] top-7 md:top-9"
      @click.prevent="showEmailInput = !showEmailInput"
    >
      {{ $t('my_profile.edit') }}
    </button>
  </div>

  <div class="w-full hidden md:block">
    <BaseInput
      name="email"
      :label="$t('auth.email_label')"
      :placeholder="$t('auth.email_placeholder')"
      type="email"
      rules="required|email"
      v-if="showEmailInput"
    />
  </div>

  <EditEmailModal
    v-if="showEmailInput && isSmallerDevice"
    :modalCloser="() => (showEmailInput = false)"
  >
    <BaseInput
      name="email"
      :label="$t('auth.email_label')"
      :placeholder="$t('auth.email_placeholder')"
      type="email"
      rules="required|email"
    />
  </EditEmailModal>
</template>
