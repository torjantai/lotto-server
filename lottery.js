'use strict';

let drawUntilScore = 7; //set the desired score where simulation will be stopped
let scoreCount; //store results in an array where index = score
let howManyWeeks = 1000; //set how many weeks you want to simulate
let weeksDrawn = 0; //counter for simulation rounds
let rowScore = 0;

function consoleLog(printThis, printThat) {
  console.log(printThis, printThat);
}

//this function creates two separate rows that can be conpared against each other
//passes rows to callback
function createRows(callback) {
  const rows =  [ [], [] ];
  let randomBallIndex;
  let balls = [];
  for (let i = 0; i < 2; i++) {
    balls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
                  ,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    for (let j = 0; j < 7; j++) {
      randomBallIndex = Math.floor(Math.random()*balls.length);
      rows[i][j] = balls[randomBallIndex];
      balls.splice(randomBallIndex, 1);
    }
  }
  callback(rows);
}

//compares the rows and updates scoreCount array accordingly
function checkRow(rows) {
  rowScore = 0
  for ( let i = 0; i < 7; i++ ) {
    if ( rows[0].indexOf(rows[1][i]) > -1 ) {
      rowScore++;
    }
  }
  // console.log(rowScore);
  // console.log(weeksDrawn);
  weeksDrawn++;
// if (rowScore < drawUntilScore) {
  scoreCount[rowScore]++;
  // }
}

//runs createRow and checkRow until set conditions are met
function simulation(callback) {
  scoreCount = [0,0,0,0,0,0,0,0];
  weeksDrawn = 0;
  do {
    createRows(checkRow);
  //  console.log(new Date());
  } while ( rowScore < drawUntilScore && weeksDrawn < howManyWeeks);

  callback(scoreCount, weeksDrawn);
}

//simulation(consoleLog);

//takes settings from user, runs the simulation and exports scorecount so that it can be accessed in app.js
function play(theDrawUntilScore, theHowManyWeeks) {
  drawUntilScore = theDrawUntilScore;
  howManyWeeks = theHowManyWeeks;


  simulation(consoleLog);
  return module.exports.scoreCount = scoreCount;
}

//play();

module.exports.play = play;
