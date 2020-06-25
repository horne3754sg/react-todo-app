import React, { Component } from 'react'
import TaskList from './components/TaskList/List'
import TaskControls from './components/TaskControls/Controls'
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

  toggleTaskForm = () => {
    const showForm = !(this.state.showForm === true)
    this.setState({ showForm })
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <TaskList
            tasks={this.state.tasks}
            updateTasks={this.updateTasks}
            deleteTask={this.deleteTask}
          />
          <TaskControls
            showForm={this.state.showForm}
            tasks={this.state.tasks}
            updateTasks={this.updateTasks}
            onToggle={this.toggleTaskForm}
          />
        </div>
      </div>
    )
  }
}

export default App
