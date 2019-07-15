'use strict'

const getToken = require('../utils/get-token')

module.exports = router => {
  router.route('/tokens').get(getToken)
}
