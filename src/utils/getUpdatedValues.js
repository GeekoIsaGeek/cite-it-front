export default (currentValues, initialValues) => {
  const updatedValues = {}
  for (const key in currentValues) {
    if (currentValues[key] !== initialValues[key]) {
      updatedValues[key] = currentValues[key]
    }
  }
  return updatedValues
}
