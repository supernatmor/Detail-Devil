const expressSanitizer = require("express-sanitizer");
module.exports = async function sanitizeUser() {
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
};
