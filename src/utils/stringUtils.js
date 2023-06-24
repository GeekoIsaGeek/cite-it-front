export const validatePassword = (password) => {
  const charCount = password.length
  const hasLowerCaseCharsOnly = RegExp(/^[a-z][a-z0-9_.]*$/).test(password)

  const min8Chars = charCount >= 8
  const max15LowerCaseChars = hasLowerCaseCharsOnly && charCount <= 15
  return { min8Chars, max15LowerCaseChars }
}
