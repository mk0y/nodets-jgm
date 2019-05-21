import Author from '../../models/author'
import Book from '../../models/book'

const resolvers = {
  Query: {
    Book(source: any, args: any) {
      return Book.findById(args.id)
    },
    AllBooks() {
      return Book.find({})
    },
  },
  Book: {
    Author(source: any, args: any) {
      console.log('source2', source)
      return Author.findById(source.author)
    },
  },
  Mutation: {
    addBook(source: any, args: any) {
      console.log('argsBook', args)
      const { name, genre, authorId } = args
      const book = new Book({ name, genre, author: authorId })
      return book.save()
    },
  },
}

export default resolvers
