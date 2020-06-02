const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

// import Routes
const task = require('./routes/task')

// Connect to DB
mongoose
  .connect('mongodb://localhost/tasks', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log('Connect to MongoDB'))
  .catch((err) => console.log('Could not connect to MongoDB', err))

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/api/task', task)

// set PORT=5000 || export PORT=5000
app.listen(port, () => console.log(`Listening on port ${port}`))
