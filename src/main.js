import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n, setVeeValidateLocale } from '@/config/i18n'

import '@/config/vee-validate/rules'

import App from './App.vue'
import router from './router'

setVeeValidateLocale()
const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
