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
    this.placeholder.className = 'todo-item'
    this.placeholder.className = 'placeholder'
    this.placeholder.innerText = 'Drop here'
  }

  componentDidMount() {
    console.log('mounting')
    this.setState({ todos: TodoItems })
  }

  handleDragStart = (event, todoId) => {
    this.dragged = event.currentTarget
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/html', event.currentTarget)
    this.setState({ draggedTodoId: todoId })
  }

  handleDragOver = (event) => {
    event.preventDefault()

    this.dragged.style.display = 'none'

    if (event.currentTarget === this.placeholder) return

    if (!event.target.classList.contains('todo-item')) return

    this.over = event.target

    event.target.insertAdjacentElement('beforebegin', this.placeholder)
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

    const item = todos.filter((item, i) => i === draggedTodoId)[0]
    const from = todos.indexOf(item)
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
              key={i}
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
