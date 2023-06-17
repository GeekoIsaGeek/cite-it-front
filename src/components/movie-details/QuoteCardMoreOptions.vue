<script setup>
import TheEyeIcon from '@/components/icons/TheEyeIcon.vue'
import TheEditIcon from '@/components/icons/TheEditIcon.vue'
import TheThrashIcon from '@/components/icons/TheTrashIcon.vue'
</script>

<template>
  <div class="bg-[#24222F] rounded-[10px] px-10 py-8 flex flex-col gap-8 max-w-max min-w-max">
    <div class="flex items-center gap-5">
      <TheEyeIcon />
      <button class="hover:text-gray-400" @click="() => true">
        {{ $t('movie_details.view_quote') }}
      </button>
    </div>
    <div class="flex items-center gap-5">
      <TheEditIcon />
      <button class="hover:text-gray-400">{{ $t('movie_details.edit') }}</button>
    </div>
    <div class="flex items-center gap-5">
      <TheThrashIcon />
      <button class="hover:text-gray-400">{{ $t('movie_details.delete') }}</button>
    </div>
  </div>
</template>
