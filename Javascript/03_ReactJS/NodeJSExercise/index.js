const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
	logger.info(`Server running on port ${config.PORT}`)
})

const unkownEndpoint = (request, response) =>{
    response.status(404).send({
        error: 'unkown endpoint'
    })
}

app.use(unkownEndpoint)

//Middleware Functions
const errorHandler = (error, request, response,next) => {
    console.error(error.message)
    if(error.name === 'CastError'){
        return response.status(400).end({error: 'malformatted id'})
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({error: error.message})
    }

    next(error)
}

app.use(errorHandler)

