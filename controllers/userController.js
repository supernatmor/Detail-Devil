const db = require("../models");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const bcrypt = require("bcrypt");
const expressSanitizer = require("express-sanitizer");
//const verifyUser = require("../helpers/verify");


////////////////////GHENI'S///////////////////////////////////////////////

async function verifyUser(email, password) {
  const user = await db.User.findOne({ email });
  const dbPassword = user.password;
  const isValid = await bcrypt.compare(password, dbPassword);
  return {
    isValid,
    user
  };
}

module.exports = {
  
  ///////////////////////////CREATING A NEW UESR AND POSTING TO DB/////////////////////////////
  createUser: (newUser, returnToRoute) => {

    const { email } = newUser;
    
    db.User.findOne({ email })
           .then(userExist => {
              if(userExist) {
                let error = "This email already exists in our databases";
                returnToRoute(error, userExist);
              } else {
                db.User.create(newUser, (error, user) => {
                  returnToRoute(error, user);
              });      
          }
      });
  },
  
  ////////////////////////////BOOKING CONTROLLER/////////////////////////////////////////////////////
  createBooking: function (id, booking) {
    console.log("id :" + id);
    console.log("booking :" + booking);
    db.User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          booking: booking
        }
      },
      { new: true }
    )
      .then(dbModel => console.log(dbModel))
      .catch(err => console.log(err));
  },
  
  ////////////////////////////LOGIN CONTROLLER/////////////////////////////////////////////////////
  userLogin:  async (oldUser, returnToRoute, next) => {
    
    const {
      email,
      password
    } = oldUser;
    
    const isValidObject = await verifyUser(email, password);
    
    let error;

      if (!isValidObject.isValid) {
        error = "Email or passwords don't match our request";
      }
      
      returnToRoute(error, isValidObject.user);
  },
  
  /////////////////////////////////////////lOADING USER PROFILE//////////////////////
  userProfile: function (req, res) {
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
