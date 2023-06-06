<script setup>
import NewsFeedWrapper from '@/components/news-feed/NewsFeedWrapper.vue'
import TheImageUploader from '@/components/my-profile/TheImageUploader.vue'
import ProfileForm from '@/components/my-profile/MyProfileForm.vue'
import SaveButton from '@/components/UI/RedButton.vue'
</script>

<template>
  <NewsFeedWrapper>
    <section class="flex flex-col w-max">
      <h2 class="text-2xl text-white font-medium">{{ $t('my_profile.my_profile') }}</h2>
      <div
        class="mt-32 bg-blackishPurple rounded-[12px] pl-[30%] pr-[35%] lg:min-h-[600px] pb-32 min-w-max relative"
      >
        <TheImageUploader />
        <ProfileForm />
      </div>
      <div class="flex gap-6 mt-14 self-end mr-[-19vw ]">
        <button>Cancel</button>
        <SaveButton class="px-4">Save changes</SaveButton>
      </div>
    </section>
  </NewsFeedWrapper>
</template>
