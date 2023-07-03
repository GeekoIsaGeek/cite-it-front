import request from '@/config/axiosInstance'
import { useSearchStore } from '@/stores/searchStore.js'
import { useQuoteStore } from '@/stores/quoteStore'

export default () => {
  const searchStore = useSearchStore()
  const quoteStore = useQuoteStore()

  return async (searchString) => {
    if (searchString === '') {
      return quoteStore.quotes
    }
    const response = await request.get(`/api/search/${encodeURIComponent(searchString)}`)
    if (response.status === 200) {
      searchStore.setSearchedData(response.data)
    }
    searchStore.setTypeOfSearchedData(searchString)
  }
}
