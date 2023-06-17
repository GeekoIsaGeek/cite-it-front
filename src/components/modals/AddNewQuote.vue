<script setup>
import AddNewPostModalWrapper from '@/components/shared/AddNewPostModalWrapper.vue'
import FormField from '@/components/UI/AddPostFormInput.vue'
import { Form } from 'vee-validate'
import PostButton from '@/components/UI/RedButton.vue'
import ImageUploader from '@/components/UI/ImageUploader.vue'
import ChooseMovie from '@/components/news-feed/TheChooseMovieField.vue'
import { useGeneralStore } from '@/stores/generalStore.js'
import { ref } from 'vue'

const { setShowAddNewPostModal } = useGeneralStore()
const image = ref(null)
</script>

<template>
  <AddNewPostModalWrapper
    :heading="$t('news_feed.write_new_quote')"
    :handleClose="() => setShowAddNewPostModal(false)"
  >
    <Form class="flex flex-col gap-6 w-full">
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
      <ImageUploader previewImage v-model="image" />
      <ChooseMovie />
      <PostButton class="text-xl">{{ $t('news_feed.post') }}</PostButton>
    </Form>
  </AddNewPostModalWrapper>
</template>
