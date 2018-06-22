const express = require('express');
const router = express.Router();
const lottery = require('../lottery.js');


//get root
router.get('/', function(req, res, next){
  return res.render('index', {});
});

//post / root is used to get settings from user and start the simulation
router.post('/', (req, res) => {
  console.log(req.body);
  // res.redirect('/');
  lottery.play(req.body.drawUntilScore, req.body.howManyWeeks);
  return res.render('results', {results: lottery.scoreCount});
});

router.get('/results', function(req, res, next){
  return res.render('results', {});
});



module.exports = router;
