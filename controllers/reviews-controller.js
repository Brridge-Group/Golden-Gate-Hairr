const Review = require('../models/review')
const Business = require('../models/business')
const User = require('../models/user')

const getReviews = async (req, res, next) => {
  let reviews
  try {
    reviews = await Review.find()
  } catch (error) {
    return next(error)
  }

  res.json({
    reviews: reviews.map(review => review.toObject({ getters: true })),
  })
}

const createReview = async (req, res, next) => {
  console.log(req.body)
  const { comment, rating, business, user, businessName } = req.body

  const newReview = new Review({
    comment,
    rating,
    business,
    user,
    businessName,
  })
  // review.user = req.user._id

  try {
    await newReview.save()
  } catch (error) {
    return next(error)
  }
  // let businessFind = await Business.findById(newReview.business)
  // console.log('businessFind', businessFind)
  // businessFind.reviews.push(newReview)
  // await businessFind.save()

  // let authorFind = await User.findById(newReview.user)
  // console.log('authorFind', authorFind)
  // authorFind.reviews.push(newReview)
  // await authorFind.save()

  console.log('review', newReview)
  res.status(201).json({ review: newReview })
}

// newComment.save().then(result => {
//   Comment.populate(newComment, { path: 'user' }).then(comment => {
//     res.json({
//       message: 'Comment added',
//       comment,
//     })
//   })
// })

const updateReview = async (req, res, next) => {
  const reviewId = req.params.id

  console.log(req.body)
  const { comment, rating } = req.body

  let review
  try {
    review = await Review.findById(reviewId)
  } catch (err) {
    return next(err)
  }

  review.comment = comment
  review.rating = rating

  try {
    const result = await review.save()
  } catch (err) {
    return next(err)
  }

  res.status(200).json({ review: review.toObject({ getters: true }) })
}

const getReview = async (req, res, next) => {
  let review

  const reviewId = req.params.id

  try {
    review = await Review.findById(reviewId).populate('user').exec()
  } catch (err) {
    return next(err)
  }
  console.log('user, in get review', user)
  res.json({ review })
}

const deleteReview = async (req, res, next) => {
  let review

  const reviewId = req.params.id

  try {
    review = await Review.findById(reviewId)
  } catch (err) {
    return next(err)
  }

  try {
    if (review) {
      await review.remove()
    }
  } catch (err) {
    return next(err)
  }

  res.json({ message: 'Delete successfully' })
}

exports.getReviews = getReviews
exports.createReview = createReview
exports.updateReview = updateReview
exports.getReview = getReview
exports.deleteReview = deleteReview
