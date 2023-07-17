import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const userStore = useUserStore()
  const notifications = ref(userStore.user.notifications || [])
  const newNotifications = ref(notifications.value.filter((notification) => notification.seen === 0).length)

  const addNewNotification = (notification) => {
    notifications.value = [...notifications.value, notification]
    newNotifications.value = newNotifications.value + 1
  }
  const saveUpdatedNotification = (notification) => {
    const filteredNotifications = notifications.value.filter(
      (currentNotification) => currentNotification.id !== notification.id
    )
    notifications.value = [...filteredNotifications, notification]
  }
  const clearNewNotifications = () => {
    newNotifications.value = 0
  }
  const setNotifications = (notifications) => {
    notifications.value = notifications
  }
  return {
    notifications,
    addNewNotification,
    saveUpdatedNotification,
    setNotifications,
    newNotifications,
    clearNewNotifications
  }
})
