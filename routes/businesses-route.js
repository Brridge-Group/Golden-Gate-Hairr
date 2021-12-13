const express = require('express')

const businessesController = require('../controllers/businesses-controller')

const businessRouter = express.Router()

// Create Business
businessRouter.post('/', businessesController.createBusiness)

// Get Business
businessRouter.get('/:id', businessesController.getBusiness)

// Get All Businesses
businessRouter.get('/', businessesController.getBusinesses)

// Update Business
businessRouter.patch('/:id', businessesController.updateBusiness)

// Delete Business
businessRouter.delete('/:id', businessesController.deleteBusiness)

// get all reviews
businessRouter.get('/:id/reviews', businessesController.getAllReviews)

module.exports = businessRouter
