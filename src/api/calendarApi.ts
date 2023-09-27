import { getEnvVariables } from '@/helpers'
import axios from 'axios'

const { VITE_API_URL } = getEnvVariables()

const calendarApi = axios.create({
  baseURL: VITE_API_URL
})

// TODO: configurar interceptores

export default calendarApi
