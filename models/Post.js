const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  body: {
    type: String,
    trim: true
  },
  author: String,
  posted: {
    type: Date,
    default: Date.now()
  },
  votes: {
    type: Number,
    default: 1
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'Author'
  }
});

module.exports = mongoose.model('Post', postSchema);
