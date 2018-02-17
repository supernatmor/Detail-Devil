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
  
  /////////////////////////////////////CREATING A NEW UESR AND POSTING TO DB/////////////////////////////
  createUser: function (newUser, returnToRoute) {


    db.User.create(newUser, function (err, user, next) {
      returnToRoute(err, user);
    });
  },
  
  // createBooking: function (id, booking) {
  //   console.log("id :" + id);
  //   console.log("booking :" + booking);
  //   db.User.findOneAndUpdate(
  //     { _id: id },
  //     {
  //       $set: {
  //         booking: booking
  //       }
  //     },
  //     { new: true }
  //   )
  //     .then(dbModel => console.log(dbModel))
  //     .catch(err => console.log(err));
  // },
  
  
  ////////////////////////////LOGIN CONTROLLER/////////////////////////////////////////////////////
  userLogin:  async (oldUser, returnToRoute) => {
    
    const {
      email,
      password
    } = oldUser;
    
    try {
      const isValidObject = await verifyUser(email, password);
    }
      
      
      let error;
      
      if (!isValidObject.isValid) {
        error = new Error("Invalid request");
      }

      returnToRoute(null, isValidObject.user);
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
