const Business = require('../models/business')

// Create Business
const createBusiness = async (req, res, next) => {
  const {
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
  } = req.body

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
  } catch (error) {
    return next(error)
  }
  res.json({ business })
}

// Get All Businesses
const getBusinesses = async (req, res, next) => {
  let businesses

  try {
    businesses = await Business.find().populate({
      path: 'reviews',
      select: 'comment rating',
    })
  } catch (error) {
    return next(error)
  }
  res.json({
    businesses: businesses.map(business => business.toObject({ getter: true })),
  })
}

// app.get('/publishers', async (req, res) => {
//   try {
//      const data = await Publisher.find()
//                                 .populate({path: 'booksPublished', select: 'name publishYear author'});
//      res.status(200).json({success: true, data});
//   } catch (err) {
//      res.status(400).json({success: false, message:err.message});
//   }
// })
// Update Business
const updateBusiness = async (req, res, next) => {
  const businessId = req.params.id

  const {
    userId,
    businessName,
    description,
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
  } = req.body

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
const getAllReviews = async (req, res, next) => {
  let business
  const businessId = req.params.id

  try {
    business = await Business.findById(businessId).populate('reviews')
  } catch (error) {
    return next(error)
  }
  res.json({ business })
}

exports.getBusiness = getBusiness
exports.getBusinesses = getBusinesses
exports.createBusiness = createBusiness
exports.updateBusiness = updateBusiness
exports.deleteBusiness = deleteBusiness
exports.getAllReviews = getAllReviews
