import React, { Component } from 'react'
import EditTaskForm from '../TaskForms/EditTaskForm'

import './Item.scss'

class TaskItem extends Component {
  state = {
    showForm: false,
  }

  toggleEditForm = () => {
    const showForm = !this.state.showForm
    this.setState({ showForm })
  }

  render() {
    const { task, onDelete } = this.props

    return (
      <li
        data-task-id={task._id}
        className='task-item'
        // draggable={props.canDrag}
        // onDragStart={(event) => props.onDragStart(event, props.id)}
        // onDragEnd={(event) => props.onDragEnd(event)}
      >
        <div className='task-container'>
          <div className='content-container'>
            <div className='task-content-text'>{task.title}</div>
          </div>
          <div className='actions-container'>
            <button className='edit' onClick={this.toggleEditForm}>
              Edit
            </button>
            <button className='delete' onClick={() => onDelete(task._id)}>
              Delete
            </button>
          </div>
        </div>
        {this.state.showForm && (
          <div className='task-edit-container'>
            <EditTaskForm task={task} onCancel={this.toggleEditForm} />
          </div>
        )}
      </li>
    )
  }
}

export default TaskItem
