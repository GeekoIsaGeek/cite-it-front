<script setup>
import QuoteModalWrapper from '@/components/shared/QuoteModalWrapper.vue'
import TopPanel from '@/components/movie-details/view-quote/TheTopPanel.vue'
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import SaveButton from '@/components/UI/RedButton.vue'
import { Form } from 'vee-validate'
import { ref } from 'vue'

const quote = ref(null)
const quote_ka = ref(null)
</script>

<template>
  <QuoteModalWrapper>
    <div
      class="dialog flex flex-col text-white w-1/2 bg-almostBlack pt-8 overflow-y-scroll pb-7 rounded-xl"
    >
      <TopPanel />
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
          <div class="w-full h-[30vw]">
            <img
              src="https://i.ytimg.com/vi/cDulE7UWe94/maxresdefault.jpg"
              alt="movie"
              class="rounded-[10px] w-full h-full"
            />
          </div>
          <SaveButton>{{ $t('my_profile.save_changes') }}</SaveButton>
        </Form>
      </div>
    </div>
  </QuoteModalWrapper>
</template>
