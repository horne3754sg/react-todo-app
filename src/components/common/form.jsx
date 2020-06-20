import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from './input'

class Form extends Component {
  state = {
    data: {},
    errors: {},
  }

  validate = () => {
    const options = { abortEarly: false }
    const { error } = Joi.validate(this.state.data, this.schema, options)
    if (!error) return null

    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message
    return errors
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return this.handle

    this.doSubmit()
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    data[input.name] = input.value

    this.setState({ data, errors })
  }

  renderButton(label, options = {}) {
    const { classes, requiredValidation, onClick } = options
    return (
      <input
        type='button'
        disabled={requiredValidation ? this.validate() : ''}
        className={`btn ${classes || ''}`.trim()}
        value={label}
        onClick={onClick}
      />
    )
  }

  renderInput(args) {
    const { data, errors } = this.state
    const { name, label, placeholder, type = 'text' } = args

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
      />
    )
  }
}

export default Form
