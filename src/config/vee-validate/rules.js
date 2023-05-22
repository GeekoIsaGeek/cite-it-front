import { configure, defineRule } from 'vee-validate'
import { email, min, required } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

configure({
  validateOnInput: true
})
