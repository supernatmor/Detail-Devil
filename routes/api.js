const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bcrypt = require("bcrypt");
const expressSanitizer = require("express-sanitizer");

// API Routes
//const userKey = "5a8cb19e452a483d703ba8b0";
// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Post booking info
router.put("/booking/", async function(req, res) {
  //if (session) {
  const userKey = req.session.user._id;
  await userController.createBooking(userKey, req.body);
  await userController.getBooking(userKey);
  // } else {
  //   alert("no session");
  // }
});
// router.get("/booking/", function(req, res) {
//   userController();
// });
//router.route("/booking").get(userController.getBooking);
// Delete Booking after scheduled time
router.delete("/booking/delete/:id", function(req, res) {
  var id = req.params.id;
  db.get().createCollection("menu", function(err, col) {
    col.deleteOne({ _id: new mongodb.ObjectID(id) });
  });
  res.json({ success: id });
});

router.route("/user/logout").get((req, res) => {
  console.log("in get route logout");
  if (req.session.user) {
    req.session.destroy(err => {
      if (err) return next(err);
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
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

  if (password !== confirmedPassword) {
    let err = new Error("Passwords don't match!");
    res.render("myaccount", { err: err.message });
    return;
  }

  const newUser = {
    firstName,
    lastName,
    email,
    password
  };

  userController.createUser(newUser, (error, user) => {
    if (error) {
      res.render("myaccount", { err: error });
    } else {
      req.session.user = user;
      res.redirect("/");
    }
  });
  //console.log(req.body);
  //req.session.user = user;
});

// User Login
router.post("/user/login", (req, res) => {
  req.body.sanitized = {
    email: req.sanitize(req.body.email),
    password: req.sanitize(req.body.password)
  };
  const { email, password } = req.body.sanitized;
  const oldUser = {
    email,
    password
  };
  userController.userLogin(oldUser, (error, user) => {
    if (error) {
      res.render("myaccount", {
        error
      });
    } else {
      req.session.user = user;
      res.redirect("/");
    }
  });
});

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;

// DONT FORGET INDEX[0] for booking
