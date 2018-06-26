const express = require('express');
const router = express.Router();
const lottery = require('../lottery.js');


//get root
router.get('/', function(req, res){
    return res.render('index', {});
});

//post / is used to get settings from user and start the simulation, then render results
router.post('/', (req, res) => {
    console.log(req.body);
    lottery.play(req.body.drawUntilScore, req.body.howManyWeeks);
    return res.redirect('/results');
});

router.get('/results', function(req, res){
    if (!lottery.results) return res.redirect('/');

    const scoreCount = lottery.results.scoreCount;
    const weeksDrawn = lottery.results.weeksDrawn;

    return res.render('results', { scoreCount: scoreCount, weeksDrawn: weeksDrawn });
});



module.exports = router;
