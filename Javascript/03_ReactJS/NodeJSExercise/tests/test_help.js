const Person = require('../models/person')
const User = require('../models/user')

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

const nonExistingId = async() => {
    const person = new Person({name: "Martin Meier"})
    await person.save()
    await person.remove()

    return person._id.toString()
}

const personInDb = async() => {
    const person = await Person.find({})
    return person.map(persons => persons.toJSON())
}

const usersInDb = async() => {
    const users = await User.find({})
    return users.map(u=>u.toJSON())
}
module.exports = {
    initialPersons, 
    nonExistingId,
    personInDb,
    usersInDb
}
