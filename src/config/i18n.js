import { createI18n } from 'vue-i18n'
import en from '@/assets/locales/en'
import ka from '@/assets/locales/ka'
import { setLocale } from '@vee-validate/i18n'

const locale = localStorage.getItem('locale') || 'en'

export const i18n = createI18n({
  legacy: false,
  locale,
  messages: {
    en,
    ka
  }
})

export const setVeeValidateLocale = () => setLocale(locale)
