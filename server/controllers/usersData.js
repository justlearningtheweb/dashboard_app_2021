const console = require('../helper/consoleStyle')
const fetch = require('node-fetch')
const jsonFormatter = require('../helper/jsonStringify')

const state = {
  user: []
}

function loadUser(req, res, next) {
  fetch('https://randomuser.me/api/?nat=US&results=5')
  .then(function (response) {
    return response.json()
  })
  .then(function (result) {
    return state.user = result.results
  })
  .catch(function (err) {
    console.error(`Danger unable to fetch user ${err}`)
  })
}

function getUser(req, res, next) {
  return res.status(200).send(state.user)
}

module.exports = {
  loadUser,
  getUser
}