<script setup>
import NotificationCard from '@/components/notifications/NotificationCard.vue'
import TheTriangleIcon from '@/components/icons/TheTriangleIcon.vue'
</script>

<template>
  <div
    class="bg-black min-h-max fixed text-white right-0 md:right-[40px] xl:right-[70px] top-[86px] w-full md:w-[700px] lg:w-[960px] rounded-xl pb-13 pt-10 px-8"
  >
    <div class="flex items-center justify-between">
      <h1 class="text-xl lg:text-[32px]">{{ $t('notifications.notifications') }}</h1>
      <p class="cursor-pointer underline text-sm lg:text-base hover:text-gray-300 lg:mb-6">
        {{ $t('notifications.mark_as_all_read') }}
      </p>
    </div>
    <ul class="flex flex-col gap-4 mt-8">
      <NotificationCard hasCommented :isNew="false" />
      <NotificationCard :hasCommented="false" isNew />
    </ul>
    <TheTriangleIcon
      class="absolute right-[150px] top-[-15px] sm:right-[26%] md:right-[35%] lg:right-[25.5%]"
    />
  </div>
</template>
