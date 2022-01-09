const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  comment: { type: String },
  rating: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  email: { type: String },
  businessName: { type: String },
  toJSON: {
    virtuals: { type: Boolean, default: true },
  },
})

module.exports = mongoose.model('Review', reviewSchema)
