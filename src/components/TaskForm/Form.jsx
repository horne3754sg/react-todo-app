import React from 'react'
import Joi from 'joi-browser'
import Form from '../common/form'
import { saveTask } from '../../services/taskService'

import './Form.scss'

class TaskForm extends Form {
  state = {
    data: {
      title: '',
    },
    errors: {},
  }

  schema = {
    title: Joi.string().label('Title').required(),
  }

  doSubmit = async () => {
    const tasks = this.props.tasks
    const { data: newTask } = await saveTask(this.state.data)

    tasks.push(newTask)

    // update the tasks which will refesh the view
    this.props.updateTasks(tasks)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput({
            name: 'title',
            placeholder: 'e.g. Attend Death star destruction meeting at 2pm',
          })}
          <div className='button-group'>{this.renderButton('Add Task')}</div>
        </form>
      </div>
    )
  }
}

export default TaskForm
