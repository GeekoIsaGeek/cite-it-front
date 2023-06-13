<script setup>
import TheGoBackIcon from '@/components/icons/TheGoBackIcon.vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/shared/header/AppHeader.vue'
import ButtonEdit from '@/components/UI/RedButton.vue'
import ConfirmMakingChanges from '@/components/modals/ConfirmMakingChanges.vue'
import ServerErrors from '@/components/shared/ServerErrors.vue'
import { ref } from 'vue'

const showConfirmModal = ref(false)

const props = defineProps({
  modalCloser: {
    type: Function,
    required: true
  },
  handleUpdate: {
    type: Function,
    required: false
  },
  errors: {
    type: Array,
    required: true
  }
})

const router = useRouter()
const handleCancelation = () => {
  router.push({ name: 'my-profile' })
  props.modalCloser()
}
</script>

<template>
  <Teleport to="body">
    <div class="block md:hidden fixed top-0 left-0 z-40 bg-veryDarkPurple min-h-screen w-full">
      <AppHeader :showNotifications="true" class="header" />
      <div class="block md:hidden mt-[86px] pl-10 py-6 bg-veryDarkPurple w-full self-start">
        <TheGoBackIcon class="h-4 w-5 cursor-pointer" @click="handleCancelation" />
      </div>
      <div class="bg-[#24222F] py-20 px-8">
        <slot />
        <ServerErrors :errors="errors" />
      </div>
      <div class="flex justify-between gap-6 mt-14 px-10 pb-10">
        <button @click="handleCancelation" class="text-white hover:text-gray-400">
          {{ $t('my_profile.cancel') }}
        </button>
        <ButtonEdit @click="() => (showConfirmModal = true)" class="px-4">{{
          $t('my_profile.edit')
        }}</ButtonEdit>
      </div>
      <ConfirmMakingChanges
        v-if="showConfirmModal"
        :modalCloser="() => (showConfirmModal = false)"
        :handleUpdate="handleUpdate"
      />
    </div>
  </Teleport>
</template>

<style scoped>
.header {
  background-color: #24222f;
}
</style>
