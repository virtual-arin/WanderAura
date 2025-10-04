const express = require("express");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware/middleware.js");
const {
  signup,
  renderSignup,
  renderLogin,
  login,
  logout,
} = require("../controllers/user.controller.js");

//router.route (to combine common path for signup route)
router.route("/signup").get(renderSignup).post(signup);

//router.route (to combine common path for login route)
router
  .route("/login")
  .get(renderLogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    login
  );

//Logout functionality
router.get("/logout", logout);

module.exports = router;
