import React from 'react'

import './Item.scss'

const TaskItem = (props) => {
  return (
    <div
      id={props._id}
      className='todo-item'
      draggable={props.canDrag}
      onDragStart={(event) => props.onDragStart(event, props._id)}
      onDragEnd={(event) => props.onDragEnd(event)}>
      <div className='content-container'>
        <div className='task-content-text'>{props.title}</div>
      </div>
      <div className='actions-container'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default TaskItem
