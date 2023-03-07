const mongoose=require('mongoose')
const supertest = require('supertest')
const helper = require('./test_help')
const app = require('../app')
const api = supertest(app)
const Person = require('../models/person')
const bcrypt = require('bcrypt')
const = User = require('../models/user')

const initialPersons = [
    {   "id": "63dc15651234b5ced9413bf6",
        "name": "Martin Meier Zweiter",
        "number": "123-123-1122" 
        },
    
    {   "id": "63dc15654621234ed9413bf6",
        "name": "Martin Meier Zweiter",
        "number": "123-123-1122" 
        },
]

beforeEach(async() => {
    await Person.deleteMany({})
    let personObject = new Person(helper.initialPersons[0])
    await personObject.save()
    personObject = new Person(helper.initialPersons[1])
    await personObject.save()
})

test('notes are returned as json', async() => {
    await api
        .get('/api/testphoneApp')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

test('there are two notes', async () => {
    const response = await api.get('/api/testphoneApp')

    expect(response.body).toHaveLength(helper.initialPersons.length)
})

test('the first testphone is about HTTP methods', async() => {
    const response = await api.get('/api/testphoneApp')

    expect(response.body[0].content).toBe('HTML is easy')
})

test('all notes are returned', async() => {
    const response = await api.get('/api/persons')
    expect(response.body).toHaveLength(initialPersons.length)
    
})

test('a specific note is within the returned notes', async() => {
    const response = await api.get('/api/persons')
    const contents = response.body.map(r => r.name)
    expect(contents).toContain('Martin Maier')

})

test('a valid person can be added', async()=>{
    const newPerson=
        {   "id": "63dc15651234b5ced9413bf6",
            "name": "Martin Meier Zweiter",
            "number": "123-123-1122" 
            }

    await api
        .post('/api/persons')
        .send(newPerson)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const personAtEnd = await helper.personInDb()
    expect(response.body).toHaveLength(initialPersons.length+1)
    const contents = personAtEnd.map(n=>n.name)
    expect(contents).toContain(
        'Martin Meier Zweiter'
    )
    
})

describe('when there is initially one user in db', ()=>{
    beforeEach(async() => {
        await User.deleteMany({})
        const passwordHash = await bcrypt.hash('sekret', 10)
        const user = new User({
            username:'root',
            passwordHash
        })

        await user.save()
    })



    test('creation succeeds with a fresh username', async() => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username:'mluukkai',
            name: 'Matti Luukkainen',
            password: 'salainen'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length+1)

        const usernames = usersAtEnd.map(u=>u.username)
        expect(usernames).toContain(newUser.username)
    })

    test('creation fails with proper statuscode and message if username already taken', async() => {
        const usersAtStart = await helper.usersInDb()

        const newUser ={
            username:'root',
            name: 'Superuser',
            password: 'salainen'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        
        expect(result.body.error).toContain('expected `username`to be unique')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toEqual(usersAtStart)
    })
})



afterAll(async () => {
    await mongoose.connection.close()
})
