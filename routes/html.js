var express = require("express");
var router = express.Router();
const api = require("./api");
const userController = require("../controllers/userController.js");
const db = require("../models");

// GET home page
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

// GET Detailers page
router.get("/detail", function(req, res, next) {
  res.render("detail", { message: "Detail" });
});

// GET Booking Page
// router.get("/booking", function(req, res, next) {
//   res.render("booking", { message: "Booking" });
// });

router.get("/booking", function(req, res) {
  var query = db.User.find({});
  query.exec(function(err, data) {
    var current = data[0].booking[0];
    console.log(current);
    res.render("booking", { booking: current });
  });
});

// GET Login
router.get("/login", function(req, res, next) {
  res.render("login");
});

router.get('/signup', function (req, res, next) {
  res.render('signup');
});

// API routes
router.use("/api", api);

module.exports = router;
