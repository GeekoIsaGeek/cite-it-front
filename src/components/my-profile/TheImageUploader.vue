<script setup>
import AvatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { useUserStore } from '@/stores/userStore'
import useGetAvatar from '@/composables/useGetAvatar'
import { ref } from 'vue'

const userStore = useUserStore()
const avatar = ref(useGetAvatar())

const uploadImage = (event) => {
  const image = event.target.files[0]
  const reader = new FileReader()
  reader.onload = (loadEvent) => {
    avatar.value = loadEvent.target.result
  }
  if (image) {
    userStore.updateProfilePicture(image)
    reader.readAsDataURL(image)
  }
}
</script>

<template>
  <div class="flex items-center flex-col gap-2 pt-6 md:pt-[unset] md:mb-[unset] mb-14">
    <div
      class="md:w-[15vw] md:h-[15vw] w-44 h-44 xl:w-[8vw] xl:h-[8vw] relative rounded-full md:mt-[-3vw] overflow-hidden"
    >
      <input
        type="file"
        accept="image/jpg, image/png, image/webp"
        class="absolute scale-[2000%] top-1/3 opacity-0 cursor-pointer"
        @change="uploadImage"
      />
      <img
        :src="avatar || AvatarPlaceholder"
        alt="avatar"
        class="rounded-full w-full h-full object-fit"
      />
    </div>
    <h3 class="text-xl">{{ $t('my_profile.upload_photo') }}</h3>
  </div>
</template>
