const Joi = require('@hapi/joi')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: String,
})

const Task = mongoose.model('Task', taskSchema)

function validateTask(task) {
  const schema = Joi.object({
    title: Joi.string().required(),
  })

  return schema.validate(task)
}

exports.Task = Task
exports.validate = validateTask
