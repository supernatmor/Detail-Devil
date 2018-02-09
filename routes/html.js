var express = require('express');
var router = express.Router();
const api = require("./api");

// GET home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// GET Detailers page (FILL IN CORRECT INFO IF NECESSARY)
router.get('/detail', function (req, res, next) {
  res.render('detail', { title: 'Detail' });
});

// GET Booking Page
router.get('/booking', function (req, res, next) {
  res.render('booking', { title: 'Booking' });
});

// API routes
// router.use("/api", api);

module.exports = router;
