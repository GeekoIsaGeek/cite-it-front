import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      showMobileNavigation: false,
      showAddNewPostModal: false,
      showAddMovieModal: false
    }
  },
  actions: {
    setShowMobileNavigation(shouldShow) {
      this.showMobileNavigation = shouldShow
    },
    setShowAddNewPostModal(shouldShow) {
      this.showAddNewPostModal = shouldShow
    },
    setShowAddMovieModal(shouldShow) {
      this.showAddMovieModal = shouldShow
    }
  }
})
