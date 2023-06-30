import request from '@/config/axiosInstance'
import { useGeneralStore } from '@/stores/generalStore'
import { useQuoteStore } from '@/stores/quoteStore'

export default () => {
  const generalStore = useGeneralStore()
  const quoteStore = useQuoteStore()

  return async (searchString) => {
    if (searchString === '') {
      return quoteStore.quotes
    }
    const response = await request.get(`/api/search/${encodeURIComponent(searchString)}`)
    if (response.status === 200) {
      generalStore.setSearchedData(response.data)
    }
    generalStore.setTypeOfSearchedData(searchString)
  }
}
