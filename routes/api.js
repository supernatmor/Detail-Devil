const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bcrypt = require("bcrypt");
const expressSanitizer = require("express-sanitizer");

// API Routes
const userKey = "5a8caaf7ab8c562b5ca9456d";
// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Post booking info
router.put("/booking/", function(req, res) {
  //if (session) {
  userController.createBooking(userKey, req.body);
  //   } else {
  //     console.log("no session found");
  //   }
});

// Delete Booking after scheduled time
router.delete("/booking/delete/:id", function(req, res) {
  var id = req.params.id;
  db.get().createCollection("menu", function(err, col) {
    col.deleteOne({ _id: new mongodb.ObjectID(id) });
  });
  res.json({ success: id });
});

// Create User
//router.route("/user/create").post(userController.createUser);

router.post("/user/create", (req, res) => {
  req.body.sanitized = {
    firstName: req.sanitize(req.body.firstName),
    lastName: req.sanitize(req.body.lastName),
    email: req.sanitize(req.body.email),
    password: req.sanitize(req.body.password),
    confirmedPassword: req.sanitize(req.body.confirmedPassword)
  };

  const {
    firstName,
    lastName,
    email,
    password,
    confirmedPassword
  } = req.body.sanitized;

  const newUser = {
    firstName,
    lastName,
    email,
    password
  };

  userController.createUser(newUser, (err, user) => {
    if (err) throw err;
    console.log(user);
    //res.json({ user });
    res.redirect("/");
  });
  //console.log(req.body);
  //req.session.user = user;
});

// User Login
router.route("/user/login/:id").get(userController.userLogin);

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;

// DONT FORGET INDEX[0] for booking
