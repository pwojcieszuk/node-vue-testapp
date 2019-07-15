'use strict'

const auth = require('../utils/auth')
const controller = require('../controllers/hello')

module.exports = router => {
  router
    .route('/hello')
    .all(auth)
    .get(controller.get)
}
