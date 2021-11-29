const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  userId: { type: ObjectId },
  businessId: {type: ObjectId},
  comment: { type: String },
  rating: {type: Number, required: true}

})

module.exports = mongoose.model('Review', reviewSchema)
