import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const updatableCredentials = ref({})
  const isLoggedIn = ref(false)

  const setUser = (userData) => {
    user.value = userData
  }
  const updateEmail = (email) => {
    updatableCredentials.value.email = email
  }
  const updateUsername = (username) => {
    updatableCredentials.value.username = username
  }
  const updatePassword = (password, confirmation) => {
    updatableCredentials.value.password = password
    updatableCredentials.value.password_confirmation = confirmation
  }
  const updateProfilePicture = (image) => {
    updatableCredentials.value.profile_picture = image
  }
  const clearUser = () => {
    user.value = {}
    isLoggedIn.value = false
  }
  const clearUpdatableCredentials = () => {
    updatableCredentials.value = {}
  }
  const addNewNotification = (notification) => {
    user.value.notifications = [...user.value.notifications, notification]
  }
  const saveUpdatedNotification = (notification) => {
    const filteredNotifications = user.value.notifications.filter(
      (currentNotification) => currentNotification.id !== notification.id
    )
    user.value.notifications = [...filteredNotifications, notification]
  }
  const setNotifications = (notifications) => {
    user.value.notifications = notifications
  }
  const fetchUser = async () => {
    try {
      await request.get('/sanctum/csrf-cookie')
      const { data } = await request.get('/api/user')
      user.value = data
      isLoggedIn.value = true
    } catch (error) {
      clearUser()
    }
  }

  return {
    user,
    isLoggedIn,
    setUser,
    fetchUser,
    clearUser,
    updatableCredentials,
    updateEmail,
    updatePassword,
    setNotifications,
    saveUpdatedNotification,
    updateUsername,
    clearUpdatableCredentials,
    addNewNotification,
    updateProfilePicture
  }
})
