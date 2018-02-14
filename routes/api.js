const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");

// Routes
let user = "TEST";
let password = "canihazpazwerd";
// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Create User
router.route("/user/create").post(userController.createUser(user, password));

// User Login
router.route("user/:id").get(userController.userLogin);

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;