<script setup>
import NewsFeedWrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TheImageUploader from '@/components/news-feed/my-profile/TheImageUploader.vue'
import { Form } from 'vee-validate'
import BaseInput from '@/components/UI/BaseInput.vue'
</script>

<template>
  <NewsFeedWrapper>
    <section>
      <h2 class="text-2xl text-white font-medium">{{ $t('my_profile.my_profile') }}</h2>
      <div class="mt-32 bg-blackishPurple rounded-[12px] pl-[25%] pr-[30%] pb-36 min-w-max">
        <TheImageUploader />
        <Form class="flex flex-col gap-10 text-[#212529] mt-10">
          <div class="flex gap-8">
            <div class="min-w-[35vw]">
              <BaseInput
                name="username"
                :label="$t('my_profile.username')"
                :placeholder="'username'"
                type="text"
                rules="required|min:3|only_lowercase"
              />
            </div>
            <button class="text-lightGray mt-2">Edit</button>
          </div>
          <div class="w-[35vw]">
            <BaseInput
              name="email"
              :label="$t('auth.email_label')"
              :placeholder="'username'"
              type="email"
              rules="required|email"
            />
          </div>
          <div class="flex gap-8">
            <div class="min-w-[35vw]">
              <BaseInput
                name="password"
                :label="$t('auth.password_label')"
                :placeholder="'username'"
                type="password"
                rules="required|min:8|max:15|only_lowercase"
              />
            </div>
            <button class="text-lightGray mt-2">Edit</button>
          </div>
        </Form>
      </div>
    </section>
  </NewsFeedWrapper>
</template>
