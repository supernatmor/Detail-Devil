require("dotenv").config();
var express = require('express');

var exphbs = require('express-handlebars');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/html');
//var users = require('./routes/users');

var app = express();

app.engine('.handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: app.get('views') + '/layouts',
  partialsDir: [app.get('views') + '/partials']
}));
app.set('view engine', '.handlebars')

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
const environment = process.env.NODE_ENV;//set env variable to node_devlopment - changes db location
// console.log(process.env); //logs entire .env object
console.log(process.env[environment + '_db']); //logs out current database

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
