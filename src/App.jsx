import React from 'react'
import TodoList from './components/TodoList/List'

import './App.scss'

const TodoItemData = {
  text: 'This is a todo item',
}

const TodoItems = [TodoItemData, TodoItemData, TodoItemData, TodoItemData]

function App() {
  return (
    <div className='App'>
      <TodoList items={TodoItems} />
    </div>
  )
}

export default App
