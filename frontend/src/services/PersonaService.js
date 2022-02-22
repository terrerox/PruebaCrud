import { httpClient } from '../helpers'
const personaService = {}

personaService.getAll = () => {
  return httpClient.get('persona')
    .then(response => response.data.data)
}

personaService.update = (persona) => {
  return httpClient.put('persona', persona)
    .then(response => response.data.data)
}

personaService.add = (persona) => {
  return httpClient.post('persona', persona)
    .then(response => response.data.data)
}

personaService.delete = (id) => {
  return httpClient.delete(`persona/${id}`)
    .then(response => response.data.data)
}

export default personaService