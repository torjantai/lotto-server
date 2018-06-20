'use strict';

const lottery = require('./lottery');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// app.get('/', (req, res) => {
//   res.send('hello');
// })

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/', (req, res) => {
  console.log(req.body);
  // res.redirect('/');
  lottery.play(req.body.drawUntilScore, req.body.howManyWeeks);

  res.send(lottery.scoreCount);
});

app.use(express.static('public'));


app.listen(3000, () => console.log('listening on port 3000'));
