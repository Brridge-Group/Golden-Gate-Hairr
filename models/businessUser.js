const mongoose = require('mongoose')

const businessUserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passwordConfirm: { type: String, required: true },
  businessName: { type: String },
  businessDescription: { type: String },
  businessAddress: { type: String },
  businessRating: { type: String }
})

module.exports = mongoose.model('BusinessUser', businessUserSchema)
