const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");

// Routes
const users = {
    firstName: "something3",
    lastName: "something3",
    email: "something33@hello.hello",
    password: "something3",
    billing: "something3"
}
// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Create User
// router.route("/user/create").post(userController.createUser);

router.post("/user/create", function (req, res) {
    res.json(users);
    userController.createUser(users);
});

// User Login
// router.route("user/login/:id").get(userController.userLogin);

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;