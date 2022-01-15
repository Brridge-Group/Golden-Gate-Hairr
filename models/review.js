const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema({
  comment: { type: String },
  rating: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  business: { type: Schema.Types.ObjectId, ref: 'Business' },
  businessName: { type: String },
})

module.exports = mongoose.model('Review', reviewSchema)
