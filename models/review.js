const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  userId: { type: ObjectId },
  businessId: {type: ObjectId},
  review: { type: String },
  rating: {type: Number}

})

module.exports = mongoose.model('Review', reviewSchema)
