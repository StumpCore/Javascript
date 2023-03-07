const mongoose = require('mongoose')
    
//Adding a Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    number: {
        type: String,
        validate:{
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props=>`${props.vallue} is not a valid phone number!`
        },
        required:[true, 'User phone number required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})



personSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)


