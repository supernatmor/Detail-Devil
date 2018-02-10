const router = require("express").Router();
const companyController = require("../controllers/companyController");
// const userController = require("../controllers/userController.js");

// Routes

// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// // Booking. Get customer info if logged in
// // router.route("user/:id").get(userController.currentUser);

// // User Sign UP. POST Info
// // router.route("/user/login").post(userController.newUser);


module.exports = router;