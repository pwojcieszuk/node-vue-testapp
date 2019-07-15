'use strict'

const fs = require('fs')
const jwt = require('jsonwebtoken')

const privateKeyFile = process.env.PRIVATE_KEY_FILE

function getToken(req, res, next) {
  const signOptions = {
    issuer: 'test',
    expiresIn: '12h',
    algorithm: 'RS256',
  }

  const privateKey = fs.readFileSync(privateKeyFile, 'utf8')
  jwt.sign({ foo: 'bar' }, privateKey, signOptions, (err, token) => {
    if (err) {
      console.log(err)
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to create token.' })
    }

    res.send({ token })
    next()
  })
}

module.exports = getToken
