<script setup>
import line from '@/assets/images/Line 17.png'
defineProps({
  quote: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="w-full h-[430px] lg:h-screen bg-center bg-fixed bg-cover">
    <div class="ml-20 lg:ml-60 relative">
      <img
        :src="line"
        class="w-4 lg:w-14 absolute left-[-24px] lg:left-[-70px] top-[12%] font-montserrat"
      />
      <h1
        class="text-white text-xl lg:text-[50px] lg:leading-[60px] lg:max-w-[50%] font-montserrat font-bold"
      >
        “{{ quote }}”
      </h1>
      <h4 class="text-[#d9d9d9] mt-4 text-base lg:text-3xl">{{ movie }}</h4>
    </div>
  </div>
</template>
