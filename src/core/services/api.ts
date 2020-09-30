import axios from 'axios'
import baseURL from '../../config/url'

const api = axios.create({
  baseURL
})

export default api
