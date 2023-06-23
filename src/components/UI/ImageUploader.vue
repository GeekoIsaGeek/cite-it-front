<script setup>
import CameraIcon from '@/components/icons/ThePhotoCameraIcon.vue'
import { ref } from 'vue'
import { computed } from 'vue'
import useGetImagePath from '@/composables/useGetImagePath.js'

const props = defineProps({
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
const imageAsbinaryString = ref(null)
const isDesktopDevice = computed(() => window.innerWidth > 960)

const imageSource = computed(() => {
  const source = props.modelValue
  if (typeof source === 'string') {
    return useGetImagePath(source)
  }
  return imageAsbinaryString.value
})

const handleUpload = (file) => {
  if (file && file.type.startsWith('image/')) {
    emit('update:modelValue', file)
    const reader = new FileReader()
    reader.onload = (loadEvent) => {
      imageAsbinaryString.value = loadEvent.target.result
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
  <div
    class="border border-inputGray rounded-[4px] px-4 lg:px-[18px] py-5 flex items-center gap-4 lg:gap-16"
  >
    <img
      v-if="previewImage && modelValue"
      :src="imageSource"
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
        }  gap-2 lg:gap-4 2xl:text-xl`"
      >
        <span class="font-bold text-[#DDCCAA] cursor-pointer" @click="chooseFile" v-if="modelValue"
          >Replace photo</span
        >
        <span :class="`flex gap-${modelValue ? '2' : '4'}`">
          <CameraIcon class="w-6 h-6 lg:w-7 lg:h-7" />
          {{ isDesktopDevice ? $t('news_feed.drag_and_drop') : $t('news_feed.upload_image') }}
        </span>
        <button
          @click.prevent="chooseFile"
          class="ml-2 px-[10px] py-2 bg-[#9747FF66] hover:bg-[#392457] rounded-sm"
        >
          {{ $t('news_feed.choose_file') }}
        </button>
      </p>
    </div>
  </div>
</template>
