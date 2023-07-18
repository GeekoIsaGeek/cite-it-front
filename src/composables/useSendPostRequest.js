import request from '@/config/axiosInstance.js'
import { getServerErrorMessages } from '@/utils/getErrors'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default () => {
  const { t, locale } = useI18n()
  const responseData = ref([])
  const errors = ref(null)
  const status = ref(null)
  const sendRequest = async (formData, endpoint, isFormValid = true) => {
    try {
      if (isFormValid) {
        const response = await request.post(`/api/${endpoint}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept-Language': locale.value
          }
        })
        responseData.value = response.data
        status.value = response.status
      } else {
        throw new Error(t('messages.invalid_form'))
      }
    } catch (error) {
      errors.value = getServerErrorMessages(error) || error.message
    }
    return { data: responseData.value, errors: errors.value, status: status.value }
  }
  return sendRequest
}
