const personsRouter = require('express').Router()
const Person = require('../models/person')
const bp = require('body-parser')

personsRouter.use(bp.json())
personsRouter.use(bp.urlencoded({extended: true}))

//Adding Server information
personsRouter.get('/info', (request, response)=>{
    const numberOfData = Person.length
    console.log(numberOfData)
    response.send(
        `<h1>Server Information</h1>
            <div>The number of Entries: ${numberOfData}</div>
        `
    )
})

//Fetch All data
personsRouter.get('/', (request, response) =>{
    console.log("person Request");
    Person.find({}).then(person =>{
        response.json(person)})
})


//Fetch Single Data
personsRouter.get('/:id', (request, response)=>{
    Person.findById(request.params.id).then(person=>{
        response.json(person)
    })
})

//Feleting Single Data Entry
personsRouter.delete('/:id', (request, response, next)=>{
    Person.findByIdAndRemove(request.params.id)
        .then(person=>{
            response.status(204).end() 
        })
        .catch(error => {
            next(error) 
        })
})


//Adding new Entry
personsRouter.post('/', (request, response,next)=>{
    const body = request.body

    const newPerson = new Person({
        name: body.name,
        number: body.number,
    })

    newPerson
        .save()
        .then(savedPerson =>{
            response.json(savedPerson)
        })
        .catch(error => next(error))
})

//Changing existing values
personsRouter.put('/:id', (request, response, next)=>{
    const {name, number} = request.body

    Person.findByIdAndUpdate(
        request.params.id, 
        {name, number}, 
        {new:true, runValidators:true, context:'query'})
        .then(updatePerson=>{
            console.log(updatePerson)
            response.json(updatePerson)
        })
        .catch(error=> next(error))
})

module.exports = personsRouter
