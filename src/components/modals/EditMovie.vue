<script setup>
import { Form } from 'vee-validate'
import FormField from '@/components/UI/AddPostFormInput.vue'
import ModalWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import UploadImage from '@/components/UI/ImageUploader.vue'
import AddButton from '@/components/UI/RedButton.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import MovieGenres from '@/components/movies/MovieGenres.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { setShowAddMovieModal } = useGeneralStore()
const movieDetails = reactive({
  name: null,
  name_ka: null,
  genres: [],
  year: null,
  director: null,
  director_ka: null,
  description: null,
  description_ka: null,
  image: null
})
</script>

<template>
  <ModalWrapper
    :heading="$t('movies.add_movie')"
    :handleClose="() => router.push({ name: 'movies' })"
  >
    <Form class="flex flex-col gap-6">
      <FormField
        name="movie_name"
        rules="only_latin|required"
        placeholder="Movie name"
        language="Eng"
        showLabel
        v-model="movieDetails.name"
      />
      <FormField
        name="movie_name_ka"
        rules="only_georgian|required"
        placeholder="ფილმის სახელი"
        language="ქარ"
        showLabel
        v-model="movieDetails.name_ka"
      />
      <MovieGenres v-model="movieDetails.genres" />
      <FormField
        name="year"
        rules="required"
        placeholder="წელი/Year"
        v-model="movieDetails.year"
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
      <UploadImage previewImage v-model="movieDetails.image" />
      <AddButton>Add</AddButton>
    </Form>
  </ModalWrapper>
</template>
