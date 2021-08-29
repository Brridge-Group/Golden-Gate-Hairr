const express = require('express')

const businessUserController = require('../controllers/businessUsers-controller')

const businessUserRouter = express.Router()

// Create Business User
businessUserRouter.post('/', businessUserController.createBusinessUser)

// Get Business User
businessUserRouter.get('/:id', businessUserController.getBusinessUser)

// Get All Business Users
businessUserRouter.get('/', businessUserController.getBusinessUsers)

// Update Business User
businessUserRouter.patch('/:id', businessUserController.updateBusinessUser)

// Delete Business User
businessUserRouter.delete('/:id', businessUserController.deleteBusinessUser)

module.exports = businessUserRouter
