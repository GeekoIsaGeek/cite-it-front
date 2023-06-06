<script setup>
import AvatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
import { ref } from 'vue'

const avatar = ref(null)

const uploadImage = (event) => {
  const reader = new FileReader()
  reader.onload = (loadEvent) => {
    avatar.value = loadEvent.target.result
  }
  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0])
  }
}
</script>

<template>
  <div class="flex items-center flex-col gap-2">
    <div class="w-[8vw] h-[8vw] relative rounded-full mt-[-3vw] overflow-hidden">
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
