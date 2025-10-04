const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const {
  validateListing,
  isLoggedInUser,
  isOwner,
} = require("../middleware/middleware.js");
const {
  listings,
  newListing,
  showListings,
  createListing,
  editListing,
  updateListing,
  deleteListing,
} = require("../controllers/listing.controller.js");

//router.route (to combine common path for home route)
router
  .route("/")
  .get(wrapAsync(listings))
  .post(
    isLoggedInUser,
    validateListing,
    upload.single("listing[image]"),
    wrapAsync(createListing)
  );

//New route
router.get("/new", isLoggedInUser, newListing);

//Edit route
router.get("/:id/edit", isLoggedInUser, isOwner, wrapAsync(editListing));

//router.route (to combine common path for listings route)
router
  .route("/:id")
  .get(wrapAsync(showListings))
  .put(
    isLoggedInUser,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(updateListing)
  )
  .delete(isLoggedInUser, isOwner, wrapAsync(deleteListing));

module.exports = router;
