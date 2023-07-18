export const getServerErrorMessages = (error) => {
  console.log(error)
  if ('response' in error) {
    return Object.values(error.response.data.errors)?.map((error) => error[0])
  }
  if ('message' in error) {
    return [error]
  }
  if (error.response.data.error) {
    return [error.response.data.error]
  }
}
