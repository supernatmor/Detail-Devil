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
// router.put("/booking/", function (req, res) {
//     if (session) {
//         userController.createBooking(req.params.id, booking).then(res.render('booking', {
//             data: req.body
//         }));
//     } else {
//         console.log("no session found");
//     }
// });

// Delete Booking after scheduled time
// router.delete('/booking/delete/:id', function (req, res) {
//     var id = req.params.id;
//     db.get().createCollection('menu', function (err, col) {
//         col.deleteOne({
//             _id: new mongodb.ObjectID(id)
//         });
//     });
//     res.json({
//         success: id
//     })
// });

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

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };


        userController.createUser(newUser, (err, user) => {
            if (err) throw err;
            //console.log(user);
            //res.json({ user });
            res.redirect("/");
        });
        //console.log(req.body);
        //req.session.user = user;  
    });







router.post(
    '/user/login', (req, res) => {
        console.log("hamilton");

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
            res.render('/', { error } );
        } 

        res.render('/');
        
        //req.session.user = user;
        //res.json({ message: "You were logged in correctly" })
        
    });

});


// User Login
//router.route("/user/login").get(userController.userLogin);

// User Profile
// router.route("/profile").get(userController.userProfile);

module.exports = router;

// DONT FORGET INDEX[0] for booking 




// req.body.sanitized = {
//     firstName: req.sanitize(req.body.firstName),
//     lastName: req.sanitize(req.body.lastName),
//     email: req.sanitize(req.body.email),
//     password: req.sanitize(req.body.password),
//     confirmedPassword: req.sanitize(req.body.confirmedPassword)
//   };

//   const {
//     firstName,
//     lastName,
//     email,
//     password,
//     confirmedPassword
//   } = req.body.sanitized;

//   if (password !== confirmedPassword) {
//     let error = new Error("Passwords don't match!");
//     // res.render('signup', {
//     //   error: error.message
//     // });
//     return;
//   }

//   const newUser = {
//     firstName,
//     lastName,
//     email,
//     password
//   };


// userController.createUser(newUser, (err, user) => {
//   if (err) throw err;
//   req.session.user = user;  
// //   res.json({ message: "You logged in correctly" })
//   res.redirect("/");
// });  

// });




// router.post("/user/login", (req, res) => {

// req.body.sanitized = {
//     email: req.sanitize(req.body.email),
//     password: req.sanitize(req.body.password)
//   };

//   const {
//     email,
//     password
//   } = req.body.sanitized;

//   const oldUser = {
//     email,
//     password
//   };

//   userController.userLogin(oldUser, (err, user) => {
//     if (err) throw err;
//     req.session.user = user;  
//     //res.json({ message: "You were logged in correctly" })
//     res.redirect("/");
//   });  

// });