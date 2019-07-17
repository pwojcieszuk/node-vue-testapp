import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_URL
const token = localStorage.getItem('jwt')

const params = token
  ? {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  : {}

export function get(path) {
  const url = `${apiUrl}${path}`
  return axios.get(url, params)
}
