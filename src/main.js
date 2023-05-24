import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from '@/assets/locales/en'
import ka from '@/assets/locales/ka'
import '@/config/vee-validate/rules'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  messages: {
    en,
    ka
  }
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
