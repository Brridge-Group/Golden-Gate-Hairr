const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const reviewSchema = new mongoose.Schema({
  userId: { type: ObjectId },
  businessId: {type: ObjectId},
  comment: { type: String },
  rating: {type: Number, required: true}

})

module.exports = mongoose.model('Review', reviewSchema, 'reviews')
