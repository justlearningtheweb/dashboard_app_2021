const express = require('express')
const app = express()
const PORT = 4000
const { loadUser, getUser } = require('./controllers/usersData')

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
app.get('/user/load_user', loadUser)
app.get('/user/get_user', getUser)


app.listen(PORT, function () {
  console.log('API is up and listen on port ' + PORT)
})