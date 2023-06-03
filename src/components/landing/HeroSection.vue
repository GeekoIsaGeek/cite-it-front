<script setup>
import Button from '@/components/UI/RedButton.vue'
</script>

<template>
  <section
    class="w-full flex flex-col justify-center items-center gap-8 md:gap-6 pt-32 xl:pt-64 xl:pb-56 pb-24"
  >
    <p
      class="text-offGold text-2xl font-bold md:text-5xl 2xl:text-6xl w-[70%] 2xl:w-[38%] text-center"
    >
      {{ $t('landing.hero_heading') }}
    </p>
    <Button class="px-[14px] py-2 md:px-4">{{ $t('landing.hero_button') }}</Button>
  </section>
</template>
