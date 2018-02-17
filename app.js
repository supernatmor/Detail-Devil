require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
////////////////////////GHENI'S///////////////////////////////////////////////
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
//////////////////////////////////////////////////////////////////////////////
const expressSanitizer = require("express-sanitizer");
//const users = require('./routes/users');

const app = express();

app.engine(
  ".handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: app.get("views") + "/layouts",
    partialsDir: [app.get("views") + "/partials"]
  })
);
app.set("view engine", ".handlebars");

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
const environment = process.env.NODE_ENV; //set env variable to node_devlopment - changes db location
// console.log(process.env); //logs entire .env object
console.log(process.env[environment + "_db"]); //logs out current database

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSanitizer());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", index);
//app.use('/users', users);

////////////////GHENI'S////////////////////
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/DetailDevilDB",
  collection: "MySessions"
});

app.use(
  session({
    secret: "I love New York",
    resave: true,
    saveUninitialized: true,
    store: store
  })
);
////////////////////////////////////////////

//////////////////////
//////// DALE ////////
//////////////////////
const routes = require("./routes/html");
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/DetailDevilDB"
);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
