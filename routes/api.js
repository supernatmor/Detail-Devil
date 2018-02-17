const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");

// API Routes

// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Create User
// router.route("/user/create").post(userController.createUser);

router.post("/user/create", function (req, res) {
    console.log(req.body);
    userController.createUser(req.body);
    res.redirect('/');
    // userController.createUser(users);
});

// User Login
// router.route("user/login/:id").get(userController.userLogin);

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;