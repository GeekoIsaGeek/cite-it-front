import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher
export const echo = new Echo({
  authEndpoint: `${import.meta.env.VITE_SERVER_URL}/broadcasting/auth`,
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
  auth: {
    withCredentials: true
  }
})

export const likesChannel = echo.channel('likes')
export const commentsChannel = echo.channel('comments')
