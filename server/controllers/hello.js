'use strict'

module.exports = {
  get: (req, res) => res.send({ msg: 'Hello!' }),
  post: (req, res) => res.send({ msg: 'Post hello!' }),
}
