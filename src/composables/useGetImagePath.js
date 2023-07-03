export default (picture) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL

  if (!picture) return null
  if (
    picture.startsWith('users/') ||
    picture.startsWith('posters/') ||
    picture.startsWith('quotes/')
  ) {
    return `${serverUrl}/storage/${picture}`
  } else {
    return picture
  }
}
