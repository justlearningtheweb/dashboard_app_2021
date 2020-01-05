
const log = console.log
const error = console.error
const fontGroundColors = {
  black: '\x1b[30m%s\x1b[0m',
  red: '\x1b[31m%s\x1b[0m',
  green: '\x1b[32m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m',
  blue: '\x1b[34m%s\x1b[0m',
  magenta: '\x1b[35m%s\x1b[0m',
  cyan: '\x1b[36m%s\x1b[0m',
  white: '\x1b[37m%s\x1b[0m',
  crimson: '\x1b[38m%s\x1b[0m'
}
const consoleStlye = {
  log: function (payload) {
    function formatConsoleDate () {
      let date = new Date()
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      hour = ((hour < 10) ? '0' + hour: hour)
      minutes = ((minutes < 10) ? 0 + minutes: minutes)
      seconds = ((seconds < 10) ? 0 + seconds: seconds)
      return `[${hour}:${minutes}:${seconds}] `
    }
    return log.apply(console, [formatConsoleDate(new Date()) + payload])
  },
  error: function (payload) {
    function formatConsoleDate () {
      let date = new Date()
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      hour = ((hour < 10) ? '0' + hour: hour)
      minutes = ((minutes < 10) ? 0 + minutes: minutes)
      seconds = ((seconds < 10) ? 0 + seconds: seconds)
      return `[${hour}:${minutes}:${seconds}] `
    }
    return error.apply(console, [`${fontGroundColors.red}`, `${formatConsoleDate(new Date())}Error: ${payload}`])
  }
}

module.exports = consoleStlye