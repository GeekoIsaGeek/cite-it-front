export const editsAreMadeInBothLanguages = (data, fieldName) => {
  const passedFieldNameCount = Object.keys(data).filter((key) => key.startsWith(fieldName)).length
  return passedFieldNameCount === 0 || passedFieldNameCount === 2 //if a field is not filled at all it still passes the validation
}
