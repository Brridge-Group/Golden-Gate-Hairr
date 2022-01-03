const express = require('express')

const reviewsController = require('../controllers/reviews-controller')

const reviewRouter = express.Router()

// Create Review
reviewRouter.post('/', reviewsController.createReview)

// Get Review
reviewRouter.get('/:id', reviewsController.getReview)

// Get All Reviews
reviewRouter.get('/', reviewsController.getReviews)

// Update Review
reviewRouter.patch('/:id', reviewsController.updateReview)

// Delete Review
reviewRouter.delete('/:id', reviewsController.deleteReview)

// Create Review
reviewRouter.get('/userId', reviewsController.createReview)

module.exports = reviewRouter
