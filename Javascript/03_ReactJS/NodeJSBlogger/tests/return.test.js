const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blog = []

    const result = listHelper.dummy(blog)
    expect(result).toBe(1)
})

describe('total likes',() => {

    const blog = [
        {
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
      ]

    const listOfBlogs = [
        {'author': 'Marc',
         'likes':10
        },
        {'author': 'Marc',
         'likes':10
        },
        {'author': 'Martin',
         'likes':10
        },
    ]
    test('of empty list is zero', () => {
        const blog = []
        const result = listHelper.totalLikes(blog)
        expect(result).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.totalLikes(blog)
        expect(result).toBe(5)
    })

    test('of a bigger list is calculated right',() => {
        const result = listHelper.totalLikes(blog)
        expect(result).toBe(5)
    } )

    test('of the most likes in DataRoom', () => {
        const testResult ={
          _id: '5a422aa71b54a676234d17f8',
          title: 'Go To Statement Considered Harmful',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
          likes: 5,
          __v: 0
        }
        const result = listHelper.favoriteBlog(blog)
        expect(result).toEqual(testResult)
    })

    test('of Blogger with the most Blogs', () => {
        testResult = {
            'author':'Marc',
            'blogs': 2
        }
        const result = listHelper.maxBlogs(listOfBlogs)
        expect(result).toEqual(testResult)

    })
})
