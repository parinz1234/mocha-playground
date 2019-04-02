let supertest = require('supertest')
const app = require('../app')

request = supertest.agent(app)

describe('GET /', () => {
    it('should response success', done => {
        request
            .get('/')
            .expect(200, done)
    })
})

describe('GET /user', () => {
    it('name of json should be john', done => {
        request
            .get('/user')
            .expect(200, {
                name: 'john'
            }, done)
    })
})