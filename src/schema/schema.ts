import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import bookResolvers from './resolvers/book'

const typeDefs = importSchema('./src/schema/types/schema.graphql')
const resolvers = { ...bookResolvers }

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

export default schema
