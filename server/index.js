'use strict'

require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/index.js')

const app = express()
const router = express.Router()

const environment = process.env.NODE_ENV
const stage = require('./config')[environment]

const port = stage.port || 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

if (environment !== 'production') {
  app.use(logger('dev'))
}

app.use('/api/v1', cors(), routes(router))

const server = app.listen(`${port}`, () => {
  console.log(`Server now listening at localhost:${port}`)
})

module.exports = server
