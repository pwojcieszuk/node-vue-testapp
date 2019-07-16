'use strict'

const hello = require('./hello')
const tokens = require('./tokens')

module.exports = router => {
  tokens(router)
  hello(router)
  return router
}
