const Feature = require('../models/feature')

// Create Feature
const createFeature = async (req, res, next) => {
  const { name, description } = req.body
  const newFeature = new Feature({
    name,
    description,
  })
  try {
    await newFeature.save()
  } catch (error) {
    console.log('error', error)
    return next(error)
  }
  res.status(201).json({ feature: newFeature })
}

// Get All Features
const getFeatures = async (req, res, next) => {
  let features

  try {
    features = await Feature.find()
  } catch (error) {
    return next(error)
  }
  res.json({
    features: features.map(feature => feature.toObject({ getters: true })),
  })
}

// Get Feature by Id
const getFeature = async (req, res, next) => {
  let feature

  try {
    feature = await Feature.findById(req.params.id)
  } catch (error) {
    return next(error)
  }
  res.json({ feature: feature.toObject({ getters: true }) })
}

// (Backlog) TODO: [ ] - Update Feature ?

exports.createFeature = createFeature
exports.getFeatures = getFeatures
exports.getFeature = getFeature
