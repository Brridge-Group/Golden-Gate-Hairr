const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  password2: { type: String, required: true },
  type: { type: Number, default: 1 },
  createdDate: { type: Date, default: Date.now },
  token: { type: String },
})

module.exports = mongoose.model('User', userSchema)
