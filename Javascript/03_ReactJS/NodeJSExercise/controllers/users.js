const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async(request, response)=>{
    const {username, name, password}=request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username, 
        name,
        passwordHash
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})

usersRouter.get('/', async(request, response) => {
    const users = await User.find({}).populate('persons')
    response.json(users)
})


//Feleting Single Data Entry
usersRouter.delete('/:id', (request, response, next)=>{
    User.findByIdAndRemove(request.params.id)
        .then(user=>{
            response.status(204).end() 
        })
        .catch(error => {
            next(error) 
        })
})
module.exports = usersRouter
