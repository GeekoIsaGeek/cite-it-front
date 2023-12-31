<script setup>
import avatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import QuoteIcon from '@/components/icons/TheChatQuoteIcon.vue'
import RedHeartIcon from '@/components/icons/TheRedHeartIcon.vue'
import useGetImagePath from '@/composables/useGetImagePath.js'
import { capitalize } from 'vue'
import { computed } from 'vue'
import timeAgo from '@/utils/timeAgo'
import { useI18n } from 'vue-i18n'
import request from '@/config/axiosInstance.js'
import { useNotificationStore } from '@/stores/notificationStore'
import { inject } from 'vue'

const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
})
const { locale } = useI18n()
const avatar = useGetImagePath(props.notification.author_avatar)
const author = computed(() => capitalize(props.notification.author))
const isNew = computed(() => props.notification.seen === 0)
const creationTime = computed(() => timeAgo(props.notification.created_at, locale.value))
const notificationStore = useNotificationStore()
const showNotifications = inject('showNotifications')

const handleClickOnNotification = async () => {
  if (props.notification.seen === 0) {
    const response = await request.post(`/api/${props.notification.id}/mark-as-read`)
    if (response.status === 200) {
      notificationStore.saveUpdatedNotification(response.data)
      showNotifications.value = false
    }
  }
}
</script>

<template>
  <div
    class="w-full border border-[#6C757D80] rounded cursor-pointer hover:bg-veryDarkPurple transition-colors ease-out"
    @click="handleClickOnNotification"
  >
    <div class="flex lg:items-center justify-between flex-col lg:flex-row px-6 py-6 gap-6 w-full">
      <div class="flex items-center gap-3 lg:gap-6">
        <img
          :src="avatar || avatarPlaceholder"
          alt="user avatar"
          :class="`rounded-full w-14 h-14 lg:w-20 lg:h-20 ${isNew && 'border-2 border-[#198754]'}`"
        />
        <div class="flex flex-col gap-2">
          <p text-white>{{ author }}</p>
          <div class="flex items-center gap-3" v-if="notification.action === 'comment'">
            <QuoteIcon class="w-6 h-[22px]" />
            <p class="text-lightGray">
              {{ $t('notifications.commented') }}
            </p>
          </div>
          <div class="flex items-center gap-3" v-if="notification.action === 'like'">
            <RedHeartIcon class="w-6 h-[22px]" />
            <p class="text-lightGray">
              {{ $t('notifications.reacted') }}
            </p>
          </div>
        </div>
      </div>
      <div
        :class="`flex flex-row-reverse gap-6 lg:flex-col self-start ml-3 lg:ml-0 lg:self-${isNew ? 'center' : 'start'}`"
      >
        <p>{{ creationTime }}</p>
        <p class="text-[#198754] self-end" v-if="isNew">{{ $t('notifications.new') }}</p>
      </div>
    </div>
    <div></div>
  </div>
</template>
