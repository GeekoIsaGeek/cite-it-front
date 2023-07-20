<script setup>
import AddNewPostModalWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import { Form } from 'vee-validate'
import PostButton from '@/components/UI/RedButton.vue'
import ImageUploader from '@/components/UI/ImageUploader.vue'
import ChooseMovie from '@/components/news-feed/TheChooseMovieField.vue'
import { useModalStore } from '@/stores/modalStore.js'
import { reactive } from 'vue'
import { useMovieStore } from '@/stores/movieStore.js'
import fillFormData from '@/utils/fillFormData'
import useSendPostRequest from '@/composables/useSendPostRequest.js'
import { useQuoteStore } from '@/stores/quoteStore.js'
import FormFillingError from '@/components/shared/FormFillingError.vue'
import { ref } from 'vue'

const props = defineProps({
  addQuoteHandler: {
    type: Function,
    required: true
  }
})

const { setShowAddNewPostModal } = useModalStore()
const movieStore = useMovieStore()
const quoteStore = useQuoteStore()
const isFormIncorrectlyFilled = ref(false)
const quoteData = reactive({
  quote: null,
  quote_ka: null,
  image: null,
  movieName: null
})

const addNewPost = useSendPostRequest()

const handleSubmit = async ({ valid, touched }) => {
  isFormIncorrectlyFilled.value = false
  const isFormValid = valid && touched && quoteData.image && quoteData.movieName
  if (isFormValid) {
    const targetMovie = movieStore.movies.find(
      (movie) => movie.name.en === quoteData.movieName || movie.name.ka === quoteData.movieName
    )
    const formData = fillFormData(quoteData, 'movieName')
    formData.append('id', targetMovie.id)

    const { data: newQuote, errors } = await addNewPost(formData, 'quotes', isFormValid)
    if (!errors) {
      quoteStore.addNewQuote({ ...newQuote, movie: targetMovie })
      props.addQuoteHandler({ ...newQuote, movie: targetMovie })
      setShowAddNewPostModal(false)
    }
  } else isFormIncorrectlyFilled.value = true
}
</script>

<template>
  <AddNewPostModalWrapper :heading="$t('news_feed.write_new_quote')" :handleClose="() => setShowAddNewPostModal(false)">
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
      <FormFillingError v-show="isFormIncorrectlyFilled" />
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
