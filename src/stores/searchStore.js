import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      searchString: null,
      searchedData: [],
      typeOfSearchedData: null,
      showSearchBar: false
    }
  },
  actions: {
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
    },
    setShowSearchBar(shouldShow) {
      this.showSearchBar = shouldShow
    }
  }
})
