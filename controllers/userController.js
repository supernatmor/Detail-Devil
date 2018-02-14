const db = require("../models");
const session = require('express-session'),
const MongoDBStore = require('connect-mongodb-session')(session),
const bcrypt = require('bcrypt');
const expressSanitizer = require("express-sanitizer");
const verifyUser = require("../helpers/verify");

////////////////////GHENI'S///////////////////////////////////////////////


module.exports = {
  /////////////////////////////////////CREATING A NEW UESR AND POSTING TO DB/////////////////////////////
  createUser: function(user, password) {
    db.User.create(newUser, function(err, user) {
      if (err) throw err;
      console.log(req.session);
      req.session.user = user;
      res.redirect("/profile");
    });
  },
  ////////////////////////////LOGIN CONTROLLER/////////////////////////////////////////////////////
  userLogin: async function(req, res, next){
   req.body.sanitized = {
    email: req.sanitize(req.body.email),
    password: req.sanitize(req.body.password)
  }
  const {
    email,
    password
  } = req.body.sanitized;
  try {
    const isValidObject = await verifyUser(email, password, next);
    if (!isValidObject.isValid)
      throw new Error("The username or password you entered is incorrect.");
    req.session.user = isValidObject.user;
    res.redirect("/profile");
  } catch (error) {
    error.message = "The username or password you entered is incorrect.";
    res.render("login", {
      error
    });
  } /// LINE 109
  },
  /////////////////////////////////////////lOADING USER PROFILE//////////////////////
  userProfile: function(req, res){
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
