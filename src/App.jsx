import React, { Component } from 'react'
import TodoForm from './components/TaskForm/Form'
import TodoList from './components/TaskList/List'

import Icon from './components/Icons'

import { getTasks, saveAllTasks } from './services/taskService'

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
      showForm: false,
    }
  }

  async componentDidMount() {
    const { data: tasks } = await getTasks()
    this.setState({ tasks })
  }

  updateTasks = async (tasks) => {
    // await saveAllTasks(tasks)
    this.setState({ tasks })
  }

  showTaskForm = () => {
    const showForm = !(this.state.showForm === true)
    this.setState({ showForm })
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <TodoList tasks={this.state.tasks} updateTasks={this.updateTasks} />
          <div className='controls-container'>
            {!this.state.showForm && (
              <button
                className='primary-btn text-btn no-p-x'
                onClick={this.showTaskForm}>
                <span className='icon-plus'>
                  <Icon icon='plus' size='14' />
                </span>{' '}
                <span className='btn-text'>add task</span>
              </button>
            )}
            {this.state.showForm && (
              <TodoForm
                tasks={this.state.tasks}
                updateTasks={this.updateTasks}
                onCancel={this.showTaskForm}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
