const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = async function verifyUser(email, password) {
  const user = await db.User.findOne({ email }); // THIS WOULD DEF BE IN CONTROLLER
  const dbPassword = user.password;
  const isValid = await bcrypt.compare(password, dbPassword);
  return {
    isValid,
    user
  };
};
