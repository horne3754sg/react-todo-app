import React, { Component } from 'react'
import NewTaskForm from '../TaskForms/NewTaskForm'
import Icon from '../Icons'

class Controls extends Component {
  render() {
    const { tasks, showForm, updateTasks, onToggle } = this.props
    return (
      <div className='controls-container'>
        {!showForm && (
          <button className='primary-btn text-btn no-p-x' onClick={onToggle}>
            <span className='icon-plus'>
              <Icon icon='plus' size='14' />
            </span>
            <span className='btn-text'>add task</span>
          </button>
        )}
        {showForm && (
          <NewTaskForm
            tasks={tasks}
            updateTasks={updateTasks}
            onCancel={onToggle}
          />
        )}
      </div>
    )
  }
}

export default Controls
