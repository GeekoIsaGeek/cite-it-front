<script setup>
import MainSectionHeading from '@/components/movie-details/MainSectionHeading.vue'
import MainSectionGenres from '@/components/movie-details/MainSectionGenres.vue'
</script>

<template>
  <div class="flex items-start gap-5 mt-8 w-full">
    <div class="w-full full h-[440px]">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80"
        alt="movie"
        class="h-full w-full rounded-xl object-cover"
      />
    </div>
    <div class="w-full flex flex-col gap-5 text-lightGray">
      <MainSectionHeading />
      <MainSectionGenres />
      <p class="text-lg font-bold">
        {{ $t('movie_details.director') }}: <span class="text-white font-medium">Spielberg</span>
      </p>
      <p class="text-lg">
        In a nursing home, resident Duke reads a romance story to an old woman who has senile
        dementia with memory loss. In the late 1930s, wealthy seventeen year-old Allie Hamilton is
        spending summer vacation in Seabrook. Local worker Noah Calhoun meets Allie at a carnival
      </p>
    </div>
  </div>
</template>
