import { ref } from 'vue'
import request from '@/config/axiosInstance'

export default (endpoint) => {
  const items = ref([])
  const page = ref(1)
  const isLoading = ref(false)

  const fetchData = async () => {
    isLoading.value = true
    const response = await request.get(`/api/${endpoint}?page=${page.value}`)
    items.value = [...items.value, ...response.data.data]
    page.value++
    isLoading.value = false
  }

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight && !isLoading.value) {
      fetchData()
    }
  }

  return {
    fetchData,
    handleScroll,
    items
  }
}
