const personsRouter = require('express').Router()
const Person = require('../models/person')
const bp = require('body-parser')
const User = require('../models/user')
const jwt = require ('jsonwebtoken')


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
personsRouter.get('/',async (request, response) =>{
    console.log("person Request")
    const Persons = await Person.find({})
    response.json(Persons)
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

//Get Token from user
const getTokenFrom = request =>{
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')){
        return authorization.replace('Bearer ', '')
    }
    return null
}

//Adding new Entry
personsRouter.post('/', async (request, response,next)=>{
    const body = request.body
    const decodeToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
    if(!decodeToken.id){
        return response.status(401).json({error: 'token invalid'})
    }
    const user = await User.findById(decodeToken.userID)

    const newPerson = new Person({
        name: body.name,
        number: body.number,
        user: user.id
    })

    newPerson
        .save()
        .then(async savedPerson =>{
            user.persons = user.persons.concat(savedPerson._id)
            await user.save()
            response.status(201).json(savedPerson)
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
