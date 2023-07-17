import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { ref, watch } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const userStore = useUserStore()
  const notifications = ref(userStore.user.notifications || [])
  const newNotificationsCount = ref(notifications.value.filter((notification) => notification.seen === 0).length)

  const addNewNotification = (notification) => {
    notifications.value = [...notifications.value, notification]
  }

  watch(
    () => notifications.value,
    (updatedNotifications) =>
      (newNotificationsCount.value = updatedNotifications.filter((notification) => notification.seen === 0).length)
  )

  const saveUpdatedNotification = (notification) => {
    notifications.value = notifications.value.map((currentNotification) => {
      if (currentNotification.id === notification.id) {
        return notification
      }
      return currentNotification
    })
  }

  const resetNewNotificationsCount = () => {
    newNotificationsCount.value = 0
  }

  const setNotifications = (notifications) => {
    notifications.value = notifications
  }
  return {
    notifications,
    addNewNotification,
    saveUpdatedNotification,
    setNotifications,
    newNotificationsCount,
    resetNewNotificationsCount
  }
})
