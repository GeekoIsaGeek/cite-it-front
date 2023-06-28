<script setup>
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import QuoteIcon from '@/components/icons/TheChatQuoteIcon.vue'
import RedHeartIcon from '@/components/icons/TheRedHeartIcon.vue'

defineProps({
  hasCommented: {
    type: Boolean,
    required: true
  },
  isNew: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div
    class="w-full border border-[#6C757D80] rounded cursor-pointer hover:bg-veryDarkPurple transition-colors ease-out"
  >
    <div class="flex lg:items-center justify-between flex-col lg:flex-row px-6 py-6 gap-6 w-full">
      <div class="flex items-center gap-3 lg:gap-6">
        <img
          :src="avatarPlaceholder"
          alt="user avatar"
          :class="`rounded-full w-14 h-14 lg:w-20 lg:h-20 ${isNew && 'border-2 border-[#198754]'}`"
        />
        <div class="flex flex-col gap-2">
          <p text-white>Nino Tabagari</p>
          <div class="flex items-center gap-3" v-if="hasCommented">
            <QuoteIcon class="w-6 h-[22px]" />
            <p class="text-lightGray">
              {{ $t('notifications.commented') }}
            </p>
          </div>
          <div class="flex items-center gap-3" v-else>
            <RedHeartIcon class="w-6 h-[22px]" />
            <p class="text-lightGray">
              {{ $t('notifications.reacted') }}
            </p>
          </div>
        </div>
      </div>
      <div
        :class="`flex flex-row-reverse gap-6 lg:flex-col self-start ml-3 lg:ml-0 lg:self-${
          isNew ? 'center' : 'start'
        }`"
      >
        <p>5 {{ $t('notifications.mins_ago') }}</p>
        <p class="text-[#198754]" v-if="isNew">{{ $t('notifications.new') }}</p>
      </div>
    </div>
    <div></div>
  </div>
</template>