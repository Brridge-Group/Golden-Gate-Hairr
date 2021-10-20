const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const businessSchema = new mongoose.Schema({
  userId: { type: ObjectId },
  businessName: { type: String },
  description: { type: String },
  createDate: { type: Date, default: Date.now },
  address1: { type: String },
  address2: { type: String },
  zipCode: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  mainPicture: { type: String },
  status: { type: Number, default: 1 },
  email: { type: String },
  features: [{ type: ObjectId, ref: 'features' }],
  services: [{ type: ObjectId, ref: 'services' }]
})

// 3rd parameter to match exact collection name in the DB. Mongoose automatically finds the plural of the modal name declared here if third parameter is not present.
module.exports = mongoose.model('Business', businessSchema, 'businesses')
