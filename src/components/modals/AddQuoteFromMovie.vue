<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import CloseIcon from '@/components/icons/TheCloseIcon.vue'
import { useRouter } from 'vue-router'
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import MovieDetails from '@/components/movie-details/add-quote/MovieDetails.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import ImageUploader from '@/components/UI/ImageUploader.vue'
import AddQuoteButton from '@/components/UI/RedButton.vue'
import { Form } from 'vee-validate'
import { ref } from 'vue'

const image = ref(null)

const router = useRouter()
const handleCancel = () => {
  router.push({
    name: 'movie-details',
    params: {
      id: router.currentRoute.value.params.id
    }
  })
}
</script>

<template>
  <QuoteModalWrapper>
    <div class="dialog bg-almostBlack pt-6 w-1/2 rounded-xl pb-24 overflow-y-scroll text-white">
      <div class="px-8 pt-4 pb-6 border-b border-b-darkGray relative">
        <h2 class="text-center text-2xl">{{ $t('movie_details.add_quote') }}</h2>
        <CloseIcon class="right-8 top-3 hover:text-darkGray" @click="handleCancel" />
      </div>
      <div class="w-full px-8">
        <Author class="my-[30px]" />
        <MovieDetails />
        <Form class="mt-7 mb-11 flex flex-col gap-6">
          <FormField
            rules="required|only_latin"
            type="text"
            placeholder="Add new quote"
            language="Eng"
            name="quote_ka"
            isTextArea
          />
          <FormField
            rules="required|only_georgian"
            type="text"
            placeholder="ახალი ციტატა"
            language="ქარ"
            name="quote_en"
            isTextArea
          />
        </Form>
        <ImageUploader previewImage v-model="image" />
        <AddQuoteButton class="w-full mt-14 py-[9px]">{{
          $t('movie_details.add_quote')
        }}</AddQuoteButton>
      </div>
    </div>
  </QuoteModalWrapper>
</template>
