const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const reviewSchema = new mongoose.Schema({
  userId: { type: ObjectId },
  businessId: { type: ObjectId },
  comment: { type: String },
  rating: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  // _creator : { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Review', reviewSchema, 'reviews')
