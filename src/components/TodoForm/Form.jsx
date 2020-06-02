import React from 'react'
import Joi from 'joi-browser'
import Form from '../common/form'

import './Form.scss'

class TodoForm extends Form {
  state = {
    data: {
      title: '',
    },
    errors: {},
  }

  schema = {
    title: Joi.string().label('Title').required(),
  }

  doSubmit = () => {
    // this will connect to a service which will save the data
    // for now, just add it to the array
    const todos = this.props.todos
    const newTodo = { id: todos.length, ...this.state.data }
    todos.push(newTodo)
    this.props.updateTodos(todos)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          <div className='button-group'>{this.renderButton('Submit')}</div>
        </form>
      </div>
    )
  }
}

export default TodoForm
