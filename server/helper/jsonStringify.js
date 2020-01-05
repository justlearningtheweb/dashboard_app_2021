function jsonFormatter(payload) {
  return JSON.stringify(payload, null, 2)
}
module.exports = jsonFormatter