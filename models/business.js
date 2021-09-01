const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const businessSchema = new mongoose.Schema({
  _id: { type: ObjectId },
  userId: { type: ObjectId },
  name: { type: String },
  description: { type: String },
  createDate: { type: Date },
  address1: { type: String },
  address2: { type: String },
  zipCode: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  mainPicture: { type: String },
  email: { type: String },
  status: { type: Number }
})

module.exports = mongoose.model('Business', businessSchema, 'businesses')

// 3rd parameter to match exact collection name in the DB. Mongoose automatically finds the plural of the modal name declared here if third parameter is not present.
