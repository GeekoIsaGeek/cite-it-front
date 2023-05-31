import axios from 'axios'

axios.defaults.withCredentials = 'true'
export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
