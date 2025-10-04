const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
  validateReview,
  isLoggedInUser,
  isReviewAuthor,
} = require("../middleware/middleware.js");
const {
  createReview,
  deleteReview,
} = require("../controllers/review.controller.js");

//Create Review Route
router.post("/", validateReview, isLoggedInUser, wrapAsync(createReview));

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedInUser,
  isReviewAuthor,
  wrapAsync(deleteReview)
);

module.exports = router;
