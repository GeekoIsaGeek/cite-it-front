const useGetImagePath = (picture) => {
  const serverUrl = import.meta.env.VITE_SERVER_URL

  if (!picture) return null
  if (picture.startsWith('public/') || picture.startsWith('posters/')) {
    return `${serverUrl}/storage/${picture}`
  } else {
    return picture
  }
}

export default useGetImagePath
