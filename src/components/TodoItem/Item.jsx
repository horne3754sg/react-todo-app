import React from 'react'

import './Item.scss'

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      <div className='content-container'>{props.text}</div>
      <div className='controls-container'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
