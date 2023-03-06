const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const initialvalue = 0
    const sumBlogs = blogs.reduce(
        (acc, cur) => (acc+=1)*5,
        initialvalue
    )

    return sumBlogs
}

const favoriteBlog = (listOfBlogs) => {
    const maxObject = listOfBlogs.reduce((prev,cur) => {
        (prev.likes > cur.likes) ? prev : cur
    })
    return maxObject
}

const maxBlogs = (listOfBlogs) => {
    const numberOfBlogs = lodash.countBy(listOfBlogs,
        'author')
    
    const maxBlogs = Object.keys(numberOfBlogs).reduce((a,b) => numberOfBlogs[a] > numberOfBlogs[b] 
        ? {'author':a,
            'blogs': numberOfBlogs[a]}
        : {'author':b,
            'blogs': numberOfBlogs[b]}
)
    return maxBlogs
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    maxBlogs
}
