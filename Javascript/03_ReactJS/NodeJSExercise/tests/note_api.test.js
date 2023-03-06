const mongoose=requuire('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async() => {
    await api
        .get('/api/testphoneApp')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

test('there are two notes', async () => {
    const response = await api.get('/api/testphoneApp')

    expect(response.body).toHaveLength(2)
})

test('the first testphone is about HTTP methods', async() => {
    const response = await api.get('/api/testphoneApp')

    expect(response.body[0].content).toBe('HTML is easy')
})
afterAll(async () => {
    await mongoose.connection.close()
})
