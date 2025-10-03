const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const passport = require("passport");

//Signup functionality
router.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

router.post("/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.flash("success", "User Registered Successfully");
    res.redirect("/listings");
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
});

//Login functionality
router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back to WanderAura!");
    res.redirect("/listings");
  }
);

//Logout functionality
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You have been logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;
