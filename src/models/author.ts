import { model, Schema } from 'mongoose'

const authorSchema = new Schema({
  age: Number,
  name: String,
})

export default model('Author', authorSchema)
