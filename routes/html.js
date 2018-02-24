var express = require("express");
var router = express.Router();
const api = require("./api");
const userController = require("../controllers/userController.js");
const db = require("../models");
const session = require("express-session");

// GET home page
router.get("/", (req, res, next) => {
  console.log(req.session);
  const namVal = req.session.user ? req.session.user.firstName : "";

  res.render("index", { title: "Home", name: namVal });
});

// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Home" });
// });

// GET Detailers page
router.get("/detail", function(req, res, next) {
  res.render("detail", { message: "Detail" });
});

// GET Booking Page
// router.get("/booking", function(req, res, next) {
//   res.render("booking", { message: "Booking" });
// });

router.get("/booking", function(req, res) {
  const id = req.session.user._id;
  var query = db.User.findById({ _id: id });
  query.exec(function(err, data) {
    var current = data.booking[0];
    console.log(current);
    res.render("booking", { booking: current });
  });
});

// GET Login
router.get('/myaccount', function (req, res, next) {
  res.render('myaccount');
});

// API routes
router.use("/api", api);

module.exports = router;
