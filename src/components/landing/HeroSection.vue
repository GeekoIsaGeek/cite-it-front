<script setup>
import Button from '@/components/UI/RedButton.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section class="w-full flex flex-col justify-center items-center gap-8 md:gap-6 pt-32 xl:h-[75vh] pb-24">
    <p class="text-offGold text-2xl font-bold md:text-5xl 2xl:text-6xl w-[70%] 2xl:w-[38%] text-center">
      {{ $t('landing.hero_heading') }}
    </p>
    <Button @click="() => router.push({ name: 'register' })" class="px-[14px] py-2 md:px-4">{{
      $t('landing.hero_button')
    }}</Button>
  </section>
</template>
