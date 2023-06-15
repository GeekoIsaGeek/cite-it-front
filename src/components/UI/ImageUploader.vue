<script setup>
import CameraIcon from '@/components/icons/ThePhotoCameraIcon.vue'
import { computed, ref } from 'vue'

defineProps({
  previewImage: {
    type: Boolean,
    required: false
  }
})

const uploadedImage = ref(null)
const isDesktopDevice = computed(() => window.innerWidth > 960)

const handleUpload = (file) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = (loadEvent) => {
      uploadedImage.value = loadEvent.target.result
    }
    reader.readAsDataURL(file)
  }
}

const dragoverHandler = (e) => {
  e.preventDefault()
}
const dragleaveHandler = (e) => {
  e.preventDefault()
}
const dropHandler = (e) => {
  e.preventDefault()
  const droppedFile = e.dataTransfer.files[0]
  handleUpload(droppedFile)
}

const chooseFile = () => {
  const fileInput = document.querySelector('input[type=file]')
  fileInput.click()
}

const fileInputChange = (e) => {
  const selectedFile = e.target.files[0]
  handleUpload(selectedFile)
}
</script>

<template>
  <div class="border border-inputGray rounded-[4px] px-[18px] py-5 flex items-center gap-16">
    <img
      v-if="previewImage && uploadedImage"
      :src="uploadedImage"
      alt="movie"
      class="min-w-[50%] h-36 object-contain"
    />
    <div
      class="w-full"
      @dragover="dragoverHandler"
      @dragleave="dragleaveHandler"
      @drop="dropHandler"
    >
      <input type="file" class="hidden" @change.prevent="fileInputChange" />
      <p
        :class="`flex items-center flex-wrap justify-${
          uploadedImage ? 'center' : 'start'
        } gap-4 2xl:text-xl`"
      >
        <span
          class="font-bold text-[#DDCCAA] cursor-pointer"
          @click="chooseFile"
          v-if="uploadedImage"
          >Replace photo</span
        >
        <span :class="`flex gap-${uploadedImage ? '2' : '5'}`">
          <CameraIcon class="w-7 h-7" />
          {{ isDesktopDevice ? $t('news_feed.drag_and_drop') : $t('news_feed.upload_image') }}
        </span>
        <button
          @click.prevent="chooseFile"
          class="ml-2 px-[10px] py-2 bg-[#9747FF66] hover:bg-[#392457]"
        >
          {{ $t('news_feed.choose_file') }}
        </button>
      </p>
    </div>
  </div>
</template>
