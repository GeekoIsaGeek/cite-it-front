import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => {
    return {
      showMobileNavigation: false,
      showAddNewPostModal: false,
      showSearchBar: false,
      showAddMovieModal: false,
      searchString: null,
      searchedData: []
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
    },
    setShowAddMovieModal(shouldShow) {
      this.showAddMovieModal = shouldShow
    },
    setSearchString(searchString) {
      this.searchString = searchString
    },
    setSearchedData(searchedData) {
      this.searchedData = searchedData
    }
  }
})
