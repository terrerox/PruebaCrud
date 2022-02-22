import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://localhost:5001/api/'
})

export const formatDate = (dateWithoutFormat) => {
  if (!dateWithoutFormat) return false
  const date = new Date(dateWithoutFormat)
  const dateFormatter = Intl.DateTimeFormat('sv-SE')
  return dateFormatter.format(date)
}