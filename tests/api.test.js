'use strict'

// eslint-disable-next-line node/no-unpublished-require
const request = require('supertest')
const server = require('../index')
const auth = require('../utils/auth')

const apiBaseUrl = '/api/v1/'

jest.mock('../utils/auth')

afterAll(done => {
  jest.unmock('../utils/auth')
  server.close(done)
})

describe('/tokens', () => {
  it('suceeds', done => {
    request(server)
      .get(`${apiBaseUrl}tokens`)
      .expect(200)
      .end((err, res) => {
        expect(JSON.parse(res.text)).toHaveProperty('token')
        return done()
      })
  })
})

describe('/hello', () => {
  it('is protected by auth util', done => {
    request(server)
      .get(`${apiBaseUrl}hello`)
      .end(() => {
        expect(auth).toHaveBeenCalled()
        return done()
      })
  })
  it('uses token obtained from the api', done => {
    server.close(() => {
      server.listen(3001, () => {
        request(server)
          .get(`${apiBaseUrl}hello`)
          .expect(200, done)
      })
    })
  })
})
