<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import TopPanel from '@/components/movie-details/view-quote/TheTopPanel.vue'
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import SaveButton from '@/components/UI/RedButton.vue'
import ThePhotoCameraIcon from '@/components/icons/ThePhotoCameraIcon.vue'
import { Form } from 'vee-validate'
import { ref } from 'vue'

const handleImageChange = () => {}

const quote = ref(null)
const quote_ka = ref(null)
</script>

<template>
  <QuoteModalWrapper>
    <div
      class="dialog flex flex-col text-white w-full lg:w-1/2 bg-almostBlack pt-8 overflow-y-scroll pb-7 rounded-xl"
    >
      <TopPanel :heading="$t('movie_details.edit_quote')" />
      <div class="flex flex-col px-6 gap-10">
        <Author class="mt-7" />
        <Form class="flex flex-col gap-6">
          <FormField
            rules="required|only_latin"
            name="quote"
            language="Eng"
            isTextArea
            v-model="quote"
          />
          <FormField
            rules="required|only_georgian"
            name="quote_ka"
            language="ქარ"
            isTextArea
            v-model="quote_ka"
          />
          <div class="w-full h-[300px] lg:h-[30vw] relative">
            <img
              src="https://i.ytimg.com/vi/cDulE7UWe94/maxresdefault.jpg"
              alt="movie"
              class="rounded-[10px] w-full h-full object-cover"
            />
            <div
              class="w-2/5 overflow-hidden lg:w-1/4 h-[50%] lg:h-[25%] cursor-pointer absolute top-[25%] lg:top-[40%] left-[25%] lg:left-[35%] modal-bg-gradient rounded-[10px] flex flex-col gap-3 justify-center items-center"
            >
              <input
                type="file"
                class="scale-[1000%] absolute opacity-0"
                @change="handleImageChange"
              />
              <ThePhotoCameraIcon />
              {{ $t('movie_details.change_photo') }}
            </div>
          </div>
          <SaveButton>{{ $t('my_profile.save_changes') }}</SaveButton>
        </Form>
      </div>
    </div>
  </QuoteModalWrapper>
</template>
