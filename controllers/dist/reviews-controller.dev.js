"use strict";

var Review = require('../models/review');

var Business = require('../models/business');

var User = require('../models/user');

var getReviews = function getReviews(req, res, next) {
  var reviews;
  return regeneratorRuntime.async(function getReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Review.find());

        case 3:
          reviews = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", next(_context.t0));

        case 9:
          res.json({
            reviews: reviews.map(function (review) {
              return review.toObject({
                getters: true
              });
            })
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var createReview = function createReview(req, res, next) {
  var _req$body, comment, rating, business, user, businessName, newReview, businessFind, authorFind;

  return regeneratorRuntime.async(function createReview$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _req$body = req.body, comment = _req$body.comment, rating = _req$body.rating, business = _req$body.business, user = _req$body.user, businessName = _req$body.businessName;
          newReview = new Review({
            comment: comment,
            rating: rating,
            business: business,
            user: user,
            businessName: businessName
          }); // review.user = req.user._id

          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(newReview.save());

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](3);
          return _context2.abrupt("return", next(_context2.t0));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(Business.findById(newReview.business));

        case 13:
          businessFind = _context2.sent;
          console.log('businessFind', businessFind);
          businessFind.reviews.push(newReview);
          _context2.next = 18;
          return regeneratorRuntime.awrap(businessFind.save());

        case 18:
          _context2.next = 20;
          return regeneratorRuntime.awrap(User.findById(newReview.user));

        case 20:
          authorFind = _context2.sent;
          console.log('authorFind', authorFind);
          authorFind.reviews.push(newReview);
          _context2.next = 25;
          return regeneratorRuntime.awrap(authorFind.save());

        case 25:
          console.log('review', newReview);
          res.status(201).json({
            review: newReview
          });

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 8]]);
}; // newComment.save().then(result => {
//   Comment.populate(newComment, { path: 'user' }).then(comment => {
//     res.json({
//       message: 'Comment added',
//       comment,
//     })
//   })
// })


var updateReview = function updateReview(req, res, next) {
  var reviewId, _req$body2, comment, rating, review, result;

  return regeneratorRuntime.async(function updateReview$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          reviewId = req.params.id;
          console.log(req.body);
          _req$body2 = req.body, comment = _req$body2.comment, rating = _req$body2.rating;
          _context3.prev = 3;
          _context3.next = 6;
          return regeneratorRuntime.awrap(Review.findById(reviewId));

        case 6:
          review = _context3.sent;
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](3);
          return _context3.abrupt("return", next(_context3.t0));

        case 12:
          review.comment = comment;
          review.rating = rating;
          _context3.prev = 14;
          _context3.next = 17;
          return regeneratorRuntime.awrap(review.save());

        case 17:
          result = _context3.sent;
          _context3.next = 23;
          break;

        case 20:
          _context3.prev = 20;
          _context3.t1 = _context3["catch"](14);
          return _context3.abrupt("return", next(_context3.t1));

        case 23:
          res.status(200).json({
            review: review.toObject({
              getters: true
            })
          });

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 9], [14, 20]]);
};

var getReview = function getReview(req, res, next) {
  var review, reviewId;
  return regeneratorRuntime.async(function getReview$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          reviewId = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Review.findById(reviewId));

        case 4:
          review = _context4.sent;
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", next(_context4.t0));

        case 10:
          // console.log('user, in get review', user)
          res.json({
            review: review
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

var deleteReview = function deleteReview(req, res, next) {
  var review, reviewId;
  return regeneratorRuntime.async(function deleteReview$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          reviewId = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Review.findById(reviewId));

        case 4:
          review = _context5.sent;
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", next(_context5.t0));

        case 10:
          _context5.prev = 10;

          if (!review) {
            _context5.next = 14;
            break;
          }

          _context5.next = 14;
          return regeneratorRuntime.awrap(review.remove());

        case 14:
          _context5.next = 19;
          break;

        case 16:
          _context5.prev = 16;
          _context5.t1 = _context5["catch"](10);
          return _context5.abrupt("return", next(_context5.t1));

        case 19:
          res.json({
            message: 'Delete successfully'
          });

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 7], [10, 16]]);
};

exports.getReviews = getReviews;
exports.createReview = createReview;
exports.updateReview = updateReview;
exports.getReview = getReview;
exports.deleteReview = deleteReview;