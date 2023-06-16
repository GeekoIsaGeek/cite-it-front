<script setup>
import CameraIcon from '@/components/icons/ThePhotoCameraIcon.vue'
import { computed } from 'vue'

defineProps({
  previewImage: {
    type: Boolean,
    required: false
  },
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
const isDesktopDevice = computed(() => window.innerWidth > 960)

const handleUpload = (file) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = (loadEvent) => {
      emit('update:modelValue', loadEvent.target.result)
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
      v-if="previewImage && modelValue"
      :src="modelValue"
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
          modelValue ? 'center' : 'start'
        } gap-4 2xl:text-xl`"
      >
        <span class="font-bold text-[#DDCCAA] cursor-pointer" @click="chooseFile" v-if="modelValue"
          >Replace photo</span
        >
        <span :class="`flex gap-${modelValue ? '2' : '5'}`">
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
