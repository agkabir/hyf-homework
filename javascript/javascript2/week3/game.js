const btnStart = document.getElementById("btnStartGame");
const paraS = document.getElementById("paraS");
const paraL = document.getElementById("paraL");

let keyS = 0;
let keyL = 0;

function handleKeyPress(event) {
  if (event.key === "s") {
    keyS++;
    paraS.innerHTML = keyS;
  } else if (event.key === "l") {
    keyL++;
    paraL.innerHTML = keyL;
  }
}

function gameStart() {
  let interval = parseInt(document.getElementById("timeInterval").value);
  paraS.innerHTML = "";
  paraL.innerHTML = "";
  if (interval) {
    window.addEventListener("keypress", handleKeyPress);
    setTimeout(function () {
      window.removeEventListener("keypress", handleKeyPress);
      if (keyS === keyL && keyS != 0 && keyL != 0) {
        alert("Game drawn");
      } else if (keyS > keyL) {
        alert("User S win the game");
      } else if (keyL > keyS) {
        alert("User L win the game");
      } else {
        alert("None partcipate in the game");
      }
      document.getElementById("btnStartGame").innerHTML = "Restart Game"; // this is not working
      keyS = 0;
      keyL = 0;
    }, interval * 1000);
  }
}

btnStart.addEventListener("click", gameStart);
