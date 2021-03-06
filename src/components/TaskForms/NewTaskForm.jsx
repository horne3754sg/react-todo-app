import React from 'react'
import Joi from 'joi-browser'
import Form from '../common/form'
import { saveTask } from '../../services/taskService'

import './Forms.scss'

class NewTaskForm extends Form {
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

    // save the new task
    const { data: newTask } = await saveTask(this.state.data)

    tasks.push(newTask)

    // update the tasks which will refesh the view
    this.props.updateTasks(tasks)

    // close the form
    this.props.onCancel()
  }

  render() {
    return (
      <div>
        <form>
          {this.renderInput({
            name: 'title',
            placeholder: 'e.g. Attend Death star destruction meeting at 2pm',
          })}
          <div className='button-group'>
            {this.renderButton('Add Task', {
              classes: 'primary-btn',
              fieldName: 'add-task',
              requiredValidation: true,
              onClick: this.handleSubmit,
            })}
            {this.renderButton('Cancel', {
              classes: 'cancel-btn text-btn',
              fieldName: 'cancel',
              onClick: this.props.onCancel,
            })}
          </div>
        </form>
      </div>
    )
  }
}

export default NewTaskForm
