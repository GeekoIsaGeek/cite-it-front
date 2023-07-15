import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const showMobileNavigation = ref(false)
  const showAddNewPostModal = ref(false)
  const showAddMovieModal = ref(false)

  const setShowMobileNavigation = (shouldShow) => {
    showMobileNavigation.value = shouldShow
  }

  const setShowAddNewPostModal = (shouldShow) => {
    showAddNewPostModal.value = shouldShow
  }

  const setShowAddMovieModal = (shouldShow) => {
    showAddMovieModal.value = shouldShow
  }

  return {
    showAddMovieModal,
    showAddNewPostModal,
    showMobileNavigation,
    setShowAddMovieModal,
    setShowAddNewPostModal,
    setShowMobileNavigation
  }
})
