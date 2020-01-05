const express = require('express')
const app = express()
const PORT = 4000
const console = require('./helper/consoleStyle')

app.get('/', function (req, res) {
  res.send('This is entry point working')
})

app.listen(PORT, function () {
  console.log('API is up and listen on port ' + PORT)
})
