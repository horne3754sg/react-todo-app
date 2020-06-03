import React, { Component } from 'react'
import TaskItem from '../TaskItem/Item'

import './List.scss'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.placeholder = document.createElement('div')
    this.placeholder.className = 'placeholder'
    this.placeholder.innerText = 'Drop here'
  }

  handleDragStart = (event, todoId) => {
    this.oldY = 0
    this.dragged = event.currentTarget
    this.draggedTodoId = todoId
    this.placeholder.style.height = this.dragged.clientHeight + 'px'
  }

  handleDragOver = (event) => {
    event.preventDefault()

    if (
      event.currentTarget === this.placeholder ||
      !event.target.classList.contains('todo-item')
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
    const { tasks } = this.props

    const from = tasks.indexOf(
      tasks.filter((item, i) => i === this.draggedTodoId)[0]
    )
    const to = Number(this.over.id)

    tasks.splice(to, 0, tasks.splice(from, 1)[0])

    event.target.classList.remove('over')

    this.props.updateTasks(tasks)
  }

  handleDragEnd = (event) => {
    this.dragged.style.display = 'flex'
    this.placeholder.parentNode.removeChild(this.placeholder)
    this.resetDragProps()
  }

  resetDragProps() {
    this.oldY = 0
    this.dragged = null
    this.draggedTodoId = 0
  }

  render() {
    return (
      <div
        className='todo-list'
        onDragOver={(event) => this.handleDragOver(event)}
        onDrop={(event) => this.handleDrop(event)}>
        {this.props.tasks.map((task, i) => {
          return (
            <TaskItem
              id={i}
              key={`todo-${i}`}
              title={`${task.title}`}
              canDrag={true}
              onDragStart={this.handleDragStart}
              onDragEnd={this.handleDragEnd}
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
            />
          )
        })}
      </div>
    )
  }
}

export default TaskList