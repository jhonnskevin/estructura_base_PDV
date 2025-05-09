import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',  // URL del backend Django
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
