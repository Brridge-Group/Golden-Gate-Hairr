const express = require('express')

const featuresController = require('../controllers/features-controller')

const featureRouter = express.Router()

// Create Feature
featureRouter.post('/', featuresController.createFeature)

// Get All Features
featureRouter.get('/', featuresController.getFeatures)

// Get Feature By Id
featureRouter.get('/:id', featuresController.getFeature)

module.exports = featureRouter
