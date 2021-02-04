const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please provide the title',
  },
  author: {
    type: String,
    required: 'Please provide the author',
  },
  body: {
    type: String,
    required: 'Please provide the body',
  },
})

const Post = mongoose.model('Post', schema)

module.exports = Post
