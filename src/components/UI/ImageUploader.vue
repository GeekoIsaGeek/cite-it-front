<script setup>
import CameraIcon from '@/components/icons/ThePhotoCameraIcon.vue'
import { computed, ref } from 'vue'

const uploadedImage = ref(null)
const isDesktopDevice = computed(() => window.innerWidth > 960)

const dragoverHandler = (e) => {
  e.preventDefault()
}
const dragleaveHandler = (e) => {
  e.preventDefault()
}
const dropHandler = (e) => {
  e.preventDefault()
  const droppedFile = e.dataTransfer.files[0]
  if (droppedFile && droppedFile.type.startsWith('image/')) {
    uploadedImage.value = droppedFile
  }
}

const chooseFile = () => {
  const fileInput = document.querySelector('input[type=file]')
  fileInput.click()
}

const fileInputChange = (e) => {
  const selectedFile = e.target.files[0]
  if (selectedFile && selectedFile.type.startsWith('image/')) {
    uploadedImage.value = selectedFile
  }
}

const clearImage = () => {
  uploadedImage.value = null
}
</script>

<template>
  <div class="border border-inputGray rounded-[4px] px-[18px] py-5">
    <div
      class="w-full"
      @dragover="dragoverHandler"
      @dragleave="dragleaveHandler"
      @drop="dropHandler"
    >
      <input type="file" class="hidden" @change.prevent="fileInputChange" />
      <p v-if="!uploadedImage" class="flex items-center 2xl:text-xl">
        <CameraIcon class="mr-5 w-7 h-7" />
        {{ isDesktopDevice ? $t('news_feed.drag_and_drop') : $t('news_feed.upload_image') }}
        <button @click.prevent="chooseFile" class="ml-2 px-[10px] py-2 bg-[#9747FF66]">
          {{ $t('news_feed.choose_file') }}
        </button>
      </p>
      <p v-else class="2xl:text-xl">
        {{ $t('news_feed.image_selected') }}
        <button @click.prevent="clearImage" class="px-5 py-1 rounded-md ml-4 bg-redFail">
          {{ $t('news_feed.remove') }}
        </button>
      </p>
    </div>
  </div>
</template>
