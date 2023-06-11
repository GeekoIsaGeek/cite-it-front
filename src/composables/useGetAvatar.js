import { useUserStore } from '@/stores/userStore'

const useGetAvatar = () => {
  const userStore = useUserStore()
  const serverUrl = import.meta.env.VITE_SERVER_URL
  const profilePictureLink = userStore.user.profile_picture

  if (!profilePictureLink) return null
  if (profilePictureLink.startsWith('public/')) {
    return `${serverUrl}/storage/${profilePictureLink}`
  } else {
    return profilePictureLink
  }
}

export default useGetAvatar
