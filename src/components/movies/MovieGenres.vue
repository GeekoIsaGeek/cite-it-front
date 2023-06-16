<script setup>
import GenreOption from '@/components/UI/GenreOption.vue'
import PlusIcon from '@/components/icons/ThePlusIcon.vue'
import genresList from '@/stores/genres.js'
import { ref, toRef } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const selectedGenres = toRef(props.modelValue)
const emit = defineEmits(['update:modelValue'])
const { locale } = useI18n()
const genres = ref(genresList[locale.value])
const showGenres = ref(false)

const handleRemove = (genreToBeDeleted) => {
  selectedGenres.value = selectedGenres.value.filter((genre) => genre !== genreToBeDeleted)
  emit('update:modelValue', selectedGenres.value)
}

const handleSelect = (genre) => {
  const isNotAdded = selectedGenres.value.indexOf(genre) === -1
  if (isNotAdded) {
    showGenres.value = false
    selectedGenres.value.push(genre)
    emit('update:modelValue', selectedGenres.value)
  }
}
</script>

<template>
  <div class="flex gap-3 border border-inputGray rounded-[4px] px-3 py-2 relative">
    <ul class="flex gap-1 flex-wrap" v-if="selectedGenres.length > 0">
      <GenreOption
        v-for="genre in selectedGenres"
        :genre="genre"
        :key="genre"
        :handleRemove="() => handleRemove(genre)"
      />
    </ul>
    <div class="lg:text-xl cursor-pointer flex items-center gap-2">
      <span v-if="selectedGenres.length < 1">{{ $t('movies.genre') }}</span>
      <PlusIcon @click="() => (showGenres = !showGenres)" />
    </div>
    <ul
      v-if="showGenres"
      class="flex flex-col absolute bg-veryDarkPurple py-4 w-full left-0 top-full rounded border border-gray-400"
    >
      <li
        v-for="genre in genres"
        :key="genre"
        class="px-4 lg:text-xl hover:bg-darkPurple py-1 cursor-pointer"
        @click="() => handleSelect(genre)"
      >
        {{ genre }}
      </li>
    </ul>
  </div>
</template>
