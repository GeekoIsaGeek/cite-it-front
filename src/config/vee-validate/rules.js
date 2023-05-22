import { configure, defineRule } from 'vee-validate'
import { email, max, min, required, confirmed } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('confirmed', confirmed)

defineRule('only_lowercase', (value) => {
  return RegExp(/^[a-z][a-z0-9_.]*$/).test(value)
})

configure({
  validateOnInput: true
})
