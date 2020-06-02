import React, { Component } from 'react'
import TodoForm from './components/TodoForm/Form'
import TodoList from './components/TodoList/List'

import { getTasks } from './services/taskService'

import './Reset.scss'
import './App.scss'

// const TaskItems = [...Array(5).keys()].map((_id) => {
//   return { _id, title: `This is a todo item ${_id + 1}` }
// })

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }

  async componentDidMount() {
    const { data: tasks } = await getTasks()
    this.setState({ tasks })
  }

  updateTasks = (tasks) => {
    this.setState({ tasks })
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <TodoList tasks={this.state.tasks} updateTasks={this.updateTasks} />
          <div className='controls-container'>
            <TodoForm tasks={this.state.tasks} updateTasks={this.updateTasks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
