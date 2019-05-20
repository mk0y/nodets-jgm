import { model, Schema } from 'mongoose'

const bookSchema = new Schema({
  authorId: String,
  genre: String,
  name: String,
})

export default model('Book', bookSchema)
