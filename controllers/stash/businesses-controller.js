const Business = require('../models/business')

Business.findOne({ email: 'nikki@pelo.com' })
  .populate('reviews')
  .exec((err, reviews) => {
    console.log('Populated User ' + reviews)
    // console.log('Populated User ' + reviews)
  })

// Create Business
const createBusiness = async (req, res, next) => {
  const { businessName, description, createDate, address1, address2, zipCode, city, state, country, mainPicture, email, phone, status, userId, features, services } = req.body

  const newBusiness = new Business({
    businessName,
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
    phone,
    status,
    userId,
    features,
    services,
  })

  try {
    await newBusiness.save()
  } catch (error) {
    console.log('error', error)
    return next(error)
  }
  res.status(201).json({ business: newBusiness })
}

// Get Business
const getBusiness = async (req, res, next) => {
  let business
  const businessId = req.params.id

  try {
    business = await Business.findById(businessId)

    // business = await Business.find(businessId)
    // business.populate('reviews').exec()
  } catch (error) {
    return next(error)
  }
  res.json({ business })
}

// Get All Businesses
const getBusinesses = async (req, res, next) => {
  let businesses

  try {
    businesses = await Business.find()
  } catch (error) {
    return next(error)
  }
  res.json({
    businesses: businesses.map(business => business.toObject({ getter: true })),
  })
}
// Update Business
const updateBusiness = async (req, res, next) => {
  const businessId = req.params.id

  const { userId, businessName, description, address1, address2, zipCode, city, state, country, mainPicture, email, phone, status, features, services } = req.body

  let business

  try {
    business = await Business.findById(businessId)
  } catch (error) {
    return next(error)
  }
  business.userId = userId
  business.businessName = businessName
  business.description = description
  business.address1 = address1
  business.address2 = address2
  business.zipCode = zipCode
  business.city = city
  business.state = state
  business.country = country
  business.mainPicture = mainPicture
  business.email = email
  business.status = status
  business.phone = phone
  business.features, features
  business.services = services

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
