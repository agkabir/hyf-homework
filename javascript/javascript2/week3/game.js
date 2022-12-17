const btnStart = document.getElementById("btnStartGame");
const paraS = document.getElementById("paraS");
const paraL = document.getElementById("paraL");
const confettiS = document.getElementById("canvasS");
const confettiL = document.getElementById("canvasL");

let confetti;

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
  try {
    if (confetti) {
      confetti.clear();
    }
  } catch (error) {}
  let interval = parseInt(document.getElementById("timeInterval").value);
  paraS.innerHTML = "";
  paraL.innerHTML = "";
  if (interval) {
    window.addEventListener("keypress", handleKeyPress);

    const timeInterval = setInterval(function () {
      if (interval <= 0) {
        clearInterval(timeInterval);
        document.getElementById("countDown").innerHTML = "Game Over";
      } else {
        document.getElementById("countDown").innerHTML =
          interval + " seconds remaining";
      }
      interval -= 1;
    }, 1000);

    setTimeout(function () {
      window.removeEventListener("keypress", handleKeyPress);
      if (keyS === keyL && keyS != 0 && keyL != 0) {
        alert("Game drawn");
      } else if (keyS > keyL) {
        const confettiSettings = { target: confettiS };
        confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
      } else if (keyL > keyS) {
        const confettiSettings = { target: confettiL };
        confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
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
