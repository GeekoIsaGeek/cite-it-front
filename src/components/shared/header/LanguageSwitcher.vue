<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@vee-validate/i18n'

const { locale } = useI18n()
const showLocales = ref(false)

const handleLocalization = (language) => {
  if (language === 'English') {
    locale.value = 'en'
    setLocale('en') // this is needed to localize vee-validate error messages
    localStorage.setItem('locale', 'en')
  } else {
    locale.value = 'ka'
    setLocale('ka')
    localStorage.setItem('locale', 'ka')
  }
}
</script>

<template>
  <div
    class="flex items-center gap-1 text-white lg:mr-6 relative cursor-pointer"
    @click="() => (showLocales = !showLocales)"
  >
    <h5>{{ locale === 'en' ? 'Eng' : 'ქარ' }}</h5>
    <button>
      <i class="ri-arrow-down-s-fill text-2xl"></i>
    </button>

    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-500 ease"
      leave-active-class="transition-opacity duration-300 ease-out"
      leave-to-class="opacity-0"
    >
      <ul
        class="flex flex-col z-50 absolute top-full right-0 bg-[#FEFBEC] py-3 text-darkBlue text-lg rounded"
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
    </Transition>
  </div>
</template>
