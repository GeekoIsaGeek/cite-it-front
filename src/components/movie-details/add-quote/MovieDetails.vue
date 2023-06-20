<script setup></script>

<template>
  <div class="flex items-center gap-3 lg:gap-[30px]">
    <div class="w-28 h-24 lg:h-40 lg:w-72">
      <img
        src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="movie"
        class="rounded-xl h-full w-full object-cover"
      />
    </div>
    <div class="flex flex-col gap-2 lg:gap-5">
      <h2 class="text-[#DDCCAA] lg:text-2xl font-bold">COMMITMENT HASAN (1999)</h2>
      <ul class="flex items-center gap-2">
        <li
          v-for="genre in ['Drama', 'Sci-fi']"
          :key="genre"
          class="font-bold text-[12px] lg:text-lg py-1 px-2 lg:px-3 bg-[#6C757D] rounded"
        >
          {{ genre }}
        </li>
      </ul>
      <p class="font-medium">
        <span class="text-lightGray lg:text-lg font-bold"
          >{{ $t('movie_details.director') }}:
        </span>
        Nick Cassavetes
      </p>
    </div>
  </div>
</template>
