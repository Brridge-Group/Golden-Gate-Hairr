const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new mongoose.Schema({
  todo: { type: String },
  createDate: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

module.exports = mongoose.model('Todo', todoSchema)
