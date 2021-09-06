const mongoose = require('mongoose')

const business = require('../models/business')

// Create Business
const createBusiness = async (req, res, next) => {
  const {
    _id,
    userId,
    name,
    description,
    createDate,
    address1,
    address2,
    zipCode,
    city,
    state,
    country,
    mainPicture,
    email,
    status
  } = req.body

  const newBusiness = new Business({
    _id,
    userId,
    name,
    description,
    createDate,
    address1,
    address2,
    zipCode,
    city,
    state,
    country,
    mainPicture,
    email,
    status
  })

  try {
    await newBusiness.save()
  } catch (error) {
    const errorMessage = new HttpError(
      'An error occurred during the creation of a new business. Please try again.' +
        error,
      500
    )
    return next(errorMessage)
  }
  res.status(201).json({ business: newBusiness })
}

// Get Business
const getBusiness = async (req, res, next) => {
  let business

  const businessId = req.params.id

  try {
    business = await business.findById(businessId)
  } catch (error) {
    return next(error)
  }
  res.json({ business })
}

// Get All Businesses
const getBusinesses = async (req, res, next) => {
  let businesses

  try {
    businesses = await business.find()
  } catch (error) {
    const errorMessage = new HttpError(
      'An error occurred while retrieving the list of businesses. Please try again.' +
        error,
      500
    )
    return next(errorMessage)
  }
  res.json({
    businesses: businesses.map(business => business.toObject({ getter: true }))
  })
}

// Update Business
const updateBusiness = async (req, res, next) => {
  const businessId = req.params.id

  const {
    _id,
    userId,
    name,
    description,
    createDate,
    address1,
    address2,
    zipCode,
    city,
    state,
    country,
    mainPicture,
    email,
    status
  } = req.body

  let business

  try {
    business = await Business.findById(businessId)
  } catch (error) {
    return next(error)
  }

  business._id = _id
  business.userId = userId
  business.name = name
  business.description = description
  business.createDate = createDate
  business.address1 = address1
  business.address2 = address2
  business.zipCode = zipCode
  business.city = city
  business.state = state
  business.country = country
  business.mainPicture = mainPicture
  business.email = email
  business.status = status

  try {
    const update = await business.save()
  } catch (error) {
    return next(error)
  }
  res.status(200).json({ business: business.toObject({ getters: true }) })
}

// Delete Business
const deleteBusiness = async (req, res, next) => {
  let business

  const businessId = req.params.id

  try {
    business = await Business.findById(businessId)
  } catch (error) {
    return next(error)
  }

  try {
    if (business) {
      await business.remove()
    }
  } catch (error) {
    return next(error)
  }

  res.json({ message: 'Selected Business Deleted Successfully!' })
}

exports.getBusiness = getBusiness
exports.getBusinesses = getBusinesses
exports.createBusiness = createBusiness
exports.updateBusiness = updateBusiness
exports.deleteBusiness = deleteBusiness
