// 1. warmup
function delayLoggedOut(delay, text) {
  setTimeout(function () {
    console.log(text);
  }, delay * 1000);
}
//delayLoggedOut(5, "This string logged after 5 seconds");
//delayLoggedOut(3, "This string logged after 3 seconds");
// Logout after button click
const btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click", () => {
  delayLoggedOut(5, " called after 5 seconds");
});
// plannet logger
const earthLogger = function () {
  console.log("Earth");
};
const saturnLogger = function () {
  console.log("Saturn");
};

function planetLogFunction(logger) {
  logger();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5 log location

function geoFindMe() {
  const status = document.getElementById("testPara");

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.innerHTML = `This is Latitude: ${latitude} ° <br> This is Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#btnLocation").addEventListener("click", geoFindMe);

//7. runAfterDelay
function runAfterDelay(delay, callback) {
  window.setTimeout(function () {
    console.log(`I am delayed for ${delay} seconds`);
  }, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("Should be logged after 4 seconds");
});
//8. double clicked
let amountOfClicks = 0;
document.addEventListener("click", () => {
  amountOfClicks += 1;
  if (amountOfClicks >= 2) console.log("Double clicked!");
  const myInterval = window.setInterval(function () {
    amountOfClicks = 0;
  }, 500);

  window.setTimeout(function () {
    clearInterval(myInterval);
  }, 500);
});

//9. jokeCreator
const logFunnyJoke = function () {
  console.log(
    "Patient: Oh doctor, I’m just so nervous. This is my first operation. Doctor: Don’t worry. Mine too."
  );
};
const logBadJoke = function () {
  console.log("What do you call a fish with no eyes? A fsh.");
};
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) logFunnyJoke();
  else logBadJoke();
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
