import React, { Component } from 'react'
import TodoItem from '../TodoItem/Item'

import './List.scss'

const TodoItems = [...Array(5).keys()].map((id) => {
  return { id: id + 1, text: `This is a todo item ${id + 1}` }
})

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      draggedTodoId: null,
    }

    this.placeholder = document.createElement('div')
    this.placeholder.className = 'placeholder'
    this.placeholder.innerText = 'Drop here'
  }

  componentDidMount() {
    this.setState({ todos: TodoItems })
  }

  handleDragStart = (event, todoId) => {
    this.oldY = 0
    this.dragged = event.currentTarget
    this.placeholder.style.height = this.dragged.clientHeight + 'px'
    this.setState({ draggedTodoId: todoId })
  }

  handleDragOver = (event) => {
    event.preventDefault()

    if (
      event.currentTarget === this.placeholder ||
      !event.target.classList.contains('todo-item')
    )
      return

    this.dragged.style.display = 'none'
    this.over = event.target

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
    event.target.classList.remove('over')
    const { todos, draggedTodoId } = this.state

    const from = todos.indexOf(
      todos.filter((item, i) => i === draggedTodoId)[0]
    )
    const to = Number(this.over.id)

    todos.splice(to, 0, todos.splice(from, 1)[0])

    this.setState({ todos })
  }

  handleDragEnd = (event) => {
    this.dragged.style.display = 'flex'
    this.placeholder.parentNode.removeChild(this.placeholder)
  }

  render() {
    return (
      <div
        className='todo-list'
        onDragOver={(event) => this.handleDragOver(event)}
        onDrop={(event) => this.handleDrop(event)}>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={`todo-${i}`}
              id={i}
              text={`${todo.text}`}
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
