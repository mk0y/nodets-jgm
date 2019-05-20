import Book from '../../models/book'

const resolvers = {
  Query: {
    books(source: any, args: any) {
      return Book.find({})
    },
  },
}

export default resolvers
