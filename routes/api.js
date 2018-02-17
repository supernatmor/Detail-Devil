const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");

// API Routes

// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Post booking info
router.post("/booking/:id", function (req, res) {
    console.log(req.body);
});

// Delete Booking after scheduled time
router.delete('/booking/delete/:id', function (req, res) {
    var id = req.params.id;
    db.get().createCollection('menu', function (err, col) {
        col.deleteOne({ _id: new mongodb.ObjectID(id) });
    });
    res.json({ success: id })
});

// Create User
// router.route("/user/create").post(userController.createUser);

router.post("/user/create", function (req, res) {
    console.log(req.body);
    userController.createUser(req.body);
    res.redirect('/');
});

// User Login
router.route("/user/login/:id").get(userController.userLogin);

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;