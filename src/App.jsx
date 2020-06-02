import React, { Component } from 'react'
import TodoForm from './components/TodoForm/Form'
import TodoList from './components/TodoList/List'

import './Reset.scss'
import './App.scss'

const TodoItems = [...Array(5).keys()].map((id) => {
  return { id, title: `This is a todo item ${id + 1}` }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({ todos: TodoItems })
  }

  updateTodos = (todos) => {
    this.setState({ todos })
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='controls-container'>
            <TodoForm todos={this.state.todos} updateTodos={this.updateTodos} />
          </div>
          <TodoList todos={this.state.todos} updateTodos={this.updateTodos} />
        </div>
      </div>
    )
  }
}

export default App
