import axios from 'axios'

const { VITE_API_HOST } = import.meta.env

export const api = axios.create({
  baseURL: VITE_API_HOST,
})
