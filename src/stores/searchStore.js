import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const searchString = ref('')
  const searchedData = ref([])
  const typeOfSearchedData = ref(null)
  const showSearchBar = ref(false)

  const setSearchString = (givenSearchString) => {
    searchString.value = givenSearchString
  }
  const setSearchedData = (givenSearchedData) => {
    searchedData.value = givenSearchedData
  }

  const setTypeOfSearchedData = (searchString) => {
    if (searchString.startsWith('@')) {
      typeOfSearchedData.value = 'movie'
    } else if (searchString.startsWith('#')) {
      typeOfSearchedData.value = 'quote'
    } else {
      typeOfSearchedData.value = null
    }
  }
  const setShowSearchBar = (shouldShow) => {
    showSearchBar.value = shouldShow
  }
  return {
    searchString,
    searchedData,
    typeOfSearchedData,
    showSearchBar,
    setSearchString,
    setSearchedData,
    setTypeOfSearchedData,
    setShowSearchBar
  }
})
