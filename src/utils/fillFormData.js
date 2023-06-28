export default (dataObject, exception) => {
  const formData = new FormData()
  Object.entries(dataObject).forEach(([key, value]) => {
    if (key !== exception) {
      formData.append(key, value)
    }
  })
  return formData
}
