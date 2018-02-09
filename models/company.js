const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  Name: {
    type: String,
    required: true
  },

  Location: {
    type: String,
    required: true
  },

  URL: {
    type: String,
    required: true
  },
  Phone: {
    type: String
  },
  Address: {
    type: String,
    ref: "Note"
  },
  Packages: {
    standard: {
      Name: { type: String },
      Price: { type: String },
      Description: { type: String },
      Time: { type: Date }
    },
    deluxe: {
      Name: { type: String },
      Price: { type: String },
      Description: { type: String },
      Time: { type: Date }
    },
    ultimate: {
      Name: { type: String },
      Price: { type: String },
      Description: { type: String },
      Time: { type: Date },
      required: false
    },
    required: false
  }
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
