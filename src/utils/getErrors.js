export const getServerErrorMessages = (error) => {
  if (error.response.data.error) {
    return [error.response.data.error]
  }
  if (error.response.data.errors) {
    return Object.values(error.response.data.errors)?.map((error) => error[0])
  }
  if ('message' in error) {
    return [error]
  }
}
