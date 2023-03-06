const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const bp = require('body-parser')

blogRouter.use(bp.json())
blogRouter.use(bp.urlencoded({extended: true}))

blogRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)

    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = blogRouter
