<script setup>
import { Form } from 'vee-validate'
import FormField from '@/components/UI/AddPostFormInput.vue'
import ModalWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import UploadImage from '@/components/UI/ImageUploader.vue'
import EditButton from '@/components/UI/RedButton.vue'
import MovieGenres from '@/components/movies/MovieGenres.vue'
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '@/stores/movieStore.js'
import { useI18n } from 'vue-i18n'
import { editsAreMadeInBothLanguages } from '@/utils/validations.js'
import { storeToRefs } from 'pinia'
import fillFormData from '@/utils/fillFormData.js'
import useSendPostRequest from '@/composables/useSendPostRequest.js'
import getUpdatedValues from '@/utils/getUpdatedValues.js'

const router = useRouter()
const { t } = useI18n()
const { movies } = storeToRefs(useMovieStore())
const movieStore = useMovieStore()
const movieId = computed(() => router.currentRoute.value.params.id)
const movie = movies.value.find((el) => parseInt(movieId.value) === el.id)

const movieDetails = reactive({
  name: movie.name.en,
  name_ka: movie.name.ka,
  genre: movie.genre.split(','),
  release_date: movie.release_date,
  director: movie.director.en,
  director_ka: movie.director.ka,
  description: movie.description.en,
  description_ka: movie.description.ka,
  poster: movie.poster
})
const errorMessage = ref(null)
const initialValues = { ...movieDetails }
const editMovie = useSendPostRequest()

const handleFormSubmit = async () => {
  const data = getUpdatedValues(movieDetails, initialValues)
  errorMessage.value = null

  if (
    !editsAreMadeInBothLanguages(data, 'name') ||
    !editsAreMadeInBothLanguages(data, 'director') ||
    !editsAreMadeInBothLanguages(data, 'description')
  ) {
    errorMessage.value = t('messages.changes_are_not_bilingual')
    return
  }
  const formData = fillFormData(data)
  formData.append('_method', 'patch')
  const { data: updatedMovie, errors } = await editMovie(formData, `movies/${movie.id}`)
  if (!errors) {
    movieStore.updateMovies(updatedMovie)
    router.push({ name: 'movies' })
  }
  errorMessage.value = errors || []
}
</script>

<template>
  <ModalWrapper :heading="$t('movies.edit_movie')" :handleClose="() => router.push({ name: 'movies' })">
    <Form class="flex flex-col gap-6" :initial-values="initialValues">
      <FormField
        name="name"
        rules="only_latin|required"
        placeholder="Movie name"
        language="Eng"
        showLabel
        v-model="movieDetails.name"
      />
      <FormField
        name="name_ka"
        rules="only_georgian|required"
        placeholder="ფილმის სახელი"
        language="ქარ"
        showLabel
        v-model="movieDetails.name_ka"
      />
      <MovieGenres v-model="movieDetails.genre" />
      <FormField
        name="release_date"
        rules="required"
        placeholder="წელი/Year"
        v-model="movieDetails.release_date"
        showLabel
      />
      <FormField
        name="director"
        rules="only_latin|required"
        placeholder="Director"
        language="Eng"
        showLabel
        v-model="movieDetails.director"
      />
      <FormField
        name="director_ka"
        rules="only_georgian|required"
        placeholder="რეჟისორი"
        language="ქარ"
        showLabel
        v-model="movieDetails.director_ka"
      />
      <FormField
        name="description"
        rules="only_latin|required"
        placeholder="Movie description"
        language="Eng"
        isTextArea
        showLabel
        v-model="movieDetails.description"
      />
      <FormField
        name="description_ka"
        rules="only_georgian|required"
        placeholder="ფილმის აღწერა"
        language="ქარ"
        isTextArea
        showLabel
        v-model="movieDetails.description_ka"
      />
      <UploadImage previewImage v-model="movieDetails.poster" />
      <p v-if="errorMessage" class="text-redFail text-lg">{{ errorMessage }}</p>
      <EditButton @click="handleFormSubmit">{{ $t('movies.edit_movie') }}</EditButton>
    </Form>
  </ModalWrapper>
</template>
