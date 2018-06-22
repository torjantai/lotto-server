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


//handle some errors maybe

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
