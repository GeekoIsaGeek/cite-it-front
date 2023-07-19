<script setup>
import NewsFeedWrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TheImageUploader from '@/components/my-profile/TheImageUploader.vue'
import ProfileForm from '@/components/my-profile/MyProfileForm.vue'
import ButtonSave from '@/components/UI/RedButton.vue'
import TheGoBackIcon from '@/components/icons/TheGoBackIcon.vue'
import ProfileUpdated from '@/components/modals/Feedbacks/ProfileUpdated.vue'
import { useRouter } from 'vue-router'
import { ref, provide } from 'vue'
import { useUserStore } from '@/stores/userStore'
import request from '@/config/axiosInstance.js'
import { useI18n } from 'vue-i18n'
import { getServerErrorMessages } from '@/utils/getErrors.js'
import ServerErrors from '@/components/shared/ServerErrors.vue'
import { watch } from 'vue'

const router = useRouter()
const { locale } = useI18n()
const userStore = useUserStore()
const showSuccessMessage = ref(false)
const successMessage = ref('')
const serverErrors = ref([])
const canUpdate = ref(false)

provide('showSuccessMessage', showSuccessMessage)
watch(userStore.updatableCredentials, () => (canUpdate.value = true))

const handleCancel = () => {
  userStore.clearUpdatableCredentials()
  router.push({ name: 'news-feed' })
}
const handleSave = async () => {
  try {
    const formData = new FormData()
    const credentialsArray = Object.entries(userStore.updatableCredentials)
    if (credentialsArray.length < 1) return

    credentialsArray.forEach((credential) => {
      formData.append(credential[0], credential[1])
    })
    formData.append('id', userStore.user.id)
    formData.append('_method', 'patch')
    const response = await request.post('/api/update-profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data', 'Accept-Language': locale.value }
    })
    if (response.data.message === 'Verification email has been sent') {
      router.push({ name: 'email-confirmation' })
    } else if (response.status === 200) {
      console.log(response.data.message)
      successMessage.value = response.data.message
      showSuccessMessage.value = true
    }
    const currentUserData = userStore.user
    userStore.setUser({ ...currentUserData, ...response.data.user })
    userStore.clearUpdatableCredentials()
  } catch (error) {
    const errorMessages = getServerErrorMessages(error)
    serverErrors.value = errorMessages || []
    return errorMessages
  }
}

provide('handleUpdate', handleSave)
</script>

<template>
  <NewsFeedWrapper>
    <section class="flex flex-col md:items-start items-center overflow-x-hidden w-full md:w-[70%] lg:w-[54%]">
      <div class="block md:hidden pl-10 py-6 bg-veryDarkPurple w-full self-start">
        <TheGoBackIcon class="h-4 w-5 cursor-pointer" @click="router.back()" />
      </div>
      <h2 class="hidden md:block text-2xl self-start text-white font-medium ml-14">
        {{ $t('my_profile.my_profile') }}
      </h2>
      <div
        class="flex flex-col md:items-center md:pr-10 md:mt-36 md:bg-blackishPurple rounded-[12px] md:pb-32 w-full relative"
      >
        <TheImageUploader />
        <ProfileForm />
        <ServerErrors class="hidden md:block" :errors="serverErrors" />
      </div>
      <div class="hidden md:flex gap-6 mt-14 md:self-end" v-if="canUpdate">
        <button @click="handleCancel" class="hover:text-gray-400">
          {{ $t('my_profile.cancel') }}
        </button>
        <ButtonSave class="px-4" @click="handleSave">{{ $t('my_profile.save_changes') }}</ButtonSave>
      </div>
    </section>
    <ProfileUpdated
      v-if="showSuccessMessage"
      :message="successMessage"
      :modalCloser="() => (showSuccessMessage = false)"
    />
  </NewsFeedWrapper>
</template>
