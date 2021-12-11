const mongoose = require('mongoose')

// const { ObjectId } = mongoose.Schema
const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema({
  // userId: { type: ObjectId },
  // businessId: { type: ObjectId },
  comment: { type: String },
  rating: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  business: { type: Schema.Types.ObjectId, ref: 'Business' },
})

module.exports = mongoose.model('Review', reviewSchema, 'reviews')
