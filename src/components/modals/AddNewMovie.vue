<script setup>
import { Form } from 'vee-validate'
import FormField from '@/components/UI/AddPostFormInput.vue'
import AddMovieWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import UploadImage from '@/components/UI/ImageUploader.vue'
import AddButton from '@/components/UI/RedButton.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import MovieGenres from '@/components/movies/MovieGenres.vue'
import { reactive, ref } from 'vue'
import request from '@/config/axiosInstance.js'
import { useI18n } from 'vue-i18n'
import { getServerErrorMessages } from '@/utils/getErrors.js'
import { useMovieStore } from '@/stores/movieStore.js'
import ServerErrors from '@/components/shared/ServerErrors.vue'

const { locale } = useI18n()
const serverErrors = ref(null)
const movieStore = useMovieStore()

const { setShowAddMovieModal } = useGeneralStore()
const movieDetails = reactive({
  name: null,
  name_ka: null,
  genre: [],
  release_date: null,
  director: null,
  director_ka: null,
  description: null,
  description_ka: null,
  poster: null
})

const handleAdd = async ({ valid, touched }) => {
  const isFormValid = valid && touched && movieDetails.genre.length > 0 && movieDetails.poster
  const formData = new FormData()
  formData.append('genre', movieDetails.genre)
  Object.entries(movieDetails).forEach((field) => {
    if (field[0] !== 'genre') formData.append(field[0], field[1])
  })

  try {
    if (isFormValid) {
      const response = await request.post('/api/movies', formData, {
        headers: {
          'Accept-Language': locale.value,
          'Content-Type': 'multipart/form-data'
        }
      })
      movieStore.addNewMovie(response.data)
      setShowAddMovieModal(false)
    }
  } catch (error) {
    serverErrors.value = getServerErrorMessages(error)
  }
}
</script>

<template>
  <AddMovieWrapper
    :heading="$t('movies.add_movie')"
    :handleClose="() => setShowAddMovieModal(false)"
  >
    <Form class="flex flex-col gap-6" v-slot="{ meta }">
      <FormField
        name="movie_name"
        rules="only_latin|required"
        placeholder="Movie name"
        language="Eng"
        v-model="movieDetails.name"
      />
      <FormField
        name="movie_name_ka"
        rules="only_georgian|required"
        placeholder="ფილმის სახელი"
        language="ქარ"
        v-model="movieDetails.name_ka"
      />
      <MovieGenres v-model="movieDetails.genre" />
      <FormField
        name="year"
        rules="required"
        placeholder="წელი/Year"
        v-model="movieDetails.release_date"
      />
      <FormField
        name="director"
        rules="only_latin|required"
        placeholder="Director"
        language="Eng"
        v-model="movieDetails.director"
      />
      <FormField
        name="director_ka"
        rules="only_georgian|required"
        placeholder="რეჟისორი"
        language="ქარ"
        v-model="movieDetails.director_ka"
      />
      <FormField
        name="description"
        rules="only_latin|required"
        placeholder="Movie description"
        language="Eng"
        isTextArea
        v-model="movieDetails.description"
      />
      <FormField
        name="description_ka"
        rules="only_georgian|required"
        placeholder="ფილმის აღწერა"
        language="ქარ"
        isTextArea
        v-model="movieDetails.description_ka"
      />
      <UploadImage previewImage v-model="movieDetails.poster" />
      <ServerErrors :errors="serverErrors" />
      <AddButton @click="() => handleAdd(meta)">Add</AddButton>
    </Form>
  </AddMovieWrapper>
</template>
