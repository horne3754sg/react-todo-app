import http from './httpService'

const apiEndpoint = 'http://localhost:5000/api/task'

function taskUrl(id) {
  return `${apiEndpoint}/${id}`
}

export function getTasks() {
  return http.get(apiEndpoint)
}

export function saveTask(task) {
  // check for _id and save existing tasks
  if (task._id) {
    const body = { ...task }
    delete body._id
    return http.put(taskUrl(task._id))
  }

  // otherwise save as new
  return http.post(apiEndpoint, task)
}

export function saveAllTasks(tasks) {
  return http.put(`${apiEndpoint}/all`, tasks)
}
