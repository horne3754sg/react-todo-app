import React, { Component } from 'react'
import Input from './components/common/input'
import TodoList from './components/TodoList/List'

import './App.scss'

const TodoItems = [...Array(5).keys()].map((id) => {
  return { id: id + 1, text: `This is a todo item ${id + 1}` }
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
          <TodoList todos={this.state.todos} updateTodos={this.updateTodos} />
        </div>
      </div>
    )
  }
}

export default App
