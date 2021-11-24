const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  password2: { type: String },
  createdDate: { type: Date, default: Date.now },
  token: { type: String },
  isOwner: { type: Boolean, default: false },
  role: {
    type: String,
    enum: ['user', 'owner', 'admin'],
    default: 'user',
  },
})

module.exports = mongoose.model('User', userSchema)
