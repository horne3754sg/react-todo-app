import React from 'react'
import Joi from 'joi-browser'
import Form from '../common/form'
import { saveTask } from '../../services/taskService'

import './Forms.scss'

class EditTaskForm extends Form {
  state = {
    data: {
      title: '',
    },
    errors: {},
  }

  schema = {
    title: Joi.string().label('Title').required(),
  }

  async populateTask() {
    this.setState({ data: this.props.task })
  }

  async componentDidMount() {
    await this.populateTask()
  }

  doSubmit = async () => {
    // const tasks = this.props.tasks
    // // save the new task
    // const { data: newTask } = await saveTask(this.state.data)
    // tasks.push(newTask)
    // // update the tasks which will refesh the view
    // this.props.updateTasks(tasks)
    // // close the form
    // this.props.onCancel()
  }

  render() {
    const { onCancel } = this.props
    return (
      <form>
        {this.renderInput({
          name: 'title',
          placeholder: 'e.g. Attend Death star destruction meeting at 2pm',
        })}
        <div className='button-group'>
          {this.renderButton('Save Task', {
            classes: 'primary-btn',
            fieldName: 'save-task',
            requiredValidation: true,
            onClick: this.handleSubmit,
          })}
          {this.renderButton('Cancel', {
            classes: 'cancel-btn text-btn',
            fieldName: 'cancel',
            onClick: onCancel,
          })}
        </div>
      </form>
    )
  }
}

export default EditTaskForm
