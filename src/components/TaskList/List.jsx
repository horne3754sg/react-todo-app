import React, { Component } from 'react'
import TaskItem from '../TaskItem/Item'

import { deleteTask } from '../../services/taskService'

import './List.scss'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.placeholder = document.createElement('div')
    this.placeholder.className = 'placeholder'
    this.placeholder.innerText = 'Drop here'
  }

  handleDragStart = (event, taskId) => {
    this.oldY = 0
    this.dragged = event.currentTarget
    this.draggedTaskId = taskId
    this.placeholder.style.height = this.dragged.clientHeight + 'px'
  }

  handleDragOver = (event) => {
    event.preventDefault()

    if (
      event.currentTarget === this.placeholder ||
      !event.target.classList.contains('task-item')
    )
      return

    this.over = event.target
    this.dragged.style.display = 'none'

    let direction = this.getDragDirection()
    event.target.parentNode.insertBefore(
      this.placeholder,
      direction === 'down' ? event.target.nextSibling : event.target
    )
  }

  getDragDirection = () => {
    let direction = 'none'
    if (window.event.pageY > this.oldY) direction = 'down'
    else if (window.event.pageY < this.oldY) direction = 'up'
    this.oldY = window.event.clientY
    return direction
  }

  handleDragEnter = (event) => {
    event.currentTarget.classList.add('over')
  }

  handleDragLeave = (event) => {
    event.currentTarget.classList.remove('over')
  }

  handleDrop = (event) => {
    const { tasks, updateTasks } = this.props

    const from = tasks.indexOf(
      tasks.filter((item, i) => i === this.draggedTaskId)[0]
    )
    const to = Number(this.over.id)

    console.log('from', from)
    console.log('to', to)
    tasks.splice(to, 0, tasks.splice(from, 1)[0])

    event.target.classList.remove('over')

    updateTasks(tasks)
  }

  handleDragEnd = (event) => {
    this.dragged.style.display = 'flex'
    this.placeholder.parentNode.removeChild(this.placeholder)
    this.resetDragProps()
  }

  resetDragProps() {
    this.oldY = 0
    this.dragged = null
    this.draggedTaskId = 0
  }

  handleDelete = async (taskId) => {
    const { tasks: originalTasks, updateTasks } = this.props

    // filter out the task and update the state
    const tasks = originalTasks.filter((t) => t._id !== taskId)
    updateTasks(tasks)

    // then run the API request to delete the item
    try {
      await deleteTask(taskId)
    } catch (ex) {
      // if we have an error, return the state back to its original state
      if (ex.response && ex.response.status === 404)
        console.log('Task has already been deleted.')

      updateTasks(originalTasks)
    }
  }

  render() {
    return (
      <div
        className='task-list'
        onDragOver={(event) => this.handleDragOver(event)}
        onDrop={(event) => this.handleDrop(event)}>
        {this.props.tasks.map((task, i) => {
          return (
            <TaskItem
              id={i}
              taskId={task._id}
              key={task._id}
              title={task.title}
              canDrag={true}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
              onDelete={this.handleDelete}
            />
          )
        })}
      </div>
    )
  }
}

export default TaskList
