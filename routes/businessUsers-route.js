const express = require('express')

const businessUserController = require('../controllers/businessUsers-controller')

const businessUserRouter = express.Router()

// Create Business User
businessUserRouter.post('/', businessUserController.createBusinessUser)

// Get Business User
businessUserRouter.get('/', businessUserController.getBusinessUser)

// Get All Business Users
businessUserRouter.get('/', businessUserController.getBusinessUsers)

// Update Business User
businessUserRouter.patch('/', businessUserController.updateBusinessUser)

// Delete Business User
businessUserRouter.delete('/', businessUserController.deleteBusinessUser)

module.exports = businessUserRouter
