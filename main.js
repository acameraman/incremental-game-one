var score = 0;
var clickingPower = 1;

var cursorCost = 15;
var cursors = 0;
var grandmaCost = 100;
var grandmas = 0;

function buyCursor() {
  if (score >= cursorCost) {
    score = score - cursorCost;
    cursors = cursors + 1;
    cursorCost = Math.round(cursorCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("cursorcost").innerHTML = cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    updateScorePerSecond();
  }
}

function buyGrandma() {
  if (score >= grandmaCost) {
    score = score - grandmaCost;
    grandmas = grandmas + 1;
    grandmaCost = Math.round(grandmaCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("grandmacost").innerHTML = grandmaCost;
    document.getElementById("grandmas").innerHTML = grandmas;
    updateScorePerSecond();
  }
}

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function updateScorePerSecond() {
  scorePerSecond = cursors + grandmas * 5;
  document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}

setInterval(function() {
  score = score + cursors;
  score = score + grandmas * 5;
  document.getElementById("score").innerHTML = score;

  document.title = score + " cats - Cat Clicker";
}, 1000); // 1000ms = 1 second
