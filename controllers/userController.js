const db = require("../models");
const session = require('express-session'),
const MongoDBStore = require('connect-mongodb-session')(session),
const bcrypt = require('bcrypt');
////////////////////GHENI'S///////////////////////////////////////////////
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
  res.render("signup", {
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

module.exports = {
  createUser: function() {
    db.User.create(newUser, function(err, user) {
      if (err) throw err;
      console.log(req.session);
      req.session.user = user;
      res.redirect("/profile");
    });
  }
};
//////////////////////////////////////////////////////////////////
