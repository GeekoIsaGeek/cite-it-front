<script setup>
import { Form } from 'vee-validate'
import FormField from '@/components/UI/AddPostFormInput.vue'
import AddMovieWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import UploadImage from '@/components/UI/ImageUploader.vue'
import AddButton from '@/components/UI/RedButton.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import MovieGenres from '@/components/movies/MovieGenres.vue'

const { setShowAddMovieModal } = useGeneralStore()
</script>

<template>
  <AddMovieWrapper
    :heading="$t('movies.add_movie')"
    :handleClose="() => setShowAddMovieModal(false)"
  >
    <Form class="flex flex-col gap-6">
      <FormField name="movie_name" rules="" placeholder="Movie name" language="Eng" />
      <FormField name="movie_name_ka" rules="" placeholder="ფილმის სახელი" language="ქარ" />
      <MovieGenres />
      <FormField name="year" rules="" placeholder="წელი/Year" />
      <FormField name="director" rules="" placeholder="Director" language="Eng" />
      <FormField name="director_ka" rules="" placeholder="რეჟისორი" language="ქარ" />
      <FormField
        name="description"
        rules=""
        placeholder="Movie description"
        language="Eng"
        isTextArea
      />
      <FormField
        name="description_ka"
        rules=""
        placeholder="ფილმის აღწერა"
        language="ქარ"
        isTextArea
      />
      <UploadImage previewImage />
      <AddButton>Add</AddButton>
    </Form>
  </AddMovieWrapper>
</template>
