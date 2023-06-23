<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import CloseIcon from '@/components/icons/TheCloseIcon.vue'
import { useRouter } from 'vue-router'
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import MovieDetails from '@/components/movie-details/add-quote/MovieDetails.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import ImageUploader from '@/components/UI/ImageUploader.vue'
import AddQuoteButton from '@/components/UI/RedButton.vue'
import { useMovieStore } from '@/stores/movieStore.js'
import { Form } from 'vee-validate'
import { ref, computed, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import request from '@/config/axiosInstance.js'
import { useI18n } from 'vue-i18n'
import ServerErrors from '@/components/shared/ServerErrors.vue'
import { getServerErrorMessages } from '@/utils/getErrors.js'

const quoteData = reactive({
  quote: null,
  quote_ka: null,
  image: null
})

const { t } = useI18n()
const router = useRouter()
const movieId = computed(() => router.currentRoute.value.params.id)
const movieStore = useMovieStore()
const { movies } = storeToRefs(useMovieStore())
const movie = ref(movies.value.find((movie) => movie.id === parseInt(movieId.value)))
const errors = ref([])

const handleCancel = () => {
  router.push({
    name: 'movie-details',
    params: {
      id: movieId.value
    }
  })
}

const handleSubmit = async (formMetaData) => {
  const { touched, valid } = formMetaData
  const formData = new FormData()
  formData.append('id', movieId.value)
  Object.entries(quoteData).forEach((field) => formData.append(field[0], field[1]))

  try {
    if (touched && valid && quoteData.image) {
      const { data: newQuote } = await request.post('/api/quotes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      movie.value = { ...movie.value, quotes: [...movie.value.quotes, newQuote] }
      movieStore.updateMovies(movie.value)
      handleCancel()
    } else {
      throw new Error(t('messages.invalid_form'))
    }
  } catch (error) {
    errors.value = [error.message] || getServerErrorMessages(error)
  }
}
</script>

<template>
  <QuoteModalWrapper>
    <div class="dialog bg-almostBlack pt-6 lg:w-1/2 rounded-xl pb-24 overflow-y-scroll text-white">
      <div class="px-8 pt-4 pb-6 border-b border-b-darkGray relative">
        <h2 class="text-center text-2xl">{{ $t('movie_details.add_quote') }}</h2>
        <CloseIcon class="right-8 top-3 hover:text-darkGray" @click="handleCancel" />
      </div>
      <div class="w-full px-8">
        <Author class="my-[30px]" />
        <MovieDetails :movie="movie" />
        <Form class="mt-7 mb-11 flex flex-col gap-4" v-slot="{ meta }">
          <FormField
            rules="required|only_latin"
            type="text"
            placeholder="Add new quote"
            language="Eng"
            name="quote_ka"
            v-model="quoteData.quote_ka"
            isTextArea
          />
          <FormField
            rules="required|only_georgian"
            type="text"
            placeholder="ახალი ციტატა"
            language="ქარ"
            name="quote"
            v-model="quoteData.quote"
            isTextArea
          />
          <ImageUploader previewImage v-model="quoteData.image" />
          <ServerErrors :errors="errors" v-if="errors.length > 0" />
          <AddQuoteButton class="w-full mt-14 py-[9px]" @click="() => handleSubmit(meta)">{{
            $t('movie_details.add_quote')
          }}</AddQuoteButton>
        </Form>
      </div>
    </div>
  </QuoteModalWrapper>
</template>
