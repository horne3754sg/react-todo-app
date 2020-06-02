import http from './httpService'

const apiEndpoint = 'http://localhost:5000/api/task'

export function getTasks() {
  return http.get(apiEndpoint)
}
