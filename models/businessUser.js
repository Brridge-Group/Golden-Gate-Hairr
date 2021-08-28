const mongoose = require('mongoose')

const businessUserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passwordConfirm: { type: String, required: true }
})

module.exports = mongoose.model('BusinessUser', businessUserSchema)
