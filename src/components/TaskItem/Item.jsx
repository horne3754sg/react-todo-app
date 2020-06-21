import React from 'react'

import './Item.scss'

const TaskItem = (props) => {
  return (
    <li
      data-task-id={props.taskId}
      className='task-item'
      draggable={props.canDrag}
      onDragStart={(event) => props.onDragStart(event, props.id)}
      onDragEnd={(event) => props.onDragEnd(event)}>
      <div className='content-container'>
        <div className='task-content-text'>{props.title}</div>
      </div>
      <div className='actions-container'>
        <button className='edit'>Edit</button>
        <button className='delete' onClick={() => props.onDelete(props.taskId)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
