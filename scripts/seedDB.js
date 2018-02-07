const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/DetailDevilDB"
);

const detailSeed = [
  {
    Name: "Testing name",
    Location: "Testing city",
    URL: "testing.com",
    Phone: "555-555-5555",
    Address: "123 testing lane",
    Packages: {
      standard: {
        Name: "testing package",
        Price: "testing price",
        Description: "testing description",
        Time: "testing date stamp"
      },
      deluxe: {
        Name: "testing package 2",
        Price: "testing price 2",
        Description: "testing description 2",
        Time: "testing date stamp 2"
      },
      ultimate: {
        Name: "testing package 3",
        Price: "testing price 3",
        Description: "testing description 3",
        Time: "testing date stamp 3"
      }
    }
  }
];

db.Company.remove({})
  .then(() => db.Company.collection.insertMany(detailSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
