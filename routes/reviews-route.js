const express = require('express')

const reviewsController = require('../controllers/reviews-controller')

const reviewRouter = express.Router()

// Create Review
reviewRouter.post('/', reviewsController.createReview)

// Get Review
reviewRouter.get('/:id', reviewsController.getReview)

// Get All Reviews
reviewRouter.get('/', reviewsController.getReview)

// Update Review
reviewRouter.patch('/:id', reviewsController.updateReview)

// Delete Review
reviewRouter.delete('/:id', reviewsController.deleteReview)

module.exports = reviewRouter
