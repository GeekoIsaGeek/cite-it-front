export const editsAreMadeInBothLanguages = (data, field_en, field_ka) => {
  if (
    (field_en in data === true && field_ka in data === false) ||
    (field_en in data === false && field_ka in data === true)
  ) {
    return false
  }
  return true
}
