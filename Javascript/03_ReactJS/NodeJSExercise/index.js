const express = require('express')
const morgan = require('morgan')
const bp = require('body-parser')
const { request, response } = require('express')
const app = express()

//Net Token for morgen
morgan.token('bodyDetails', function (req, res){
    console.log(req.body);
    return JSON.stringify(req.body)
})

app.use(morgan(function(tokens, req, res){
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        tokens.bodyDetails(req, res)  
    ].join(' ')
}))

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
] 

//Present Default screen 

app.get('/info', (request, response)=>{
    const serverInfo = `
    <h1>Phonbook Info</h1>
    <div>Phonebook has info for ${persons.length} people</div>
    <div>${Date()}</div>
    `
    response.send(serverInfo)
})

//Fetch All data
app.get('/api/persons', (requests, response) =>{
    console.log("person Request");
    response.json(persons)
})

//Fetch Single Data
app.get('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id)
    const person = persons.find(person =>person.id === id)

    if (person) {
        response.json(person)
    } else{
        response.status(404).end()
    }
})

//Feleting Single Data Entry
app.delete('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id)
    persons = persons.filter(person =>person.id !== id)

    console.log(persons);
    response.status(204).end()

})

const generateNewID = () =>{
    const maxID = persons.length > 0
    ? Math.max(...persons.map(person => person.id))
    : 0

    return maxID + 1
}

//Adding new Entry
app.post('/api/persons/', (request, response)=>{
    const body = request.body
    const nameExists = persons.filter(person => person.name === body.name)

    if (!body.name || nameExists.length>0) {
        if (nameExists.length>0){
            return response.status(400).json({
                error: 'User already exists'
            })
        }
        
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newPerson = {
        name: body.name,
        number: body.number,
        id: generateNewID()        
    }

    persons = persons.concat(newPerson)

    response.json(newPerson)
})

const unkownEndpoint = (request, response) =>{
    response.status(404).send({
        error: 'unkown endpoint'
    })
}

app.use(unkownEndpoint)

//Create Server PORT 3001
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
