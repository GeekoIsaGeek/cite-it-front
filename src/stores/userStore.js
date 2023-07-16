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
    updateUsername,
    clearUpdatableCredentials,
    updateProfilePicture
  }
})
