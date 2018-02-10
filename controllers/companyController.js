const db = require("../models");

// Defining methods for the companyController
module.exports = {
  findAll: function(req, res) {
    db.Company.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
