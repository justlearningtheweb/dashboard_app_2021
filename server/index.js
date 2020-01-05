const express = require('express')
const app = express()
const PORT = 4000
const console = require('./helper/consoleStyle')
const fetch = require('node-fetch')
const jsonFormatter = require('./helper/jsonStringify')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/', function (req, res) {
  res.send('This is entry point working')
})

// Endpoint
app.get('/get_user', function (req, res, next) {
  console.log('enter meeee')
  fetch('https://randomuser.me/api/?nat=US&results=1')
  .then(function (response) {
    return response.json()
  })
  .then(function (result) {
     console.log(jsonFormatter(result))
  })
  .catch(function (err) {
    console.error(`Danger unable to fetch user ${err}`)
  })
})
app.listen(PORT, function () {
  console.log('API is up and listen on port ' + PORT)
})
