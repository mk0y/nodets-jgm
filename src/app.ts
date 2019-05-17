import express from 'express'

const app: express.Application = express()
const port = 3000
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Success!')
})
app.listen(port, (err: any) => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${port}`)
})
