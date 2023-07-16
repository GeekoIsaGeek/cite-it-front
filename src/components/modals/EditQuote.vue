<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import TopPanel from '@/components/movie-details/view-quote/TheTopPanel.vue'
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import SaveButton from '@/components/UI/RedButton.vue'
import ThePhotoCameraIcon from '@/components/icons/ThePhotoCameraIcon.vue'
import { Form } from 'vee-validate'
import { reactive, ref } from 'vue'
import { useQuoteStore } from '@/stores/quoteStore'
import { useRoute } from 'vue-router'
import useGetImagePath from '@/composables/useGetImagePath.js'
import fillFormData from '@/utils/fillFormData.js'
import useSendPostRequest from '@/composables/useSendPostRequest.js'
import { editsAreMadeInBothLanguages } from '@/utils/validations.js'
import getUpdatedValues from '@/utils/getUpdatedValues.js'
import { useRouter } from 'vue-router'
import FormWrapperTransition from '@/components/shared/FormWrapperTransition.vue'

const quoteStore = useQuoteStore()
const quoteId = useRoute().params.id
const quote = quoteStore.quotes.find((quote) => quote.id === parseInt(quoteId))
const router = useRouter()
const image = ref(useGetImagePath(quote.image))

const quoteData = reactive({
  quote: quote.quote.en,
  quote_ka: quote.quote.ka,
  image: quote.image
})

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    quoteData.image = file
    const reader = new FileReader()
    reader.onload = (loadEvent) => {
      image.value = loadEvent.target.result
    }
    reader.readAsDataURL(file)
  }
}
const initialValues = { ...quoteData }
const editQuote = useSendPostRequest()

const handleSubmit = async () => {
  const updatedValues = getUpdatedValues(quoteData, initialValues)
  const formData = fillFormData(updatedValues)
  formData.append('id', quote.movie.id)
  formData.append('_method', 'put')

  if (editsAreMadeInBothLanguages(updatedValues, 'quote')) {
    const { data, errors } = await editQuote(formData, `quotes/${quoteId}`)
    if (!errors) {
      quoteStore.updateQuotes(data)
      router.push({
        name: 'view-quote',
        params: {
          id: quote.id
        }
      })
    }
  }
}
</script>

<template>
  <QuoteModalWrapper>
    <FormWrapperTransition type="edit">
      <div
        class="dialog flex flex-col text-white w-full lg:w-1/2 bg-almostBlack pt-8 overflow-y-scroll pb-7 rounded-xl"
      >
        <TopPanel :heading="$t('movie_details.edit_quote')" :movie="quote.movie" />
        <div class="flex flex-col px-6 gap-10">
          <Author class="mt-7" :imageUrl="quote.movie.author.profile_picture" />
          <Form class="flex flex-col gap-6">
            <FormField rules="required|only_latin" name="quote" language="Eng" isTextArea v-model="quoteData.quote" />
            <FormField
              rules="required|only_georgian"
              name="quote_ka"
              language="ქარ"
              isTextArea
              v-model="quoteData.quote_ka"
            />
            <div class="w-full h-[300px] lg:h-[30vw] relative">
              <img :src="image" alt="movie" class="rounded-[10px] w-full h-full object-cover" />
              <div
                class="w-2/5 overflow-hidden lg:w-1/4 h-[50%] lg:h-[25%] cursor-pointer absolute top-[25%] lg:top-[40%] left-[25%] lg:left-[35%] modal-bg-gradient rounded-[10px] flex flex-col gap-3 justify-center items-center"
              >
                <input type="file" class="scale-[1000%] absolute opacity-0" @change="handleImageChange" />
                <ThePhotoCameraIcon />
                {{ $t('movie_details.change_photo') }}
              </div>
            </div>
            <SaveButton @click="() => handleSubmit()">{{ $t('my_profile.save_changes') }}</SaveButton>
          </Form>
        </div>
      </div>
    </FormWrapperTransition>
  </QuoteModalWrapper>
</template>
