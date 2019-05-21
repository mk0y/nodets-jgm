import express, { Application, Request, Response } from 'express'
import grapqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import schema from './schema/schema'

const DB_NAME = 'mdev'
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
})
mongoose.connection.once('open', () => {
  console.log(`connected to ${DB_NAME}`)
  const app: Application = express()
  const port = 3000
  app.use('/graphql', grapqlHTTP({ schema, graphiql: true }))
  app.get('/', (req: Request, res: Response) => {
    res.send('Success!')
  })
  app.get('*', (req: Request, res: Response) => {
    res.send(404)
  })
  app.listen(port, (err: any) => {
    if (err) {
      return console.error(err)
    }
    return console.log(`server is listening on ${port}`)
  })
})
