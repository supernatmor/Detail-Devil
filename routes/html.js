var express = require('express');
var router = express.Router();
const api = require('./api');
const session = require("express-session");

// GET home page
router.get('/',  (req, res, next) => {

  const namVal = req.session.user ? req.session.user.firstName : '';
 
  res.render('index', { title: 'Home', name: namVal });
});

// GET Detailers page 
router.get('/detail', function (req, res, next) {
  res.render('detail', { message: 'Detail' });
});

// GET Booking Page
router.get('/booking', function (req, res, next) {
  res.render('booking', { message: 'Booking' });
});

// GET Login
router.get('/login', (req, res, next) => {
  res.render('login');
});

// API routes
router.use("/api", api);

module.exports = router;
