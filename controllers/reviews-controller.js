const Review = require("../models/review");

const getReviews = async (req, res, next) => {
  let reviews;
  try {
    reviews = await Item.find();
  } catch (err) {
    const error = new HttpError("Couldn't retrieve reviews!" + err, 500);
    return next(error);
  }

  res.json({
    reviews: reviews.map((review) => review.toObject({ getters: true })),
  });
};

const createReview = async (req, res, next) => {
  console.log(req.body);
  const { comment, rating } = req.body;

  const createdReview = new Review({
    comment,
    rating,
  });

  try {
    await createdReview.save();
  } catch (err) {
    const error = new HttpError("Creating review failed, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ review: createdReview });
};

const updateReview = async (req, res, next) => {
  const reviewId = req.params.id;

  console.log(req.body);
  const { comment, rating } = req.body;

  let review;
  try {
    review = await Review.findById(reviewId);
  } catch (err) {
    return next(err);
  }

  review.comment = comment;
  review.rating = rating;

  try {
    const result = await review.save();
  } catch (err) {
    return next(err);
  }

  res.status(200).json({ review: review.toObject({ getters: true }) });
};

const getReview = async (req, res, next) => {
  let review;

  const reviewId = req.params.id;

  try {
    review = await Item.findById(reviewId);
  } catch (err) {
    return next(err);
  }

  res.json({ review });
};

const deleteReview = async (req, res, next) => {
  let review;

  const reviewId = req.params.id;

  try {
    review = await Item.findById(reviewId);
  } catch (err) {
    return next(err);
  }

  try {
    if (review) {
      await review.remove();
    }
  } catch (err) {
    return next(err);
  }

  res.json({ message: "Delete successfully" });
};

exports.getReviews = getReviews;
exports.createReview = createReview;
exports.updateReview = updateReview;
exports.getReview = getReview;
exports.deleteReview = deleteReview;