<script setup>
import TheGoBackIcon from '@/components/icons/TheGoBackIcon.vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/shared/header/AppHeader.vue'
import ButtonEdit from '@/components/UI/RedButton.vue'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => (document.body.style.overflow = 'hidden'))
onBeforeUnmount(() => (document.body.style.overflow = 'auto'))

const props = defineProps({
  modalCloser: {
    type: Function,
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
  <div class="block md:hidden fixed top-0 left-0 z-50 bg-veryDarkPurple min-h-screen w-full">
    <AppHeader :showNotifications="true" class="bg-[#24222F]" />
    <div class="block md:hidden pl-10 py-6 bg-veryDarkPurple w-full self-start">
      <TheGoBackIcon class="h-4 w-5 cursor-pointer" @click="handleCancelation" />
    </div>
    <div class="bg-[#24222F] py-20 px-8">
      <slot />
    </div>
    <div class="flex justify-between gap-6 mt-14 px-10">
      <button @click="handleCancelation" class="text-white">{{ $t('my_profile.cancel') }}</button>
      <ButtonEdit class="px-4">{{ $t('my_profile.edit') }}</ButtonEdit>
    </div>
  </div>
</template>
