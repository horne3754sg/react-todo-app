import React from 'react'

import './Item.scss'

const TodoItem = (props) => {
  return (
    <div
      className='todo-item'
      draggable={props.canDrag}
      onDragStart={(event) => props.onDragStart(event, props.id)}
      onDragEnter={(event) => props.onDragEnter(event)}
      onDragLeave={(event) => props.onDragLeave(event)}
      onDragEnd={(event) => props.onDragEnd(event)}>
      <div className='content-container'>{props.text}</div>
      <div className='controls-container'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
