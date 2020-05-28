import React from 'react'
import TodoItem from '../TodoItem/Item'
import './List.scss'

const TodoList = ({ items }) => {
  return (
    <div className='todo-list'>
      {items.map((item, i) => {
        return <TodoItem key={i} text={item.text} />
      })}
    </div>
  )
}

export default TodoList
