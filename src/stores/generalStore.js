import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => {
    return {
      showMobileNavigation: false,
      showAddNewPostModal: false,
      showSearchBar: false
    }
  },
  actions: {
    setShowMobileNavigation(shouldShow) {
      this.showMobileNavigation = shouldShow
    },
    setShowAddNewPostModal(shouldShow) {
      this.showAddNewPostModal = shouldShow
    },
    setShowSearchBar(shouldShow) {
      this.showSearchBar = shouldShow
    }
  }
})
