const db = require("../models");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bcrypt = require("bcrypt");
const expressSanitizer = require("express-sanitizer");
const verifyUser = require("../helpers/verify");

////////////////////GHENI'S///////////////////////////////////////////////

module.exports = {
  /////////////////////////////////////CREATING A NEW UESR AND POSTING TO DB/////////////////////////////

  createUser: (newUser, returnToRoute) => {
    const { email } = newUser;

    db.User.findOne({ email }).then(userExist => {
      if (userExist) {
        let error = "This email already exists in our databases";
        returnToRoute(error, userExist);
      } else {
        db.User.create(newUser, (error, user) => {
          returnToRoute(error, user);
        });
      }
    });
  },
  //createUser: function(newUser, returnToRoute) {
  // db.User.create(newUser, function(err, user, next) {
  //   returnToRoute(err, user);
  // });
  //},
  createBooking: function(id, booking) {
    // console.log(id);
    // console.log(booking);
    db.User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          booking: booking
        }
      },
      { new: true }
    )
      .then(dbModel => console.log("db model: ", dbModel))
      .catch(err => console.log(err));
  },

  getBooking: function(id, res) {
    console.log("get booking id:", id);
    db.User.findById({ _id: id })
      .then(dbModel => res.send(dbModel[0].booking[0]))
      .catch(err => res.status(422).json(err));
  },
  ////////////////////////////LOGIN CONTROLLER/////////////////////////////////////////////////////
  userLogin: async (oldUser, returnToRoute, next) => {
    const { email, password } = oldUser;

    const isValidObject = await verifyUser(email, password);

    let error;
    if (!isValidObject.isValid || isValidObject.error) {
      error = "The email or password you entered is incorrect.";
    }
    returnToRoute(error, isValidObject.user);
  },
  /////////////////////////////////////////lOADING USER PROFILE//////////////////////
  userProfile: function(req, res) {
    const {
      //// THIS PART WILL PROBABLY BE CONTROLLER FROM LINE 85-90 (WE MAY NEED TO DO UTIL HELPER)
      user
    } = req.session;
    res.render("profile", {
      user
    }); ///// LINE 90
  }
};

//////////////////////////////////////////////////////////////////
