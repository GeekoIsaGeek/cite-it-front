<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showLocales = ref(false)

const handleLocalization = (language) => {
  if (language === 'English') {
    locale.value = 'en'
  } else {
    locale.value = 'ka'
  }
}
</script>

<template>
  <div
    class="hidden md:flex items-center gap-2 text-white mr-6 relative cursor-pointer"
    @click="() => (showLocales = !showLocales)"
  >
    <h5>{{ locale === 'en' ? 'Eng' : 'ქარ' }}</h5>
    <button>
      <i class="ri-arrow-down-s-fill text-2xl"></i>
    </button>

    <ul
      class="flex flex-col absolute top-full right-0 bg-[#FEFBEC] py-3 text-darkBlue text-lg rounded"
      v-if="showLocales"
    >
      <li
        class="px-5 border-l-4 border-transparent hover:border-l-red-500 transition-all ease-in-out"
        @click="(e) => handleLocalization(e.target.innerText)"
      >
        English
      </li>
      <li
        class="px-5 border-l-4 border-transparent hover:border-l-red-500 transition-all ease-in-out"
        @click="(e) => handleLocalization(e.target.innerText)"
      >
        ქართული
      </li>
    </ul>
  </div>
</template>
