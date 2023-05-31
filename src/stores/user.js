import { defineStore } from 'pinia'
import request from '@/config/axiosInstance'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {}
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.user && Object.keys(state.user).length > 0
  },
  actions: {
    setUser(userData) {
      this.user = userData
    },
    clearUser() {
      this.user = {}
    },
    async fetchUser() {
      try {
        await request.get('/sanctum/csrf-cookie')
        const { data } = await request.get('/api/user')
        this.setUser(data)
      } catch (e) {
        console.log(e)
        this.clearUser()
      }
    }
  }
})
