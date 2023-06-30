import request from '@/config/axiosInstance'
import { useGeneralStore } from '@/stores/generalStore'

export default () => {
  const generalStore = useGeneralStore()
  return async (searchString) => {
    const response = await request.get(`/api/search/${encodeURIComponent(searchString)}`)
    if (response.status === 200) {
      generalStore.setSearchedData(response.data)
    }
  }
}
