import { configure, defineRule } from 'vee-validate'
import { email, max, min, required, confirmed } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('confirmed', confirmed)

defineRule('only_lowercase', (value) => {
  return RegExp(/^[a-z\s][a-z0-9_\s.]*$/).test(value)
})
defineRule('only_georgian', (value) => {
  return RegExp(/^[ა-ჰ\s]*$/).test(value)
})
defineRule('only_latin', (value) => {
  return RegExp(/^[a-zA-Z\s]*$/).test(value)
})

configure({
  validateOnInput: true,

  generateMessage: localize({
    en: {
      messages: {
        min: ({ rule }) => `You must enter ${rule.params} symbols at least`,
        max: ({ rule }) => `You must enter ${rule.params} symbols at most`,
        only_lowercase: 'Only lowercase letters and numbers are allowed',
        only_georgian: 'Only georgian letters are allowed',
        only_latin: 'Only latin letters are allowed',
        required: 'This field is required'
      }
    },
    ka: {
      messages: {
        required: 'ეს ველი აუცილებლად უნდა შეავსოთ',
        min: ({ rule }) => `შეიყვანეთ მინიმუმ ${rule.params} სიმბოლო`,
        max: ({ rule }) => `შეიყვანეთ მაქსიმუმ ${rule.params} სიმბოლო`,
        confirmed: 'პაროლები არ ემთხვევა',
        only_lowercase: 'დაშვებულია მხოლოდ დაბალი რეგისტრის სიმბოლოების და ციფრების შეყვანა',
        email: 'ელ-ფოსტა არავალიდურია',
        only_georgian: 'დაშვებულია მხოლოდ ქართული სიმბოლოების გამოყენება',
        only_latin: 'დაშვებულია მხოლოდ ლათინური სიმბოლოების გამოყენება'
      }
    }
  })
})
