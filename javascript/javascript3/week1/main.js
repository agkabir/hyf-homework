const ul = document.querySelector("#displayWeatherInfo");

function unixToNormalTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
}

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=f3f342be223ff878733d069088d9ef21"
)
  .then((response) => response.json())
  .then((weatherInfo) => {
    const liCity = document.createElement("li");
    liCity.innerHTML = "City : " + weatherInfo.name;
    ul.appendChild(liCity);
    const liTemp = document.createElement("li");
    liTemp.innerHTML =
      "Temperature : " +
      (Number(weatherInfo.main.temp) - 273.15).toFixed(2).toString() +
      "°C";
    ul.appendChild(liTemp);

    const liType = document.createElement("li");
    liType.innerHTML =
      "Weather Type : " +
      '<img src= "http://openweathermap.org/img/w/' +
      weatherInfo.weather[0].icon +
      '.png">';
    ul.appendChild(liType);

    const liWind = document.createElement("li");
    liWind.innerHTML = "Wind Speed : " + weatherInfo.wind.speed + "km/h";
    ul.appendChild(liWind);

    const liCloud = document.createElement("li");
    liCloud.innerHTML = "Cloudy : " + weatherInfo.clouds.all + "%";
    ul.appendChild(liCloud);

    const liSun = document.createElement("li");
    liSun.innerHTML =
      "Sun rise : " +
      unixToNormalTime(weatherInfo.sys.sunrise) +
      " Sun set : " +
      unixToNormalTime(weatherInfo.sys.sunset);
    ul.appendChild(liSun);

    mapDiv = document.getElementById("map");
    mapDiv.innerHTML = `<iframe width="300" 
  height="300" src="https://maps.google.com/maps?q=${weatherInfo.coord.lat},${weatherInfo.coord.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed"/>`;
  });

function geoFindMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      //console.log(lat, long);
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          long +
          "&appid=f3f342be223ff878733d069088d9ef21"
      )
        .then((response) => response.json())
        .then((weatherInfo) => {
          console.log(weatherInfo.name);
        });
    });
  }
}

document.querySelector("#btnLocation").addEventListener("click", geoFindMe);
