import React from 'react'

import './Item.scss'

const TodoItem = (props) => {
  return (
    <div
      id={props.id}
      className='todo-item'
      draggable={props.canDrag}
      onDragStart={(event) => props.onDragStart(event, props.id)}
      onDragEnd={(event) => props.onDragEnd(event)}>
      <div className='content-container'>{props.title}</div>
      <div className='actions-container'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
