const express = require('express')

const servicesController = require('../controllers/services-controller')

const servicesRouter = express.Router()

// Create Service
servicesRouter.post('/', servicesController.createService)

// Get All Services
servicesRouter.get('/', servicesController.getServices)

// Get Service By Id
servicesRouter.get('/:id', servicesController.getService)

module.exports = servicesRouter
