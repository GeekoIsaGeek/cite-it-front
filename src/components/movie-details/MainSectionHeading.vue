<script setup>
import TrashIcon from '@/components/icons/TheTrashIcon.vue'
import PencilIcon from '@/components/icons/TheEditIcon.vue'
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <h2 class="text-[#DDCCAA] font-bold text-2xl">COMMITMENT HASAN (1999)</h2>
    <div class="bg-[#24222F] flex min-w-max items-center py-[10px] gap-7 rounded-[10px] px-7">
      <PencilIcon class="cursor-pointer" />
      <div class="h-[24px] w-[1px] bg-darkGray"></div>
      <TrashIcon class="cursor-pointer" />
    </div>
  </div>
</template>
