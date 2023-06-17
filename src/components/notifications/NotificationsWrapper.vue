<script setup>
import NotificationCard from '@/components/notifications/NotificationCard.vue'
import TheTriangleIcon from '@/components/icons/TheTriangleIcon.vue'
</script>

<template>
  <div
    class="bg-black min-h-max fixed text-white right-4 md:right-[40px] xl:right-[70px] top-[90px] w-[500px] md:w-[700px] lg:w-[960px] rounded-xl pb-13 pt-10 px-8"
  >
    <div class="flex items-center justify-between">
      <h1 class="text-[32px]">{{ $t('notifications.notifications') }}</h1>
      <p class="cursor-pointer hover:text-gray-300 mb-6">
        {{ $t('notifications.mark_as_all_read') }}
      </p>
    </div>
    <ul class="flex flex-col gap-4 mt-8">
      <NotificationCard hasCommented :isNew="false" />
      <NotificationCard :hasCommented="false" isNew />
    </ul>
    <TheTriangleIcon class="absolute top-[-20px] right-[26%] md:right-[35%] lg:right-[25.5%]" />
  </div>
</template>
