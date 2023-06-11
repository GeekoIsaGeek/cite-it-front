export const getServerErrorMessages = (error) => {
  if (error.response.data.error) {
    return [error.response.data.error]
  } else {
    return Object.values(error.response.data.errors)?.map((error) => error[0])
  }
}
