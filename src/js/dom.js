'use strict';

export function updateWeatherInfo(data) {
  document.getElementById('temp').textContent = data.main.temp;
  document.getElementById('pressure').textContent = data.main.pressure;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('humidity').textContent = data.main.humidity;
  document.getElementById('speed').textContent = data.wind.speed;
  document.getElementById('deg').textContent = data.wind.deg;
  document.getElementById('weatherIcon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}
