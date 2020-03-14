const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ed727a759e7ac69ef5e052c8da5f94d9&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector('#current-temp').textContent = jsObject.main.temp;

    let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    let desc = jsObject.weather[0].description;

    document.querySelector('#imagesrc').textContent = imagesrc;
    document.querySelector('#weather-icon').setAttribute('src', imagesrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
  });