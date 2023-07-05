import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import request from '@/config/axiosInstance'

window.Pusher = Pusher

export const echo = new Echo({
  broadcaster: 'pusher',
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
  authorizer: (channel) => {
    return {
      authorize: (socketId, callback) => {
        request
          .post('/broadcasting/auth', {
            socket_id: socketId,
            channel_name: channel.name
          })
          .then((response) => {
            callback(null, response.data)
          })
          .catch((error) => {
            callback(error)
          })
      }
    }
  }
})

export const likesChannel = echo.channel('likes')
export const commentsChannel = echo.channel('comments')
