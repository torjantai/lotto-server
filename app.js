'use strict';

const lottery = require('./lottery');
const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');

const app = express();

//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//maybe use res.locals to store data that will be sent to user.

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


//use routes
const routes = require('./routes/index');
app.use('/', routes);



app.use(express.static('public'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    status: err.status,
    message: err.message,
    error: {}
  });
});

//handle some errors maybe

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
