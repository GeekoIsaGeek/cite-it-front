import { configure, defineRule } from 'vee-validate'
import { email, max, min, required, confirmed } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('confirmed', confirmed)

defineRule('only_lowercase', (value) => {
  return RegExp(/^[a-z][a-z0-9_.]*$/).test(value)
})

configure({
  validateOnInput: true,
  generateMessage: localize({
    en: {
      messages: {
        min: 'You must enter 3 symbols at least',
        max: 'You must enter 15 symbols at most',
        only_lowercase: 'Only lowercase letters and numbers are allowed'
      }
    },
    ka: {
      messages: {
        required: 'ეს ველი აუცილებლად უნდა შეავსოთ',
        min: 'შეიყვანეთ მინიმუმ 3 სიმბოლო',
        max: 'შეიყვანეთ მაქსიმუმ 15 სიმბოლო',
        confirmed: 'პაროლები არ ემთხვევა',
        only_lowercase: 'დაშვებულია მხოლოდ დაბალი რეგისტრის სიმბოლოების და ციფრების შეყვანა',
        email: 'ელ-ფოსტა არავალიდურია'
      }
    }
  })
})
