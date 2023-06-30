import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => {
    return {
      showMobileNavigation: false,
      showAddNewPostModal: false,
      showSearchBar: false,
      showAddMovieModal: false,
      searchString: null,
      searchedData: [],
      typeOfSearchedData: null
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
    },
    setTypeOfSearchedData(searchString) {
      if (searchString.startsWith('@')) {
        this.typeOfSearchedData = 'movie'
      } else if (searchString.startsWith('#')) {
        this.typeOfSearchedData = 'quote'
      } else {
        this.typeOfSearchedData = null
      }
    }
  }
})
