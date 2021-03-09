var score = 0;
var clickingPower = 2;

var cursorCost = 15;
var cursors = 0;
var grandmaCost = 100;
var grandmas = 0;
var ovenCost = 1000;
var ovens = 0;

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

function buyOven() {
  if (score >= ovenCost) {
    score = score - ovenCost;
    ovens = ovens + 1;
    ovenCost = Math.round(ovenCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("ovencost").innerHTML = ovenCost;
    document.getElementById("ovens").innerHTML = ovens;
    updateScorePerSecond();
  }
}

function addToScore(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function updateScorePerSecond() {
  scorePerSecond = cursors + grandmas * 5 + ovens * 70;
  document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.score !== "undefined") score = savedGame.score;
  if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
  if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
  if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
  if (typeof savedGame.grandmaCost !== "undefined") grandmaCost = savedGame.grandmaCost;
  if (typeof savedGame.grandmas !== "undefined") grandmas = savedGame.grandmas;
  if (typeof savedGame.ovenCost !== "undefined") ovenCost = savedGame.ovenCost;
  if (typeof savedGame.ovens !== "undefined") ovens = savedGame.ovens;
}

// Everything that is saved when the game saves is stored as a JSON string in localStorage
function saveGame() {
  var gameSave = {
    score: score,
    clickingPower: clickingPower,
    cursorCost: cursorCost,
    cursors: cursors,
    grandmaCost: grandmaCost,
    grandmas: grandmas,
    ovenCost: ovenCost,
    ovens: ovens
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

// Resets your game
function resetGame() {
  if (confirm("Are you sure you want to reset your game?")) {
    var gameSave = ();
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

// Parses and loads a previous save's JSON string when page is opened //
window.onload = function() {
  loadGame();
  updateScorePerSecond();
  document.getElementById("score").innerHTML = score;
  document.getElementById("cursorcost").innerHTML = cursorCost;
  document.getElementById("cursors").innerHTML = cursors;
  document.getElementById("grandmacost").innerHTML = grandmaCost;
  document.getElementById("grandmas").innerHTML = grandmas;
  document.getElementById("ovencost").innerHTML = ovenCost;
  document.getElementById("ovens").innerHTML = ovens;
};

// Calculates score //
setInterval(function() {
  score = score + cursors;
  score = score + grandmas * 5;
  score = score + ovens * 70;
  document.getElementById("score").innerHTML = score;

  // Adds and updates the score in the browser tab every second //
  document.title = score + " cats - Cat Clicker";
}, 1000); // 1000ms = 1 second //

// Saves the game every 30 seconds //
setInterval(function() {
  saveGame();
}, 30000); // 30000ms = 30 seconds //

// Saves game when ctrl + s is pressed, instead of the browser's default shortcut //
document.addEventListener("keydown", function(event) {
  if(event.ctrlKey && event.which == 83) { // ctrl + s) //
    event.preventDefault();
    saveGame();
  }
}, false);
