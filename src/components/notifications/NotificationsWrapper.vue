<script setup>
import NotificationCard from '@/components/notifications/NotificationCard.vue'
import TheTriangleIcon from '@/components/icons/TheTriangleIcon.vue'
import { useUserStore } from '@/stores/userStore.js'
import { echo } from '@/echo.js'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import request from '@/config/axiosInstance.js'
import useInfiniteScroll from '@/composables/useInfiniteScroll.js'
import ModalTransition from '@/components/shared/ModalTransition.vue'

const userStore = useUserStore()
const notificationsRef = ref(null)
const { fetchData, items: notifications } = useInfiniteScroll('notifications')

const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = notificationsRef.value
  if (scrollTop + clientHeight >= scrollHeight) {
    fetchData()
  }
}

onMounted(() => {
  fetchData()
  notificationsRef.value.addEventListener('scroll', handleScroll)
  document.body.style.overflow = 'hidden'

  echo.private(`notifications.${userStore.user.id}`).listen('QuoteNotificationEvent', (data) => {
    if (userStore.user.id === data.receiverId) {
      userStore.addNewNotification(data.notification)
      notifications.value = [...notifications.value, data.notification]
    }
  })
})
onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
  notificationsRef.value.removeEventListener('scroll', handleScroll)
})

const handleMarkAllAsRead = async () => {
  const response = await request.post('/api/notifications/mark-all-as-read')
  if (response.status === 200) {
    userStore.setNotifications(response.data)
    notifications.value = notifications.value.map((notification) => {
      return { ...notification, seen: 1 }
    })
  }
}
</script>

<template>
  <ModalTransition>
    <div
      class="modal-bg-gradient fixed z-50 lg:z-auto top-[86px] h-full left-0 w-full lg:min-h-max flex justify-center items-start"
    >
      <Transition
        appear
        enter-from-class="translate-x-[100%]"
        enter-active-class="transition-translate duration-300 ease-out"
      >
        <div
          class="notifications bg-black h-[90%] fixed overflow-y-scroll text-white right-0 md:right-[40px] xl:right-[70px] top-[86px] w-full md:w-[700px] lg:w-[960px] rounded-xl pb-13 pt-10 px-8"
          ref="notificationsRef"
        >
          <div class="flex items-center justify-between">
            <h1 class="text-xl lg:text-[32px]">{{ $t('notifications.notifications') }}</h1>
            <p
              class="cursor-pointer underline text-sm lg:text-base hover:text-gray-300 lg:mb-6"
              @click="handleMarkAllAsRead"
            >
              {{ $t('notifications.mark_as_all_read') }}
            </p>
          </div>
          <ul class="flex flex-col gap-4 mt-8 relative z-20" v-if="notifications.length > 0">
            <NotificationCard
              v-for="notification in notifications"
              :key="notification.id"
              :notification="notification"
            />
          </ul>
          <TheTriangleIcon
            class="fixed top-[70px] right-[150px] z-10 sm:right-[130px] md:right-[284px] lg:right-[315px]"
          />
        </div>
      </Transition>
    </div>
  </ModalTransition>
</template>
