import React from 'react'
import Joi from 'joi-browser'

import Form from '../common/form'
import { saveTask } from '../../services/taskService'

import './Forms.scss'

// TODO - focus on input when clicking edit
// TODO - update tasks in the APP state once saved
class EditTaskForm extends Form {
  state = {
    data: {
      _id: '',
      title: '',
    },
    errors: {},
  }

  schema = {
    _id: Joi.string().required(),
    title: Joi.string().label('Title').required(),
  }

  async populateTask() {
    this.setState({ data: this.mapToViewModel(this.props.task) })
  }

  async componentDidMount() {
    await this.populateTask()
  }

  mapToViewModel(task) {
    return {
      _id: task._id,
      title: task.title,
    }
  }

  doSubmit = async () => {
    await saveTask(this.state.data)
    this.props.onCancel()
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
          {this.renderButton('Save', {
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
