<script setup>
import NewsFeedWrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TheImageUploader from '@/components/my-profile/TheImageUploader.vue'
import ProfileForm from '@/components/my-profile/MyProfileForm.vue'
import ButtonSave from '@/components/UI/RedButton.vue'
import TheGoBackIconVue from '@/components/icons/TheGoBackIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleCancel = () => {}
</script>

<template>
  <NewsFeedWrapper>
    <section
      class="flex flex-col md:items-start items-center overflow-x-hidden w-full md:w-[70%] lg:w-[54%]"
    >
      <div class="block md:hidden pl-10 py-6 bg-veryDarkPurple w-full self-start">
        <TheGoBackIconVue class="h-4 w-5 cursor-pointer" @click="router.back()" />
      </div>
      <h2 class="hidden md:block text-2xl self-start text-white font-medium ml-14">
        {{ $t('my_profile.my_profile') }}
      </h2>
      <div
        class="flex flex-col md:items-center md:pr-10 md:mt-32 md:bg-blackishPurple rounded-[12px] lg:min-h-[600px] md:pb-32 w-full relative"
      >
        <TheImageUploader />
        <ProfileForm />
      </div>
      <div class="hidden md:flex gap-6 mt-14 md:self-end">
        <button @click="handleCancel">{{ $t('my_profile.cancel') }}</button>
        <ButtonSave class="px-4">{{ $t('my_profile.save_changes') }}</ButtonSave>
      </div>
    </section>
  </NewsFeedWrapper>
</template>
