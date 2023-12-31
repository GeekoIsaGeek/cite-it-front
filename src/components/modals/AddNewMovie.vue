<script setup>
import { Form } from 'vee-validate'
import FormField from '@/components/UI/AddPostFormInput.vue'
import AddMovieWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import UploadImage from '@/components/UI/ImageUploader.vue'
import AddButton from '@/components/UI/RedButton.vue'
import MovieGenres from '@/components/movies/MovieGenres.vue'
import { reactive, ref } from 'vue'
import { useMovieStore } from '@/stores/movieStore.js'
import ServerErrors from '@/components/shared/ServerErrors.vue'
import fillFormData from '@/utils/fillFormData.js'
import useSendPostRequest from '@/composables/useSendPostRequest.js'
import { useRouter } from 'vue-router'
import FormFillingError from '@/components/shared/FormFillingError.vue'

const serverErrors = ref([])
const isFormIncorrectlyFilled = ref(false)
const movieStore = useMovieStore()

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

const addNewPost = useSendPostRequest()
const router = useRouter()

const AddNewMovie = async ({ valid, touched }) => {
  isFormIncorrectlyFilled.value = false
  const isFormValid = valid && touched && movieDetails.genre.length > 0 && movieDetails.poster

  if (isFormValid) {
    const formData = fillFormData(movieDetails)
    const { data, errors, status } = await addNewPost(formData, 'movies', isFormValid)

    if (status === 201) {
      movieStore.addNewMovie(data)
      router.push({ name: 'movies' })
    }
    serverErrors.value = errors || []
  } else isFormIncorrectlyFilled.value = true
}
</script>

<template>
  <AddMovieWrapper :heading="$t('movies.add_movie')" :handleClose="() => router.push({ name: 'movies' })">
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
      <FormField name="year" rules="required" placeholder="წელი/Year" v-model="movieDetails.release_date" />
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
      <FormFillingError v-show="isFormIncorrectlyFilled" />
      <ServerErrors :errors="serverErrors" />
      <AddButton @click="() => AddNewMovie(meta)">Add</AddButton>
    </Form>
  </AddMovieWrapper>
</template>
