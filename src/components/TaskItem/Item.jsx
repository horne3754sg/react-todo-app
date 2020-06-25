import React, { Component } from 'react'
import EditTaskForm from '../TaskForms/EditTaskForm'

import './Item.scss'

class TaskItem extends Component {
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
            <button className='edit'>Edit</button>
            <button className='delete' onClick={() => onDelete(task._id)}>
              Delete
            </button>
          </div>
        </div>
        {/* {showForm && ( */}
        <EditTaskForm task={task} />
        {/* )} */}
      </li>
    )
  }
}

export default TaskItem
