import Author from '../../models/author'
import Book from '../../models/book'

const resolvers = {
  Query: {
    Author(source: any, args: any) {
      return Author.findById(args.id)
    },
    AllAuthors() {
      return Author.find({})
    },
  },
  Author: {
    Books(source: any, args: any) {
      return Book.find({ author: source.id })
    },
  },
  Mutation: {
    addAuthor(source: any, args: any) {
      const { name, age } = args
      const author = new Author({ name, age })
      return author.save()
    },
  },
}

export default resolvers
