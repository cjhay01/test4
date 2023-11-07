var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const session = require('express-session');
const crypto = require('crypto')

const routes = __dirname + "/routes";
var indexRouter = require('./routes/index.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: crypto.randomBytes(64).toString('hex'),
  resave: true,
  saveUninitialized: false
}));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
fs.readdirSync(routes).forEach(file => {
  if (file.endsWith('.js')) {
    const route = require(routes + '/' + file);
    app.use(`/${file}`.slice(0, -3), route);
  }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
