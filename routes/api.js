const router = require("express").Router();
const companyController = require("../controllers/companyController");
const userController = require("../controllers/userController.js");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bcrypt = require("bcrypt");
const expressSanitizer = require("express-sanitizer");

// API Routes
const booking = {
    name: "xyz detail",
    location: "charlotte",
    package: "package 1",
    summary: "summary",
    price: "too much",
    datetime: "02/17/2018 05:00"
}
// Route to get info from company collection
router.route("/detail").get(companyController.findAll);

// Post booking info
router.put("/booking/", function (req, res) {
    if (session) {
        userController.createBooking(req.params.id, booking).then(res.render('booking', {
            data: req.body
        }));
    } else {
        console.log("no session found");
    }
});

//  Delete Booking after scheduled time

router.delete('/booking/delete/:id', function (req, res) {
    let id = req.params.id;
    db.get().createCollection('menu', function (err, col) {
        col.deleteOne({
            _id: new mongodb.ObjectID(id)
        });
    });
    res.json({
        success: id
    })
});


// Create User

router.post(
    '/user/create', (req, res) => {

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
            let error = new Error("Passwords don't match!");
            res.render('login', {
                error: error.message
            });
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
                res.render('login', {
                    error
                });
            } else {
                req.session.user = user;
                res.redirect("/");
            }
        });
    });

// Log in existing user

router.post(
    '/user/login', (req, res) => {

        req.body.sanitized = {
            email: req.sanitize(req.body.email),
            password: req.sanitize(req.body.password)
        };

        const {
            email,
            password
        } = req.body.sanitized;

        const oldUser = {
            email,
            password
        };

        userController.userLogin(oldUser, (error, user) => {

            if (error) {
                //req.session.error = error;           
                res.render('login', {
                    error
                });
            } else {
                req.session.user = user;
                res.redirect('/');
            }
        });

    });

// Loging out the user

router.get(
    '/user/logout', (req, res) => {

    if (req.session.user) {
        req.session.destroy(err => {
           if (err) return next(err);
              res.redirect('/');
        })
    } else {
            res.redirect('/');
        }
});

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;

// DONT FORGET INDEX[0] for booking