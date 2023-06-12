import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {},
      updatableCredentials: {},
      isLoggedIn: false
    }
  },
  actions: {
    setUser(userData) {
      this.user = userData
    },
    updateEmail(email) {
      this.updatableCredentials.email = email
    },
    updateUsername(username) {
      this.updatableCredentials.username = username
    },
    updatePassword(password, confirmation) {
      this.updatableCredentials.password = password
      this.updatableCredentials.password_confirmation = confirmation
    },
    updateProfilePicture(image) {
      this.updatableCredentials.profile_picture = image
    },
    clearUser() {
      this.user = {}
      this.isLoggedIn = false
    },
    clearUpdatableCredentials() {
      this.updatableCredentials = {}
    },
    async fetchUser() {
      try {
        await request.get('/sanctum/csrf-cookie')
        const { data } = await request.get('/api/user')
        this.user = data
        this.isLoggedIn = true
      } catch (error) {
        this.clearUser()
      }
    }
  }
})
