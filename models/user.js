const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    validate:[ fn => fn && fn.length > 2, "Must be at least 2 characters long"]
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    validate: [ln => ln && ln.lenght > 2, "Must be at least 2 characters long"]
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    validate: [function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }, "'{VALUE}' is not a valid email"],
  },
  password: {
    type: String,
    required: true
  },
  billing: {
    type: String,
    required: false
  },
  booking: {
    type: Array,
    required: false
  }
});

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
