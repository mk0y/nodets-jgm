import { model, Schema } from 'mongoose'
import Author from './author'

const bookSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  genre: String,
  name: { type: String, unique: true },
})

bookSchema.pre('save', function(next) {
  const authorId = this.toObject().author
  Author.findById(authorId).then(function(authorDoc) {
    console.log('authorDoc', authorDoc)
    if (!authorDoc) {
      next(new Error('Author not found'))
    } else {
      next()
    }
  })
})

export default model('Book', bookSchema)
