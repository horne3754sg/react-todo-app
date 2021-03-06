const { Task, validate } = require('../models/task')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const tasks = await Task.find()
  res.send(tasks)
})

router.post('/', async (req, res) => {
  // validate the request
  const { error } = validate(req.body)

  // if we have errors, send it back to the client with a 400 status
  if (error) return res.status(400).send(error.details[0].message)

  // destructure props out of the request body
  const { title } = req.body

  // create a new task and pass the props
  const task = new Task({
    title,
  })

  // Save
  await task.save()

  // Send it back to the client
  res.send(task)
})

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const task = await Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
  })

  if (!task) return res.status(404).send('The tasks could not be saved')

  res.send(task)
})

router.put('/all', async (req, res) => {
  res.send(req.body)
})

router.delete('/:id', async (req, res) => {
  const task = await Task.findByIdAndDelete({ _id: req.params.id })

  if (!task) return res.status(404).send('The task could not be found.')

  res.send(task)
})

module.exports = router
