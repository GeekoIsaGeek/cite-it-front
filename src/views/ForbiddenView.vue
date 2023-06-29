<script setup>
import Gandolf from '@/assets/images/Gandolf.png'
import ReturnButton from '@/components/UI/RedButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="bg-[#181623] w-full h-screen flex flex-col text-white justify-center items-center">
    <img :src="Gandolf" alt="gandolf" />
    <h1 class="text-2xl lg:text-5xl mt-7 mb-2">{{ $t('routing.you_shall_not_pass') }}</h1>
    <p class="lg:text-2xl">{{ $t('routing.forbidden_text') }}</p>
    <ReturnButton
      class="px-[10px] mt-12"
      @click="
        () =>
          router.push({
            name: 'home'
          })
      "
      >{{ $t('routing.return_home') }}</ReturnButton
    >
  </div>
</template>
