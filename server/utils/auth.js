'use strict'

const fs = require('fs')
const jwt = require('jsonwebtoken')

const publicKeyFile = process.env.PUBLIC_KEY_FILE

function verifyToken(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' })

  const publicKey = fs.readFileSync(publicKeyFile, 'utf8')
  jwt.verify(
    token,
    publicKey.trim(),
    { algorithms: ['RS256'] },
    (err, decoded) => {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: err, token, pubkey: publicKey })

      console.log(decoded)
      next()
    }
  )
}

module.exports = verifyToken
