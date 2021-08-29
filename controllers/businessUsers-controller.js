const mongoose = require('mongoose')

const businessUser = require('../models/businessUser')

// Create Business User
const createBusinessUser = async (req, res, next) => {
  const { firstName, lastName, email, password, passwordConfirm } = req.body

  const newBusinessUser = new BusinessUser({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    businessName,
    businessDescription,
    businessAddress,
    businessRating
  })

  try {
    await newBusinessUser.save()
  } catch (error) {
    const errorMessage = new HttpError(
      'An error occurred during the creation of a new business user. Please try again.' +
        error,
      500
    )
    return next(errorMessage)
  }
  res.status(201).json({ businessUser: newBusinessUser })
}

// Get Business User
const getBusinessUser = async (req, res, next) => {
  let businessUser

  const businessUserId = req.params.id

  try {
    businessUser = await businessUser.findById(businessUserId)
  } catch (error) {
    return next(error)
  }
  res.json({ businessUser })
}

// Get All Business Users
const getBusinessUsers = async (req, res, next) => {
  let businessUsers
  try {
    businessUsers = await businessUser.find()
  } catch (error) {
    const errorMessage = new HttpError(
      'An error occurred while retrieving the list of business users. Please try again.' +
        error,
      500
    )
    return next(errorMessage)
  }
  res.json({
    businessUsers: businessUsers.map(businessUser =>
      businessUser.toObject({ getter: true })
    )
  })
}

// Update Business User
const updateBusinessUser = async (req, res, next) => {
  const businessUserId = req.params.id

  const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    businessName,
    businessDescription,
    businessAddress,
    businessRating
  } = req.body

  let businessUser

  try {
    businessUser = await BusinessUser.findById(businessUserId)
  } catch (error) {
    return next(error)
  }

  businessUser.firstName = firstName
  businessUser.lastName = lastName
  businessUser.email = email
  businessUser.password = password
  businessUser.passwordConfirm = passwordConfirm
  businessUser.businessName = businessName
  businessUser.businessDescription = businessDescription
  businessUser.businessAddress = businessAddress
  businessUser.businessRating = businessRating

  try {
    const update = await businessUser.save()
  } catch (error) {
    return next(error)
  }
  res
    .status(200)
    .json({ businessUser: businessUser.toObject({ getters: true }) })
}

// Delete Business User
const deleteBusinessUser = async (req, res, next) => {
  let businessUser

  const businessUserId = req.params.id

  try {
    businessUser = await BusinessUser.findById(businessUserId)
  } catch (error) {
    return next(error)
  }

  try {
    if (businessUser) {
      await businessUser.remove()
    }
  } catch (error) {
    return next(error)
  }

  res.json({ message: 'Selected Business User Deleted Successfully!' })
}

exports.getBusinessUser = getBusinessUser
exports.getBusinessUsers = getBusinessUsers
exports.createBusinessUser = createBusinessUser
exports.updateBusinessUser = updateBusinessUser
exports.deleteBusinessUser = deleteBusinessUser
