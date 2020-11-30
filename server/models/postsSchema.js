const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postsSchema = new Schema({
  post: {
    type: String
  }
})

const Posts = mongoose.model('posts', postsSchema)

module.exports = Posts