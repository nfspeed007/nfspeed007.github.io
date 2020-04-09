
// temple weather data
function getCurrentWeather(cityId) {

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=ed727a759e7ac69ef5e052c8da5f94d9&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector('#current-temp').innerHTML = jsObject.main.temp.toFixed(0) + '&deg;' + 'F';
    document.querySelector('#wind-speed').innerHTML = jsObject.wind.speed.toFixed(0) + 'mph';
    document.querySelector('#humidity').innerHTML = jsObject.main.humidity + '&percnt;';

    let windChill = 0;

    if (jsObject.main.temp < 50 && jsObject.wind.speed > 3) {
    windChill = 35.74 + 0.6215 * jsObject.main.temp - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * jsObject.main.temp * 
        Math.pow(jsObject.wind.speed, 0.16);
    }

    if (windChill === 0) {
        document.querySelector('#windChill').innerHTML = 'N/A';
    }
    else {
        document.querySelector('#windChill').innerHTML = windChill.toFixed(2) + '&deg;';
    }
    
    document.querySelector('#weatherDesc').textContent = jsObject.weather[0].main;
    let imgURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    document.querySelector('#weatherImg').setAttribute('src', imgURL);
    document.querySelector('#weatherImg').setAttribute('alt', jsObject.weather[0].main);
  });
}

function getCurrentWeather1(cityId) {
    
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=ed727a759e7ac69ef5e052c8da5f94d9&units=imperial";
    
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        document.querySelector('#current-temp1').innerHTML = jsObject.main.temp.toFixed(0) + '&deg;' + 'F';
        document.querySelector('#wind-speed1').innerHTML = jsObject.wind.speed.toFixed(0) + 'mph';
        document.querySelector('#humidity1').innerHTML = jsObject.main.humidity + '&percnt;';
    
        let windChill = 0;
    
        if (jsObject.main.temp < 50 && jsObject.wind.speed > 3) {
        windChill = 35.74 + 0.6215 * jsObject.main.temp - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * jsObject.main.temp * 
            Math.pow(jsObject.wind.speed, 0.16);
        }
    
        if (windChill === 0) {
            document.querySelector('#windChill1').innerHTML = 'N/A';
        }
        else {
            document.querySelector('#windChill1').innerHTML = windChill.toFixed(2) + '&deg;';
        }
        
        document.querySelector('#weatherDesc1').textContent = jsObject.weather[0].main;
        let imgURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        document.querySelector('#weatherImg1').setAttribute('src', imgURL);
        document.querySelector('#weatherImg1').setAttribute('alt', jsObject.weather[0].main);
      });
    }

    function getCurrentWeather2(cityId) {
    
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=ed727a759e7ac69ef5e052c8da5f94d9&units=imperial";
        
        fetch(apiURL)
          .then((response) => response.json())
          .then((jsObject) => {
            document.querySelector('#current-temp2').innerHTML = jsObject.main.temp.toFixed(0) + '&deg;' + 'F';
            document.querySelector('#wind-speed2').innerHTML = jsObject.wind.speed.toFixed(0) + 'mph';
            document.querySelector('#humidity2').innerHTML = jsObject.main.humidity + '&percnt;';
        
            let windChill = 0;
        
            if (jsObject.main.temp < 50 && jsObject.wind.speed > 3) {
            windChill = 35.74 + 0.6215 * jsObject.main.temp - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * jsObject.main.temp * 
                Math.pow(jsObject.wind.speed, 0.16);
            }
        
            if (windChill === 0) {
                document.querySelector('#windChill2').innerHTML = 'N/A';
            }
            else {
                document.querySelector('#windChill2').innerHTML = windChill.toFixed(2) + '&deg;';
            }
            
            document.querySelector('#weatherDesc2').textContent = jsObject.weather[0].main;
            let imgURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            document.querySelector('#weatherImg2').setAttribute('src', imgURL);
            document.querySelector('#weatherImg2').setAttribute('alt', jsObject.weather[0].main);
          });
        }

        function getCurrentWeather3(cityId) {
    
            const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=ed727a759e7ac69ef5e052c8da5f94d9&units=imperial";
            
            fetch(apiURL)
              .then((response) => response.json())
              .then((jsObject) => {
                document.querySelector('#current-temp3').innerHTML = jsObject.main.temp.toFixed(0) + '&deg;' + 'F';
                document.querySelector('#wind-speed3').innerHTML = jsObject.wind.speed.toFixed(0) + 'mph';
                document.querySelector('#humidity3').innerHTML = jsObject.main.humidity + '&percnt;';
            
                let windChill = 0;
            
                if (jsObject.main.temp < 50 && jsObject.wind.speed > 3) {
                windChill = 35.74 + 0.6215 * jsObject.main.temp - 35.75 * Math.pow(jsObject.wind.speed, 0.16) + 0.4275 * jsObject.main.temp * 
                    Math.pow(jsObject.wind.speed, 0.16);
                }
            
                if (windChill === 0) {
                    document.querySelector('#windChill3').innerHTML = 'N/A';
                }
                else {
                    document.querySelector('#windChill3').innerHTML = windChill.toFixed(2) + '&deg;';
                }
                
                document.querySelector('#weatherDesc3').textContent = jsObject.weather[0].main;
                let imgURL = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
                document.querySelector('#weatherImg3').setAttribute('src', imgURL);
                document.querySelector('#weatherImg3').setAttribute('alt', jsObject.weather[0].main);
              });
            }