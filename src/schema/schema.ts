import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import authorResolvers from './resolvers/author'
import bookResolvers from './resolvers/book'

const typeDefs = importSchema('./src/schema/types/schema.graphql')
const resolvers = {
  Query: { ...authorResolvers.Query, ...bookResolvers.Query },
  Mutation: { ...authorResolvers.Mutation, ...bookResolvers.Mutation },
  Author: authorResolvers.Author,
  Book: bookResolvers.Book,
}
console.log('resolvers', resolvers)

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default schema
