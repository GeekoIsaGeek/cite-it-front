<script setup>
import AddNewPostModalWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import { Form } from 'vee-validate'
import PostButton from '@/components/UI/RedButton.vue'
import ImageUploader from '@/components/UI/ImageUploader.vue'
import ChooseMovie from '@/components/news-feed/TheChooseMovieField.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import { reactive } from 'vue'
import { useMovieStore } from '@/stores/movieStore.js'
import fillFormData from '@/utils/fillFormData'
import useSendPostRequest from '@/composables/useSendPostRequest.js'

const { setShowAddNewPostModal } = useGeneralStore()
const movieStore = useMovieStore()
const quoteData = reactive({
  quote: null,
  quote_ka: null,
  image: null,
  movieName: null
})

const addNewPost = useSendPostRequest()

const handleSubmit = async ({ valid, touched }) => {
  const isFormValid = valid && touched && quoteData.image && quoteData.movieName
  const targetMovie = movieStore.movies.find(
    (movie) => movie.name.en === quoteData.movieName || movie.name.ka === quoteData.movieName
  )
  const formData = fillFormData(quoteData, 'movieName')
  formData.append('id', targetMovie.id)

  const { data: newQuote, errors } = await addNewPost(formData, 'quotes', isFormValid)
  if (!errors) {
    movieStore.updateMovies({ ...targetMovie, quotes: [...targetMovie.quotes, newQuote] })
    setShowAddNewPostModal(false)
  }
}
</script>

<template>
  <AddNewPostModalWrapper
    :heading="$t('news_feed.write_new_quote')"
    :handleClose="() => setShowAddNewPostModal(false)"
  >
    <Form class="flex flex-col gap-6 w-full" v-slot="{ meta }">
      <FormField
        rules="required|only_latin"
        type="text"
        placeholder="Add new quote"
        language="Eng"
        name="quote"
        isTextArea
        v-model="quoteData.quote"
      />
      <FormField
        rules="required|only_georgian"
        type="text"
        placeholder="ახალი ციტატა"
        language="ქარ"
        name="quote_ka"
        isTextArea
        v-model="quoteData.quote_ka"
      />
      <ImageUploader previewImage v-model="quoteData.image" />
      <ChooseMovie :setMovie="(selectedMovieName) => (quoteData.movieName = selectedMovieName)" />
      <PostButton
        class="text-xl"
        @click="
          () => {
            handleSubmit(meta)
          }
        "
        >{{ $t('news_feed.post') }}</PostButton
      >
    </Form>
  </AddNewPostModalWrapper>
</template>
