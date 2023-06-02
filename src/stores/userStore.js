import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {},
      isLoggedIn: false
    }
  },

  actions: {
    setUser(userData) {
      this.user = userData
    },
    clearUser() {
      this.user = {}
      this.isLoggedIn = false
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
